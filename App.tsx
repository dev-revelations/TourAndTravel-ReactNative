import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import { NavBar } from './src/components/NavBar/NavBar';
import { SafeArea } from './src/components/SafeArea/SafeArea';
import { AboutUsScreen } from './src/features/AboutUs/Screen/AboutUsScreen';
import { BookScreen } from './src/features/Book/Screen/BookScreen';
import { ContactScreen } from './src/features/Contact/Screen/ContactScreen';
import { GalleryScreen } from './src/features/Gallery/Screen/GalleryScreen';
import { HomeScreen } from './src/features/Home/Screen/HomeScreen';
import { PackagesScreen } from './src/features/Packages/Screen/PackagesScreen';
import { ReviewScreen } from './src/features/Review/Screen/ReviewScreen';
import { ServicesScreen } from './src/features/Services/Screen/ServicesScreen';
import { AppContextProvider } from './src/services/app/AppContext';
import { customFonts } from './src/utils';


export default function App() {

  const [fontsLoaded, error] = useFonts(customFonts);

  if (fontsLoaded && !error) {
    return (
      <>
        <StatusBar style="auto" />
        <AppContextProvider>
          <SafeArea>
            <NavBar />
            <ScrollView style={{ flex: 1 }}>
              <HomeScreen />
              <BookScreen />
              <PackagesScreen />
              <ServicesScreen />
              <GalleryScreen />
              <ReviewScreen />
              <ContactScreen />
              <AboutUsScreen />
            </ScrollView>
          </SafeArea>
        </AppContextProvider>
      </>
    );
  } else {
    return (<AppLoading />);
  }
}