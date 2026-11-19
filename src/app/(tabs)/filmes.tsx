import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/Colors";
import { searchNowPlaying } from "../../api/Movie";
import { NowPlayingMovie } from "../../types/MovieType";



export default function Filmes() {
    const [nowPlaying, setNowPlaying] = useState<NowPlayingMovie[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        let ativo = true;

        async function carregarNowPlaying() {
            try {
                const data = await searchNowPlaying();
                if (ativo){
                    setNowPlaying(data.results ?? []);
                }
            } catch (erro) {
                console.log("Erro ao carregar filmes em cartaz:", erro);
            } finally {
                if (ativo){
                    setCarregando(false);
                }
            }
        }

        carregarNowPlaying();
        return () => {
            ativo = false;
        };
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.titulo}>Now Playing</Text>
                    {carregando ? (
                        <ActivityIndicator color={colors.text} style={styles.loading} />
                    ) : (
                        <FlatList
                            horizontal
                            data={nowPlaying}
                            keyExtractor={(item) => String(item.id)}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.lista}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    {item.poster_path ? (
                                        <Image
                                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                            style={styles.poster}
                                            resizeMode="cover"
                                            accessibilityLabel={`Pôster de ${item.title}`}
                                        />
                                    ) : (
                                        <View style={[styles.poster, styles.semPoster]}>
                                            <Text style={styles.semPosterTexto}>Sem imagem</Text>
                                        </View>
                                    )}
                                    <Text style={styles.nome} numberOfLines={2}>{item.title}</Text>
                                </View>
                            )}
                        />
                    )}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        paddingTop: 24,
    },
    titulo: {
        color: colors.text,
        fontSize: 24,
        fontWeight: "700",
        paddingHorizontal: 24,
        marginBottom: 16,
    },
    loading: {
        marginTop: 20,
    },
    lista: {
        paddingHorizontal: 24,
        paddingBottom: 16,
        gap: 14,
    },
    card: {
        width: 145,
    },
    poster: {
        width: "100%",
        height: 215,
        borderRadius: 8,
        backgroundColor: colors.surface,
    },
    semPoster: {
        alignItems: "center",
        justifyContent: "center",
    },
    semPosterTexto: {
        color: colors.textSecondary,
        fontSize: 12,
    },
    nome: {
        color: colors.text,
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8,
    },
});
