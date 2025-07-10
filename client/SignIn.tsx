import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Stack } from 'expo-router';

export default function SignInScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView>
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="font-bold">Sign uppp</Text>
        </View>       
      </SafeAreaView>
    </>
  );
}