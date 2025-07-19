import CustomInput from "@/components/forms/CustomInput";
import { faEnvelope, faExclamationTriangle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

import app from "@/firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignInForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = (data: any) => {
    setLoading(true);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("Invalid credentials. Please try again.");
        console.error("Error signing in:", errorCode, errorMessage);
      }).finally(() => {
        setLoading(false);
      })
  };

  return (
    <View className="flex flex-col gap-y-6">
      <CustomInput
        control={control}
        name="email"
        label="Email"
        icon={faEnvelope}
        placeholder="Your username"
        rules={{ required: true }}
        labelTextColor="text-text"
      />

      <CustomInput
        control={control}
        name="password"
        label="Password"
        icon={showPassword ? faEyeSlash : faEye}
        placeholder="Your password"
        secureTextEntry={!showPassword}
        toggleVisibility={() => setShowPassword(!showPassword)}
        rules={{ required: true }}
        labelTextColor="text-text"
      />

      {errorMessage && (
        <View className="flex flex-row gap-x-2 items-center">
          <FontAwesomeIcon icon={faExclamationTriangle} size={16} color="#F25287" />
          <Text className="font-dm-sans text-accent">Invalid credentials. Please try again.</Text>
        </View>
      )}

      <Pressable 
        className="flex items-center justify-center bg-primary mt-3 p-4 rounded-xl font-dm-sans mt-4"
        onPress={handleSubmit(handleLogin)}
        disabled={loading}
        style={{ opacity: loading ? 0.8 : 1 }}
      >
        {loading ? (
          <ActivityIndicator size={"small"} color="#0F0F1E" animating={loading} />
        ) : (
          <Text className="text-background font-sora-bold">Sign in</Text>
        )}
      </Pressable>
    </View>
  )
}