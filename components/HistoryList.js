import { useContext } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

/**
 * Componente que exibe o histórico de palavras geradas
 * Permite marcar palavras do histórico como favoritas ao tocar nelas
 */
export const HistoryList = () => {
  const { history, favorites, toggleFavorite } = useContext(AppContext);

  return (
    <FlatList
      data={history}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.historyItem}
          onPress={() => toggleFavorite(item)}
        >
          <Text style={styles.itemText}>
            {favorites.includes(item) ? '❤️ ' : ''}{item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  historyItem: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
});
