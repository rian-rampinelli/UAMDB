import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../Constants/Colors';

export default function TabLayout() {

  return (

    <Drawer screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.navigation,
      },
      
      headerTintColor: colors.text,
      headerTitle: () => (
        <Text style={{ fontSize: 20, fontWeight: '700', color: colors.text }}>
          UAM<Text style={{ color: colors.primary }}>Db</Text>
        </Text>
      ),
      drawerStyle: {
        backgroundColor: colors.navigation,
      },
      drawerActiveTintColor: colors.text,
      drawerInactiveTintColor: colors.text,
    }}>
      <Drawer.Screen
        name="index"
        options={{ title: 'Início', drawerIcon: ({ size }) => <Ionicons name="home" color="#FFFFFF" size={size} /> }}
      />

      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'Filmes', drawerIcon: ({ size }) => <Ionicons name="film" color="#FFFFFF" size={size} /> }}
      />

      <Drawer.Screen
        name="user"
        options={{ title: 'User', drawerIcon: ({ size }) => <Ionicons name="person" color="#FFFFFF" size={size} /> }}
      />
    </Drawer>
  );
}
