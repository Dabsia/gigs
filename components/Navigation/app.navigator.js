import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gigs from "../../Screens/Gigs/Gigs";
import Home from "../../Screens/Home/Home";





const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    <Tab.Navigator
    // screenOptions={({ route, }) => ({
    //     tabBarIcon: ({ color, size }) => {
    //         let iconName;
    //         if (route.name === 'Home') {
    //             iconName = 'md-restaurant'
    //         }
    //         else if (route.name === 'Gigs') {
    //             iconName = "md-map"
    //         }
    //         else if (route.name === 'Settings') {
    //             iconName = "md-settings"
    //         }
    //         return <Ionicons name={iconName} size={size} color={color} />
    //     },
    //     tabBarActiveTintColor: 'tomato',
    //     tabBarInactiveTintColor: 'gray',
    //     headerShown: false,

    // })}
    >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Gigs' component={Gigs} />
    </Tab.Navigator>
}

export default AppNavigator