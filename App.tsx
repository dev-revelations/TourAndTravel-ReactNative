import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { customFonts } from './src/utils';
import { AppContextProvider } from './src/services/app/AppContext';
import { SafeArea } from './src/components/SafeArea/SafeArea';


export default function App() {

  const [fontsLoaded, error] = useFonts(customFonts);

  if (fontsLoaded && !error) {
    return (
      <>
        <AppContextProvider>
          <SafeArea>
          <View style={styles.container}>
            <Text style={{ fontFamily: 'Nunito', fontWeight: '700' }}>Open up App.tsx to start working on your app!</Text>
          </View>
          </SafeArea>
        </AppContextProvider>
        <StatusBar style="auto" />
      </>
    );
  } else {
    return (<AppLoading />);
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
