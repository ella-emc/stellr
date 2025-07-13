import CustomInput from "@/components/forms/CustomInput";
import { faEnvelope, faEye, faEyeSlash, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

export default function SignUpForm1() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  // State to handle password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

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
    </View>
  )
}