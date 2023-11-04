import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './components/Navigation/Navigation';
import { SafeAreaView } from 'react-native';
import Home from './Screens/Home/Home';
import Gigs from './Screens/Gigs/Gigs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './constants/theme';
import Explore from './Screens/Explore/Explore';
import More from './Screens/More/More';


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


  const Tab = createBottomTabNavigator();


  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route, }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'md-home'
            }
            else if (route.name === 'Gigs') {
              iconName = "md-briefcase"
            }
            else if (route.name === 'Explore') {
              iconName = "md-bookmark"
            }
            else if (route.name === 'More') {
              iconName = "md-link"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,


        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Gigs" component={Gigs} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    );
  }




  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView} >
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
