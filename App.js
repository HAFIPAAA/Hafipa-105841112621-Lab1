import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>saya hafipa</Text>
      <Text style={{
        fontSize: 20,
        fontStyle: 'italic',
        color: 'red',
        textDecorationLine:'underline',
        textShadowColor:'red',
      }}>Text Ukuran 20!</Text>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
      }}>text Ukuran 30!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});