import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Componente com os botões de ação (favoritar e próximo)
 * @param {boolean} isFavorite - Indica se o item atual está favoritado
 * @param {function} onToggleFavorite - Callback para alternar favorito
 * @param {function} onNext - Callback para gerar próxima palavra
 */
export const ActionButtons = ({ isFavorite, onToggleFavorite, onNext }) => (
  <View style={styles.buttonRow}>
    <TouchableOpacity
      style={[
        styles.actionButton,
        isFavorite ? styles.likedButton : styles.unlikedButton
      ]}
      onPress={onToggleFavorite}
    >
      <Text style={styles.buttonText}>
        {isFavorite ? "❤️" : "🤍"}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.actionButton}
      onPress={onNext}
    >
      <Text style={styles.buttonText}>➡️</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 20,
    gap: 15,
  },
  actionButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  likedButton: {
    backgroundColor: '#FF5722',
  },
  unlikedButton: {
    backgroundColor: '#757575',
  },
  buttonText: {
    fontSize: 24,
  },
});
