import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../../components/HomeHeader/HomeHeader'

const Home = () => {
    return (
        <SafeAreaView style={styles.wrapper} >
            <HomeHeader />
        </SafeAreaView>
    )
}

export default Home


const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    }
})