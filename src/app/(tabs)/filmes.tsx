import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Filmes() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text>filmes</Text>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>

    )
}