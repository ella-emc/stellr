import React from "react";
import { SafeAreaView, View, Text, StatusBar, Platform } from "react-native";
import { Link, Stack } from "expo-router";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useForm } from "react-hook-form";
import SignInForm from "./components/SignInForm";

export default function SignInScreen() {
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

        <ImageBackground
          source={require("../../../assets/images/nebula.jpg")}
          className="flex-1"
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
          imageStyle={{ opacity: 0.8 }}
        >
          {/* Gradient overlay */}
          <LinearGradient
            colors={["transparent", "#0F0F1E"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }} 
            className="absolute w-full h-full"
          />

          <View className="flex-1 pb-28 pt-14">
            <View className="flex items-center justify-center gap-y-6 py-16">
              <Text className="text-white font-dmSans text-sm tracking-[0.2em]">WELCOME TO</Text>
              <Text className="text-white font-sora text-5xl tracking-[0.2em]">Stellr</Text>
            </View>
            <View className="px-12">
              <SignInForm />
              <Text className="text-text font-dmSans mt-8">
                Don't have an account yet? <Link href="/screens/authentication/SignUp" className="text-accent">Sign up</Link>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}