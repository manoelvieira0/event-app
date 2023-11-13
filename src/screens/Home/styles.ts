import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016'
  },
  eventName: {
    color: '#FDFCFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    color: '#FDFCFF',
    fontSize: 16,
    borderRadius: 5,
    padding: 16,
    marginRight: 12,
    flex: 1,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#31cf67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FDFCFF',
    fontSize: 16,
  },
  listEmptyText: {
    color: '#6b6b6b',
    fontSize: 14,
    textAlign: 'center'
  }
})
