import CustomInput from "@/components/forms/CustomInput";
import { faCalendarAlt, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

type SignUpForm1Props = {
  step: number;
  setStep: (step: number) => void;
}

export default function SignUpForm2({
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
        name="fName"
        rules={{ required: true }}
        placeholder="e.g. Kara"
        label="First Name"
        icon={faUserAstronaut}
      />

      <CustomInput 
        control={control}
        name="mName"
        placeholder="e.g. Jane"
        label="Middle Name (optional)"
        icon={faUserAstronaut}
      />

      <CustomInput 
        control={control}
        name="lName"
        rules={{ required: true }}
        placeholder="e.g. Danvers"
        label="Last Name"
        icon={faUserAstronaut}
      />

      <CustomInput 
        control={control}
        name="birthdate"
        rules={{ required: true, pattern: /^\d{4}-\d{2}-\d{2}$/ }}
        placeholder="MM-DD-YYYY"
        label="Birthday"
        icon={faCalendarAlt}
      />

      <View className="flex flex-row justify-between">
        <Pressable
          className="flex w-1/3 self-end items-center justify-center border-2 border-accent p-4 rounded-xl font-dm-sans mt-4"
          onPress={() => setStep(step - 1)}
        >
          <Text className="text-accent font-sora-bold">Back</Text>
        </Pressable>
        <Pressable
          className="flex w-1/3 self-end items-center justify-center border-2 border-accent p-4 rounded-xl font-dm-sans mt-4"
          onPress={() => setStep(step + 1)}
        >
          <Text className="text-accent font-sora-bold">Next</Text>
        </Pressable>
      </View>
    </View>
  )
}