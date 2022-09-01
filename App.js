import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import Accesso from './src/Accesso';
import NuovoTesserato from './src/Tesserato/NuovoTesserato';
import AreaSocio from './src/Soci/AreaSocio';
import ListaVerbali from './src/Soci/ListaVerbali';
import ListaEventi from './src/FrameUnici/ListaEventi';
import ConfermaTesserato from './src/Tesserato/ConfermaTesserato';
import SignUp from './src/Tesserato/SignUp';
import AreaTesserato from "./src/Tesserato/AreaTesserato";
import Tessera from './src/Tesserato/Tessera';

const Stack = createNativeStackNavigator();

const themeSetting = true;

function themeSwitcher() {
  themeSetting = !themeSetting
  return themeSetting;
}

const MyThemeLight = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

// in futuro per l'update con tema dark
const MyThemeDark = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={themeSetting === true ? MyThemeLight : MyThemeDark}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Accesso" component={Accesso} />
          <Stack.Screen name="NuovoTesserato" component={NuovoTesserato} />
          <Stack.Screen name="AreaSocio" component={AreaSocio} />
          <Stack.Screen name="AreaTesserato" component={AreaTesserato} />
          <Stack.Screen name="ListaVerbali" component={ListaVerbali} />
          <Stack.Screen name="ListaEventi" component={ListaEventi} />
          <Stack.Screen name="ConfermaTesserato" component={ConfermaTesserato} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Tessera" component={Tessera} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
