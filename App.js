import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './context/AppContext';
import { AppNavigator } from './navigation/AppNavigator';

/**
 * Componente raiz do aplicativo
 * Configura os providers e a navegação principal
 * 
 * Estrutura do app:
 * - SafeAreaProvider: Gerencia áreas seguras (notch, barra de status)
 * - AppProvider: Fornece estado global (favoritos, histórico, palavra atual)
 * - NavigationContainer: Gerencia navegação entre telas
 * - AppNavigator: Define as rotas do app (Home e Favoritos)
 */
export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <AppNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
}