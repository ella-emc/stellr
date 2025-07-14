import CustomInput from "@/components/forms/CustomInput";
import { faEnvelope, faEye, faEyeSlash, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

type SignUpForm1Props = {
  step: number;
  setStep: (step: number) => void;
}

export default function SignUpForm1({
  step,
  setStep
}: SignUpForm1Props) {
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
        className="flex w-1/3 self-end items-center justify-center border-2 border-accent p-4 rounded-xl font-dm-sans mt-4"
        onPress={() => setStep(step + 1)}
      >
        <Text className="text-accent font-sora-bold">Next</Text>
      </Pressable>
    </View>
  )
}