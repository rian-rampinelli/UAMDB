import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../Constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.navigation,
      },
      tabBarActiveTintColor: colors.text,
      tabBarInactiveTintColor: colors.text,
    }}>
      <Tabs.Screen
        name="filmes"
        options={{ title: 'Filmes', tabBarIcon: ({ size }) => <Ionicons name="film" color="#FFFFFF" size={size} /> }}
      />

      <Tabs.Screen
        name="favoritos"
        options={{ title: 'Favoritos', tabBarIcon: ({ size }) => <Ionicons name="heart" color="#FFFFFF" size={size} /> }}
      />
    </Tabs>
  );
}
