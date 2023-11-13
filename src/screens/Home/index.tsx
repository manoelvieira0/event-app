import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Manoel', 'Méssia', 'Pérola', 'Chica']

  function handleParticipantAdd() {
    console.log('handleParticipantAdd');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no participante ${name}`);
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

      <ScrollView showsVerticalScrollIndicator={false}> 
        {
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}
