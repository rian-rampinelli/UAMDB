import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import colors from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.navigation,
        borderTopColor: colors.border,
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: colors.text,
      tabBarInactiveTintColor: colors.text,
    }}>
      <Tabs.Screen
        name="filmes"
        options={{
          title: 'Filmes',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons name={focused ? 'film' : 'film-outline'} color="#FFFFFF" size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="favoritos"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons name={focused ? 'heart' : 'heart-outline'} color="#FFFFFF" size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
