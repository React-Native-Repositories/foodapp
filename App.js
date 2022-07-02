import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#FDF2F7', // bg
      100: '#FCE7F3',
      200: '#FBCFE8',
      300: '#ED66A0', // location pin
      400: '#FF2B85', // splash
      500: '#EC4899',
      600: '#D70F64', // general
      700: '#BE185D',
      800: '#9D174D',
      900: '#831843',
    },
    blueGray: {
      100: '#eff2f4', // bg
    },
  },
});

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient
  }
};

const App = () => {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}

export default App;
