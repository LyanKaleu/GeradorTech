# GeradorTech - Gerador de Tecnologias 🚀

Aplicativo React Native que gera aleatoriamente palavras de tecnologias da TI, com sistema de favoritos e histórico.

> **Projeto Educacional** - Desenvolvido para a disciplina de Programação para Dispositivos Móveis

## 📱 Demonstração

- **Tela Inicial**: Gera palavras aleatórias de tecnologias
- **Histórico**: Visualiza as últimas palavras geradas
- **Favoritos**: Salva suas tecnologias favoritas localmente
- **Persistência**: Favoritos salvos mesmo após fechar o app

## 📁 Estrutura do Projeto

```
GeradorTech/
├── App.js                    # Arquivo raiz - configura providers e navegação
├── context/
│   ├── AppContext.js         # Estado global (Context API)
│   └── techWords.js          # Base de dados com palavras de tecnologias
├── navigation/
│   └── AppNavigator.js       # Configuração de rotas e abas
├── screens/
│   ├── HomeScreen.js         # Tela principal (com seus estilos)
│   └── FavoritesScreen.js    # Tela de favoritos (com seus estilos)
├── components/
│   ├── TechCard.js           # Card da palavra (com seus estilos)
│   ├── HistoryList.js        # Lista do histórico (com seus estilos)
│   └── ActionButtons.js      # Botões de ação (com seus estilos)
└── assets/                   # Imagens e recursos
```

> **Nota sobre Estilos**: Os estilos estão definidos dentro de cada arquivo usando `StyleSheet.create()` no final do componente. Isso segue o padrão React Native e facilita o aprendizado.

## 🧩 Conceitos Aplicados

### 1. **Componentização**
- Componentes reutilizáveis e independentes
- Props para passar dados entre componentes
- Separação de responsabilidades

### 2. **Context API**
- Estado global compartilhado entre telas
- Evita prop drilling
- Gerenciamento de favoritos e histórico

### 3. **React Navigation**
- Navegação por abas (Bottom Tabs)
- Configuração de ícones e estilos
- Rotas organizadas

### 4. **AsyncStorage**
- Persistência de dados local
- Salvamento automático de favoritos
- Carregamento ao iniciar o app

### 5. **Hooks**
- `useState`: Estado local dos componentes
- `useContext`: Acesso ao contexto global
- `useEffect`: Efeitos colaterais (carregar/salvar dados)

## 📚 Guia de Estudo

### Para Iniciantes
1. Comece pelo `App.js` - entenda o fluxo de providers
2. Explore `navigation/AppNavigator.js` - veja como as rotas são configuradas
3. Analise `screens/HomeScreen.js` - entenda a estrutura de uma tela
4. Estude `components/TechCard.js` - componente simples e funcional

### Para Avançados
1. Analise `context/AppContext.js` - implementação de Context API
2. Entenda o fluxo de dados entre Context → Screens → Components
3. Explore o sistema de persistência com AsyncStorage
4. Modifique e adicione novas funcionalidades

## 🎯 Fluxo de Dados

```
App.js
  └─ AppProvider (fornece estado global)
       └─ NavigationContainer
            └─ AppNavigator (configura abas)
                 ├─ HomeScreen (consome AppContext)
                 │    ├─ HistoryList
                 │    ├─ TechCard
                 │    └─ ActionButtons
                 └─ FavoritesScreen (consome AppContext)
```

## 🔧 Tecnologias Utilizadas

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **React Navigation** - Navegação entre telas
- **AsyncStorage** - Armazenamento local
- **Context API** - Gerenciamento de estado
- **@expo/vector-icons** - Ícones Material

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ instalado
- Expo Go instalado no celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/GeradorTech.git
cd GeradorTech

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

### Executar no Dispositivo
1. Abra o Expo Go no seu celular
2. Escaneie o QR Code que aparece no terminal
3. O app será carregado automaticamente

### Executar em Emulador

```bash
# Android
npm run android

# iOS (apenas no macOS)
npm run ios
```


---