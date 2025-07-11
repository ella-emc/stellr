import { faEnvelope, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

export default function SignUpForm1() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <View>
      <Controller 
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View className="flex-col gap-y-2">   
            <Text className="text-text/80 font-dm-sans">Email</Text>       
            <TextInput
              className="bg-backgroundLight text-white p-4 rounded-xl mb-1 font-dm-sans relative"
              placeholder="example@domain.com"
              placeholderTextColor="#E5E5E540"
              value={value}
              onChangeText={onChange}
            />
            <View className="absolute right-4 top-1/2">
              <FontAwesomeIcon 
                icon={faEnvelope} 
                size={18} 
                style={{ color: "#FFFFFF", opacity: 0.5 }}
              />
            </View>
          </View>
        )}
      />

      <Controller 
        control={control}
        name="username"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View className="flex-col gap-y-2">   
            <Text className="text-accent font-dm-sans">Username</Text>       
            <TextInput
              className="bg-backgroundLight text-white p-4 rounded-xl mb-1 font-dm-sans relative"
              placeholder="Your username"
              placeholderTextColor="#E5E5E540"
              value={value}
              onChangeText={onChange}
            />
            <View className="absolute right-4 top-1/2">
              <FontAwesomeIcon 
                icon={faUserAstronaut} 
                size={18} 
                style={{ color: "#FFFFFF", opacity: 0.5 }}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}