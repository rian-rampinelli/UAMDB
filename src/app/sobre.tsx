import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Constants/Colors';

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Sobre</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
});
