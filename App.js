import React from 'react';
import { NativeBaseProvider, extendTheme, theme as nbTheme } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';

const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.rose,
  }
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
