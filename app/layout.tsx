import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title:"tabs",headerShown: false }}
      />
    </Stack>
  );
}