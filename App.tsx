import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
    return (
        <>
            <View style={styles.header}>

            </View>
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#6B6B6B"
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    header: {
        backgroundColor: 'black',
        padding: 100,
    },
    form: {
        flexDirection: 'row',
        marginTop: -55,
    },
    input: {
        flex: 1,
        backgroundColor: "#131016",
        borderWidth: 1,
        borderRadius: 7,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 10,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#1F6F9F",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
        borderColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1.5,
        width: 23,
    }
});
