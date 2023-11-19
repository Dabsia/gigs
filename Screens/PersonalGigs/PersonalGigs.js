import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BalanceComponent from '../../components/BalanceComponent/BalanceComponent'
import GigsList from '../../components/GigsList/GigsList'
import GigAdder from '../../components/GigAdder/GigAdder'
import Goback from '../../components/Goback/Goback'
import { SafeAreaView } from 'react-native-safe-area-context'

const PersonalGigs = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Goback title='Personal Gigs' />
            <BalanceComponent title={'Gigs Balance'} amount={'3,250,000'} />
            <GigsList />
            <GigAdder />
        </SafeAreaView>
    )
}

export default PersonalGigs


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,
        height: '100%',


    }
})