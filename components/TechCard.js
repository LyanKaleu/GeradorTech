import { View, Text, StyleSheet } from 'react-native';

/**
 * Componente que exibe uma palavra de tecnologia em destaque
 * @param {string} word - A palavra de tecnologia a ser exibida
 */
export const TechCard = ({ word }) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>{word}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#06ff6e',
    padding: 25,
    borderRadius: 15,
    marginVertical: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    minWidth: 250,
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
