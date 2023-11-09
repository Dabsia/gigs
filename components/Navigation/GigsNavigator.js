import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PersonalGigs from '../../Screens/PersonalGigs/PersonalGigs'
import Gigs from '../../Screens/Gigs/Gigs'


const GigsNavigatorStack = createNativeStackNavigator()


const GigsNavigator = () => {
    return (
        <GigsNavigatorStack.Navigator>
            <GigsNavigatorStack.Screen options={{ headerShown: false }}
                name='Gigs'
                component={Gigs}
            />
            <GigsNavigatorStack.Screen
                name='PersonalGigs'
                component={PersonalGigs}
            />

        </GigsNavigatorStack.Navigator>
    )

}


export default GigsNavigator