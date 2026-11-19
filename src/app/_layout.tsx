import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import colors from '../constants/Colors';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.navigation,
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
        },
        headerTintColor: colors.text,
        headerTitle: () => (
          <Text style={{ fontSize: 20, fontWeight: '700', color: colors.text }}>
            UAM<Text style={{ color: colors.primary }}>DB</Text>
          </Text>
        ),
        drawerStyle: {
          backgroundColor: colors.navigation,
          borderRightColor: colors.border,
          borderRightWidth: 1,
        },
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.text,
      }}
    >
      <Drawer.Screen
        name="(tabs)"                            ///passa props auto 
        options={{ title: 'Início', drawerIcon: ({ size, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color="#FFFFFF" size={size} /> }}
      />
      <Drawer.Screen
        name="sobre"
        options={{ title: 'Sobre', drawerIcon: ({ size, focused }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color="#FFFFFF" size={size} /> }}
      />
      <Drawer.Screen
        name="user"
        options={{ title: 'User', drawerIcon: ({ size, focused }) => <Ionicons name={focused ? 'person' : 'person-outline'} color="#FFFFFF" size={size} /> }}
      />
      <Drawer.Screen name="index" options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer>
  );
}
