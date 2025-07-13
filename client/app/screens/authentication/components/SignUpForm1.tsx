import CustomInput from "@/components/forms/CustomInput";
import { faEnvelope, faEye, faEyeSlash, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";

export default function SignUpForm1() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  // State to handle password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    // Submission logic goes here
  };

  return (
    <View className="flex-col gap-y-4">
      <CustomInput 
        control={control}
        name="Email"
        rules={{ required: true }}
        placeholder="example@domain.com"
        label="Email"
        icon={faEnvelope}
      />

      <CustomInput 
        control={control}
        name="username"
        rules={{ required: true }}
        placeholder="Your username"
        label="Username"
        icon={faUserAstronaut}
      />

      <CustomInput 
        control={control}
        name="password"
        rules={{ required: true, minLength: 8 }}
        placeholder="Your password"
        label="Create Password"
        icon={showPassword ? faEyeSlash : faEye}
        secureTextEntry={!showPassword}
        toggleVisibility={() => setShowPassword(!showPassword)}
      />

      <CustomInput 
        control={control}
        name="confirmPassword"
        rules={{ required: true, validate: (value: string) => value === getValues("password") || "Passwords do not match" }}
        placeholder="Confirm your password"
        label="Confirm Password"
        icon={showConfirmPassword ? faEyeSlash : faEye}
        secureTextEntry={!showConfirmPassword}
        toggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
      />

      <Pressable 
        className="flex items-center justify-center bg-primary mt-9 p-4 rounded-xl font-dm-sans mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-background font-sora-bold">Next</Text>
      </Pressable>
    </View>
  )
}