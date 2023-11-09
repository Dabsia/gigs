import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BalanceComponent from '../../components/BalanceComponent/BalanceComponent'
import GigsList from '../../components/GigsList/GigsList'
import GigAdder from '../../components/GigAdder/GigAdder'

const PersonalGigs = () => {
    return (
        <View style={styles.wrapper}>
            <BalanceComponent title={'Gigs Balance'} amount={'3,250,000'} />
            <GigsList />
            <GigAdder />
        </View>
    )
}

export default PersonalGigs


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,
        height: '100%'

    }
})