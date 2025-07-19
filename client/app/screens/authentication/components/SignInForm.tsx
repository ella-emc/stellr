import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View, TouchableOpacity, Button, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "@/components/forms/CustomInput";

export default function SignInForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    // Submission logic goes here
  };

  return (
    <View className="flex flex-col gap-y-6">
      <CustomInput
        control={control}
        name="username"
        label="Username"
        icon={faUserAstronaut}
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

      <Pressable 
        className="flex items-center justify-center bg-primary mt-4 p-4 rounded-xl font-dm-sans mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-background font-sora-bold">Sign in</Text>
      </Pressable>
    </View>
  )
}