import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Constants/Colors';

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 24,
  },

});
