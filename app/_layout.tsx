import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      {/* <SafeAreaProvider> */}
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
      {/* </SafeAreaView> */}
      {/* </SafeAreaProvider> */}
    </>
  );
}
