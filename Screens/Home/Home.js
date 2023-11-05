import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import GigsBalanceContainer from '../../components/GigsBalanceContainer/GigsBalanceContainer'
import Stats from '../../components/Stats/Stats'
import GigsList from '../../components/GigsList/GigsList'

const Home = () => {
    return (
        <SafeAreaView style={styles.wrapper} >
            <ScrollView showsVerticalScrollIndicator={false} >
                <HomeHeader />
                <GigsBalanceContainer />
                <Stats />
                <GigsList />
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home


const styles = StyleSheet.create({
    wrapper: {
        padding: 15
    }
})