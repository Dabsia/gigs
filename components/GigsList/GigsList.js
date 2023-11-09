import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GigsCard from '../GigsCard/GigsCard'

const GigsList = () => {
    return (
        <View style={styles.GigsList} >
            <Text style={styles.headerText} >Latest Gigs</Text>
            <GigsCard />
            <GigsCard />
            <GigsCard />
        </View>
    )
}

export default GigsList

const styles = StyleSheet.create({
    GigsList: {
        marginTop: 20
    },
    headerText: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 15

    },
})