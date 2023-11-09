import { NavigationContainer } from "@react-navigation/native";
// import AppNavigator from "./app.navigator";
import Home from "../../Screens/Home/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Gigs from "../../Screens/Gigs/Gigs";
import More from "../../Screens/More/More";
import Explore from "../../Screens/Explore/Explore";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import GigsNavigator from './GigsNavigator'


const Tab = createBottomTabNavigator()

const TabGroup = () => {
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
            <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Tab.Screen name='GigsNavigator' component={GigsNavigator} />
            <Tab.Screen name='Explore' component={Explore} />
            <Tab.Screen name='More' component={More} />
        </Tab.Navigator>
    )
}


const Navigation = () => {



    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>

    )
}

export default Navigation