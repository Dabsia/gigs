import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PersonalGigs from '../../Screens/PersonalGigs/PersonalGigs'
import Gigs from '../../Screens/Gigs/Gigs'
import Gigname from '../../Screens/Gigname/Gigname'
import GigDetails from '../../Screens/GigDetails/GigDetails'
import GigsFinancialDetail from '../../Screens/GigsFinancialDetail/GigsFinancialDetail'
import Invoice from '../../Screens/Invoice/Invoice'
import GigCategory from '../../Screens/GigCategory/GigCategory'
import GroupGigs from '../../Screens/GroupGigs/GroupGigs'
import GigScreen from '../../Screens/GigScreen/GigScreen'


const GigsNavigatorStack = createNativeStackNavigator()


const GigsNavigator = () => {
    return (
        <GigsNavigatorStack.Navigator>
            <GigsNavigatorStack.Screen options={{ headerShown: false }}
                name='Gigs'
                component={Gigs}
            />
            <GigsNavigatorStack.Screen options={{ headerShown: false }}
                name='GigScreen'
                component={GigScreen}
            />
            <GigsNavigatorStack.Screen
                name='PersonalGigs'
                component={PersonalGigs}
                options={{ headerShown: false }}
            />
            <GigsNavigatorStack.Screen
                name='GroupGigs'
                component={GroupGigs}
                options={{ headerShown: false }}
            />
            <GigsNavigatorStack.Screen
                name='GigCategory'
                component={GigCategory}
                options={{ headerShown: false }}
            />
            <GigsNavigatorStack.Screen
                name='GigsName'
                component={Gigname}
                options={{ headerShown: false }}

            />
            <GigsNavigatorStack.Screen
                name='GigsDetails'
                component={GigDetails}
                options={{ headerShown: false }}
            />
            <GigsNavigatorStack.Screen
                name='GigsFinancialDetails'
                component={GigsFinancialDetail}
                options={{ headerShown: false }}
            />
            <GigsNavigatorStack.Screen
                name='GigsInvoice'
                component={Invoice}
                options={{ headerShown: false }}
            />

        </GigsNavigatorStack.Navigator>
    )

}


export default GigsNavigator