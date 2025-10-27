import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRandomTechWord } from './techWords';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [current, setCurrent] = useState(getRandomTechWord());
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar favoritos do AsyncStorage quando o app inicializar
  useEffect(() => {
    loadFavorites();
  }, []);

  // Salvar favoritos no AsyncStorage sempre que a lista mudar
  useEffect(() => {
    if (!isLoading) {
      saveFavorites();
    }
  }, [favorites, isLoading]);

  const loadFavorites = async () => {
    try {
      const savedFavorites = await AsyncStorage.getItem('@favorites');
      if (savedFavorites !== null) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveFavorites = async () => {
    try {
      await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error);
    }
  };

  const getNext = () => {
    setHistory([current, ...history]);
    
    // Gera uma nova palavra que não seja igual à atual e não esteja no histórico recente
    let newWord;
    const recentWords = [current, ...history.slice(0, 10)]; // Evita repetir nas últimas 10 palavras
    
    do {
      newWord = getRandomTechWord();
    } while (recentWords.includes(newWord));
    
    setCurrent(newWord);
  };

  const toggleFavorite = (pair) => {
    const word = pair || current;
    if (favorites.includes(word)) {
      setFavorites(favorites.filter(f => f !== word));
    } else {
      setFavorites([...favorites, word]);
    }
  };

  const removeFavorite = (pair) => {
    setFavorites(favorites.filter(f => f !== pair));
  };

  return (
    <AppContext.Provider value={{
      current, history, favorites, getNext, toggleFavorite, removeFavorite, isLoading
    }}>
      {children}
    </AppContext.Provider>
  );
};
