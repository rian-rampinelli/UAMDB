import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/Colors';

export default function User() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.profileHeader}>
          <View style={styles.profileIcon}>
            <Ionicons name="person" size={42} color={colors.text} />
          </View>

          <View style={styles.profileDetails}>
            <Text style={styles.name}>Não autenticado</Text>

            <View style={styles.stats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>0</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statValue}>0</Text>
                <Text style={styles.statLabel}>Seguindo</Text>
              </View>

            </View>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.loginButton, pressed && styles.loginButtonPressed]}
        >
          <Ionicons name="log-in-outline" size={20} color={colors.text} />
          <Text style={styles.loginButtonText}>Fazer login</Text>
        </Pressable>

        <View style={styles.loginHint}>
          <Ionicons name="lock-closed-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.loginHintText}>Mais recursos disponíveis ao fazer login</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  profileIcon: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.surface,
  },
  profileDetails: {
    flex: 1,
    gap: 12,
  },
  name: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  stats: {
    flexDirection: 'row',
    gap: 20,

  },
  statItem: {
    alignItems: 'flex-start',
  },
  statValue: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  loginButton: {
    width: '100%',
    marginTop: 22,
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 20,
  },
  loginButtonPressed: {
    backgroundColor: colors.secondary,
  },
  loginButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  loginHint: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  loginHintText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});
