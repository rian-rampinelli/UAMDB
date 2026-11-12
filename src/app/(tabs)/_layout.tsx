import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="filmes"
        options={{ title: 'Filmes' }}
      />

      <Tabs.Screen
        name="favoritos"
        options={{ title: 'Favoritos' }}
      />
    </Tabs>
  );
}