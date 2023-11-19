import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Navigation from './components/Navigation/Navigation';

import GigCategory from './Screens/GigCategory/GigCategory';
import Gigname from './Screens/Gigname/Gigname';
import GigsFinancialDetail from './Screens/GigsFinancialDetail/GigsFinancialDetail';
import GroupGigs from './Screens/GroupGigs/GroupGigs';
import PersonalGigs from './Screens/PersonalGigs/PersonalGigs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Invoice from './Screens/Invoice/Invoice';



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

      {/*<GigsFinancialDetail />*/}
      <Navigation />
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

