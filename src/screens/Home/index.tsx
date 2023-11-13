import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>
        Sexta, 17 de novembro de 2023
      </Text>

      <TextInput 
      placeholder='Nome do participante' 
      placeholderTextColor="#6B6B6B"
      style={styles.input}/>
    </View>
  );
}
