import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {
  function handleParticipantAdd() {
    console.log('handleParticipantAdd');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>
        Sexta, 17 de novembro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
