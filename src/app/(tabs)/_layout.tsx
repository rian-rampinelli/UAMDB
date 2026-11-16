import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import colors from '../../constants/Colors';

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
        options={{ title: 'Início', tabBarIcon: ({ size }) => <Ionicons name="home" color="#FFFFFF" size={size} /> }}
      />

      <Tabs.Screen
        name="favoritos"
        options={{ title: 'Favoritos', tabBarIcon: ({ size }) => <Ionicons name="heart" color="#FFFFFF" size={size} /> }}
      />
    </Tabs>
  );
}
