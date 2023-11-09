import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Navigation from './components/Navigation/Navigation';
import { SafeAreaView } from 'react-native';
import GigCategory from './Screens/GigCategory/GigCategory';
import Gigname from './Screens/Gigname/Gigname';
import GigsFinancialDetail from './Screens/GigsFinancialDetail/GigsFinancialDetail';



export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/static/Inter-Regular.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView} >

      <GigsFinancialDetail />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F1',

  },
});

