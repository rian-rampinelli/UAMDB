import { Drawer } from 'expo-router/drawer';

export default function TabLayout() {

  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ title: 'Início' }}
      />

      <Drawer.Screen
        name="user"
        options={{ title: 'User' }}
      />
    </Drawer>

  );
}
