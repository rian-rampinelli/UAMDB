import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, View, } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/Colors";
import { searchMedia } from "../../api/Movie";
import { MediaResult } from "../../types/MovieType";

export default function Buscar() {
    const [nomeDigitado, setNomeDigitado] = useState("");
    const [midiasBuscadas, setMidiasBuscadas] = useState<MediaResult[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const termo = nomeDigitado.trim();

        if (termo.length < 2) {
            setMidiasBuscadas([]);
            setErro("");
            setCarregando(false);
            return;
        }

        //efeito para contralar reqs antiga.
        let efeitoAtivo = true;
        setCarregando(true);
        setErro("");


        // deboucing para quando o user digitar n fazer a req automaticamente
        const timeout = setTimeout(async () => {
            try {
                const data = await searchMedia(termo);
                if (efeitoAtivo) {
                    setMidiasBuscadas(data.results ?? []);
                }
            } catch {
                if (efeitoAtivo) {
                    setMidiasBuscadas([]);
                    setErro("Não foi possível buscar. Tente novamente.");
                }
            } finally {
                if (efeitoAtivo) {
                    setCarregando(false);
                }
            }
        }, 450);
        


        return () => {
            efeitoAtivo = false;
            clearTimeout(timeout);
        };
    }, [nomeDigitado]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Encontre sua próxima história</Text>
                        <Text style={styles.subtitulo}>Busque filmes, séries e pessoas</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={nomeDigitado}
                        onChangeText={setNomeDigitado}
                        placeholder="Título, série ou pessoa..."
                        placeholderTextColor={colors.textSecondary}
                        returnKeyType="search"
                        accessibilityLabel="Pesquisar filmes, séries e pessoas"
                    />
                    {carregando && <ActivityIndicator style={styles.loading} />}
                    {erro && <Text style={styles.mensagem}>{erro}</Text>}
                    {!carregando && !erro && nomeDigitado.trim().length >= 2 && midiasBuscadas.length === 0 && (
                        <Text style={styles.mensagem}>Nenhum resultado encontrado.</Text>
                    )}
                    <FlatList
                        data={midiasBuscadas}
                        //funçao que recebe o item e renderiza na tela, equivale ao map
                        renderItem={({ item }) => {
                            const nome = item.title ?? item.name ?? "Sem nome";
                            const caminhoImagem = item.media_type === "person" ? item.profile_path : item.poster_path;

                            return (
                                <View style={styles.card}>
                                    <View style={styles.areaImagem}>
                                        {caminhoImagem ? (
                                            <Image
                                                source={{ uri: `https://image.tmdb.org/t/p/w500/${caminhoImagem}` }}
                                                style={styles.imagem}
                                                resizeMode="cover"
                                                accessibilityLabel={`Imagem de ${nome}`}
                                            />
                                        ) : (
                                            <View style={[styles.imagem, styles.semImagem]}>
                                                <Text style={styles.semImagemTexto}>Sem imagem</Text>
                                            </View>
                                        )}
                                    </View>
                                    <View style={styles.detalhes}>
                                        <Text style={styles.nome} numberOfLines={2}>{nome}</Text>
                                        <Text style={styles.descricao} numberOfLines={3}>
                                            {item.media_type === "person"
                                                ? item.known_for_department ?? "Pessoa"
                                                : item.overview ?? "Descri��o indispon�vel."}
                                        </Text>
                                    </View>
                                </View>
                            );
                        }}
                        keyExtractor={(item) => `${item.media_type}-${item.id}`}
                        contentContainerStyle={styles.lista}
                        keyboardShouldPersistTaps="handled"
                    />
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
        paddingHorizontal: 20,
        paddingTop: 18,
    },
    header: {
        marginBottom: 16,
    },
    titulo: {
        color: colors.text,
        fontSize: 25,
        lineHeight: 31,
        fontWeight: "800",
        letterSpacing: -0.5,
    },
    subtitulo: {
        color: colors.textSecondary,
        fontSize: 14,
        marginTop: 5,
    },
    text: {
        color: colors.text,
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 12,
    },
    input: {
        backgroundColor: colors.surface,
        color: colors.text,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 15,
        marginBottom: 8,
    },
    loading: {
        marginTop: 16,
    },
    mensagem: {
        color: colors.text,
        marginTop: 16,
    },
    lista: {
        paddingTop: 16,
        paddingBottom: 24,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border,
    },
    areaImagem: {
        width: 76,
        height: 108,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: colors.surface,
    },
    imagem: {
        width: "100%",
        height: "100%",
    },
    semImagem: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surface,
    },
    semImagemTexto: {
        color: colors.textSecondary,
        fontSize: 12,
        textAlign: "center",
    },
    detalhes: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "center",
        paddingLeft: 14,
    },
    nome: {
        color: colors.text,
        fontSize: 15,
        fontWeight: "700",
    },
    descricao: {
        color: colors.textSecondary,
        fontSize: 13,
        lineHeight: 18,
        marginTop: 6,
    },
});
