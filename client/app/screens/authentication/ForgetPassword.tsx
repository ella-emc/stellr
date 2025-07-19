import React from "react";
import { SafeAreaView, View, Text, StatusBar, Platform, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import CustomInput from "@/components/forms/CustomInput";
import { useForm } from "react-hook-form";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function ForgetPasswordScreen() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();
  
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

            <Pressable 
              onPress={() => console.log("Send instructions")}
              className="bg-primary rounded-xl p-4 mt-6 items-center"
            >
              <Text className="font-sora-bold">Send instructions</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}