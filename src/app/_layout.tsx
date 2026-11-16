import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import colors from '../Constants/Colors';

export default function DrawerLayout() {
  return (
    <Drawer
      
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.navigation },
        headerTintColor: colors.text,
        headerTitle: () => (
          <Text style={{ fontSize: 20, fontWeight: '700', color: colors.text }}>
            UAM<Text style={{ color: colors.primary }}>Db</Text>
          </Text>
        ),
        drawerStyle: { backgroundColor: colors.navigation },
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.text,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'Início', drawerIcon: ({ size }) => <Ionicons name="home" color="#FFFFFF" size={size} /> }}
      />
      <Drawer.Screen
        name="sobre"
        options={{ title: 'Sobre', drawerIcon: ({ size }) => <Ionicons name="information-circle" color="#FFFFFF" size={size} /> }}
      />
      <Drawer.Screen
        name="user"
        options={{ title: 'User', drawerIcon: ({ size }) => <Ionicons name="person" color="#FFFFFF" size={size} /> }}
      />
      <Drawer.Screen name="index" options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer>
  );
}
