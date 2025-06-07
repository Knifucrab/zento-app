import React from 'react';
import {TamaguiProvider} from 'tamagui';
import config from './tamagui.config';
import AppNavigator from './src/navigation';

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <AppNavigator />
    </TamaguiProvider>
  );
}
