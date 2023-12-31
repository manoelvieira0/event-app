import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [participant, setParticipant] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participant.includes(participantName)) {
      return Alert.alert("Participante já existe.")
    }

    setParticipant([...participant, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    const newListParticipant = participant.filter(participant => participant !== name)

    Alert.alert("Remover", `Remover participante ${name}?`, [
      { text: "Não", onPress: () => { }, style: "cancel" },
      {
        text: "Sim", onPress: () => {
          setParticipant(newListParticipant)
        }
      }
    ])
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
          onChangeText={setParticipantName}
          value={participantName} />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participant}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
            </Text>
          )
        }}
      />
    </View>
  );
}
