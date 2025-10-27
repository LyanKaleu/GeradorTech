import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import { TechCard } from '../components/TechCard';
import { HistoryList } from '../components/HistoryList';
import { ActionButtons } from '../components/ActionButtons';

/**
 * Tela principal do gerador de tecnologias
 * Exibe o histórico, a palavra atual e botões de ação
 */
export const HomeScreen = () => {
  const { current, favorites, getNext, toggleFavorite, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <View style={[styles.page, styles.centeredContainer]}>
        <Text style={styles.loadingText}>Carregando favoritos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.centeredContainer}>
        {/* Container do histórico */}
        <View style={styles.historyContainer}>
          <HistoryList />
        </View>

        {/* Card com a palavra atual */}
        <TechCard word={current} />

        {/* Botões de favoritar e avançar */}
        <ActionButtons
          isFavorite={favorites.includes(current)}
          onToggleFavorite={() => toggleFavorite(current)}
          onNext={getNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  historyContainer: {
    height: 200,
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
});
