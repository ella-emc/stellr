import { Stack } from "expo-router";
import React, { useState } from "react";
import { View, Text, Platform, SafeAreaView, StatusBar } from "react-native";
import SignUpForm1 from "./components/SignUpForm1";
import SignUpForm2 from "./components/SignUpForm2";
import SignUpForm3 from "./components/SignUpForm3";

export default function SignUpScreen() {
  const [step, setStep] = useState<number>(1);

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
        <View className="flex-1 px-12 bg-background">
          <View className="flex flex-col pt-12">
            <Text className="text-text font-sora-bold text-4xl">Create</Text>
            <Text className="text-text font-sora-bold text-4xl">account</Text>
          </View>
          <View>
            <Text className="text-text font-dm-sans py-10 tracking-widest">{step} of 3</Text>
            {step === 1 && <SignUpForm1  step={step} setStep={setStep} />}
            {step === 2 && <SignUpForm2 step={step} setStep={setStep} />}
            {step === 3 && <SignUpForm3 step={step} setStep={setStep} />}
            {/* Additional steps to be added */}
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}