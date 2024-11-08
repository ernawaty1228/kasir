import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Kasir", headerShown: false }}  
      />
      <Tabs.Screen
        name="tambahItem"
        options={{ title: "Tambah Item", headerShown: false }} 
      />
      <Tabs.Screen
        name="riwayat"
        options={{ title: "Riwayat", headerShown: false }}
      />
    </Tabs>
  );
}
