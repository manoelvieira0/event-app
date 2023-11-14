import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Manoel', 'Méssia', 'Pérola', 'Chica']

  function handleParticipantAdd() {
    if(participants.includes("Manoel")){
      return Alert.alert("Participante já existe", "Já existe um participante com esse nome na lista.")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover participante ${name}?`, [
      { text: "Não", onPress: () => {}, style: "cancel" },
      {
        text: "Sim", onPress: () => {
          participants.splice(participants.indexOf(name), 1)
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
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
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
