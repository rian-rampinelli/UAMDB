import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/Colors';

const features = [
  'Pesquisa de filmes.',
  'Exploração por categorias.',
  'Visualização de detalhes.',
  'Lista de favoritos.',
];

const authors = [
  'Rian Barbosa Rampinelli Delgado',
  'Gabriel Fonseca Quina',
];

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.heading}>
          <Text style={styles.title}>UAM<Text style={styles.titleSpan}>DB</Text></Text>
          <Text style={styles.subtitle}>App Sobre Filmes</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre o projeto</Text>
          <Text style={styles.bodyText}>
            O UAMDB é um aplicativo de consulta e exploração de filmes, permitindo pesquisar títulos, visualizar informações e organizar seus filmes favoritos, utilizando a API de TMDB
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Funcionalidades</Text>
          <View style={styles.list}>
            {features.map((feature) => (
              <View key={feature} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bodyText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Autores</Text>
          <View style={styles.list}>
            {authors.map((author) => (
              <View key={author} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bodyText}>{author}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 36,
    gap: 24,
  },
  heading: {
    alignItems: 'center',
    paddingBottom: 4,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 1,
  },
  titleSpan: {
    color: colors.primary,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '600',
  },
  bodyText: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
    flexShrink: 1,
  },
  list: {
    gap: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bullet: {
    color: colors.primary,
    fontSize: 17,
    lineHeight: 22,
  },
});
