import React, { useEffect } from 'react';
import '../global.css';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { Sora_400Regular, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';
import { DMSans_400Regular, DMSans_600SemiBold, DMSans_700Bold } from '@expo-google-fonts/dm-sans';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Sora: Sora_400Regular,
    'Sora SemiBold': Sora_600SemiBold,
    'DM Sans': DMSans_400Regular,
    'DM Sans Bold': DMSans_700Bold,
    'DM Sans SemiBold': DMSans_600SemiBold,
    'Sora Bold': Sora_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
