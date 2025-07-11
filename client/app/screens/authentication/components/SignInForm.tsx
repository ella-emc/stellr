import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View, TouchableOpacity, Button, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function SignInForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    // Submission logic goes here
  };

  return (
    <View className="flex flex-col">
      <Controller 
        control={control}
        name="username"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View className="flex-col gap-y-2">   
            <Text className="text-text font-dm-sans">Username</Text>       
            <TextInput
              className="bg-backgroundLight text-white p-4 rounded-xl mb-8 font-dm-sans relative"
              placeholder="Your username"
              placeholderTextColor="#FFFFFF40"
              value={value}
              onChangeText={onChange}
            />
            <View className="absolute right-4 top-1/2 -translate-y-1/2">
              <FontAwesomeIcon 
                icon={faUserAstronaut} 
                size={18} 
                style={{ color: "#FFFFFF", opacity: 0.5 }}
              />
            </View>
          </View>
        )}
      />
      {errors.username && <Text className="text-red-500">Username is required</Text>}

      <Controller 
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View className="flex-col gap-y-2">   
            <Text className="text-text font-dm-sans">Password</Text>       
            <TextInput
              className="bg-backgroundLight text-white p-4 rounded-xl mb-4 font-dm-sans relative"
              placeholder="Your password"
              placeholderTextColor="#FFFFFF40"
              value={value}
              onChangeText={onChange}
              secureTextEntry={!showPassword}
            />
            <View className="absolute right-4 top-1/2 -translate-y-1/4">
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon 
                  icon={showPassword ? faEyeSlash : faEye} 
                  size={18} 
                  style={{ color: "#FFFFFF", opacity: 0.5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {errors.password && <Text className="text-red-500">Username is required</Text>}

      <Pressable 
        className="flex items-center justify-center bg-accent mt-9 p-4 rounded-xl font-dm-sans mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-background font-sora">Sign in</Text>
      </Pressable>
    </View>
  )
}