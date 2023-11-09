import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gigs from "../../Screens/Gigs/Gigs";
import Home from "../../Screens/Home/Home";
import Explore from "../../Screens/Explore/Explore";
import More from "../../Screens/More/More";


const Tab = createBottomTabNavigator()

const AppNavigator = () => {
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

}

export default AppNavigator