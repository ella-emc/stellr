import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";

export default function ProtectedHome() {
  const router = useRouter();
  const isAuthenticated = false; 

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/screens/authentication/SignIn");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}