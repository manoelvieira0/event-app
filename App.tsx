import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      padding: 24,
      backgroundColor: '#131016'
    }}>
      <Text style={{
        color: '#FDFCFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>Nome do evento</Text>

      <Text style={{
        color: '#6b6b6b',
        fontSize: 16,
      }}>
        Sexta, 17 de novembro de 2023
      </Text>
    </View>
  );
}
