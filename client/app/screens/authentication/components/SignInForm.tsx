import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";

export default function SignInForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <View className="flex flex-col">
      <Controller 
        control={control}
        name="username"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View className="flex-col gap-y-2">   
            <Text className="text-accent font-dmSans">Username</Text>       
            <TextInput
              className="bg-backgroundLight text-white p-4 rounded-xl mb-4 font-dmSans relative"
              placeholder="Username"
              placeholderTextColor="#FFFFFF40"
              value={value}
              onChangeText={onChange}
            />
            <View className="absolute right-4 top-1/2 -translate-y-1/4">
              <FontAwesomeIcon icon={faUserAstronaut} size={18} style={{ color: "#FFFFFF", opacity: 0.5 }}/>
            </View>
          </View>
        )}
      />
      {errors.username && <Text className="text-red-500">Username is required</Text>}
    </View>
  )
}