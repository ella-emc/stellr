import { SafeAreaView, View, Text, StatusBar, Platform } from "react-native";
import { Stack } from "expo-router";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function SignInScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        className="flex-1 bg-background"
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <StatusBar backgroundColor="white" />

        <ImageBackground
          source={require("../../../assets/images/nebula.jpg")}
          className="flex-1"
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          imageStyle={{ opacity: 0.75 }}
        >
          {/* Gradient overlay */}
          <LinearGradient
            colors={["transparent", "#0F0F1E"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }} 
            className="absolute w-full h-full"
          />

          <View className="flex-1 items-center justify-center gap-y-6">
            <Text className="text-white font-dmSans text-sm tracking-[0.2em]">WELCOME TO</Text>
            <Text className="text-white font-sora text-5xl tracking-[0.2em]">Stellr</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}