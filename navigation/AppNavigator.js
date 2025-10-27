import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

/**
 * Navegador principal do aplicativo com abas (tabs)
 * Configura as rotas e ícones das telas Home e Favoritos
 */
export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Configuração dos ícones das abas
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = route.name === 'Home' ? 'home' : 'star';
          return (
            <MaterialIcons
              name={iconName}
              size={size}
              color={focused ? '#4CAF50' : color}
            />
          );
        },
        // Cores das abas
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#757575',
        // Estilo da barra de abas
        tabBarStyle: {
          backgroundColor: '#e8f5e9',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          paddingVertical: 5,
          height: 60,
        },
        // Estilo dos labels
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        // Remove o header padrão
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen 
        name="Favoritos" 
        component={FavoritesScreen}
        options={{ title: 'Favoritos' }}
      />
    </Tab.Navigator>
  );
};
