import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Principal</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Tela2')}
      >
        <Text style={styles.buttonText}>Ir para Tela 2</Text>
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
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});