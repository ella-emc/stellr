import React, { useState } from "react";
import { SafeAreaView, View, Text, StatusBar, Platform, Pressable, ActivityIndicator } from "react-native";
import { Stack, router } from "expo-router";
import CustomInput from "@/components/forms/CustomInput";
import { useForm } from "react-hook-form";
import { faArrowLeft, faEnvelope, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { getAuth, sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";
import app from "@/firebaseConfig";

export default function ForgetPasswordScreen() {
  type FormData = { email: string };
  const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>();
  const [invalidEmailMessage, setInvalidEmailMessage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSendPasswortResetEmail = (data: FormData) => {
    setLoading(true);
    const auth = getAuth(app);
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        console.log("Password reset email sent.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorMessage);
      })
      .finally(() => {
        console.log("Process done.");
        setLoading(false);
      });
  }
  
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        className="flex-1 bg-background"
        style={{
          paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <StatusBar backgroundColor="white" />
        
        <View className="px-12 py-24">
          <Pressable onPress={() => router.back()}>
            <FontAwesomeIcon icon={faArrowLeft} size={24} color="#E5E5E5" />
          </Pressable>
          <Text className="font-sora-bold text-text text-4xl mt-8">Reset my</Text>
          <Text className="font-sora-bold text-text text-4xl">password</Text>

          <Text className="text-text font-dm-sans py-10">
            Enter the email address associated with your account to receive a password reset link.
          </Text>

          <View className="flex flex-col">
            <CustomInput
              name="email"
              control={control} 
              label="Email"
              placeholder="Enter your email"
              icon={faEnvelope}
            />

            {invalidEmailMessage && (
              <View className="flex flex-row gap-x-2 items-center mt-2">
                <FontAwesomeIcon icon={faExclamationTriangle} size={16} color="#F25287" />
                <Text className="font-dm-sans text-accent">This email does not exist</Text>
              </View>
            )}

            <Pressable 
              onPress={handleSubmit(handleSendPasswortResetEmail)}
              className="flex items-center bg-primary rounded-xl p-4 mt-6 items-center"
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size={"small"} color="#0F0F1E" animating={loading} />
              ) : (
                <Text className="font-sora-bold">Send instructions</Text>
              )}
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}