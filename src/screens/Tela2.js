import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Tela2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Secundária</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar para a Tela 1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff'
  },
  button: {
    backgroundColor: '#B00020',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});