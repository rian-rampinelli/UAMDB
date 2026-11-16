import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Inicio() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Inicio</Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },

});
