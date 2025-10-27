import { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';

/**
 * Tela de favoritos
 * Exibe a lista de tecnologias favoritadas com opção de remover
 */
export const FavoritesScreen = () => {
  const { favorites, removeFavorite, isLoading } = useContext(AppContext);

  // Estado de carregamento
  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.center}>
          <Text style={styles.loadingText}>Carregando favoritos...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Estado vazio
  if (favorites.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.center}>
          <Text style={styles.emptyText}>Nenhum favorito ainda.</Text>
          <Text style={styles.emptySubText}>
            Adicione tecnologias aos favoritos na tela inicial!
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Renderiza um item da lista
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => removeFavorite(item)}
      >
        <MaterialIcons name="delete" size={18} color="#FF5722" />
      </TouchableOpacity>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Você tem {favorites.length} favorito{favorites.length !== 1 ? 's' : ''}
        </Text>
        <FlatList
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          key={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 18, 
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 3,
    marginHorizontal: 5,
    minHeight: 40,
    width: '45%',
  },
  deleteButton: {
    paddingRight: 6,
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    flex: 1,
    flexWrap: 'wrap',
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
