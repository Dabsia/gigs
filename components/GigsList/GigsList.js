import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Gig from '../Gig/Gig'

const GigsList = () => {
    return (
        <View style={styles.GigsList} >
            <Text style={styles.headerText} >Latest Gigs</Text>
            <Gig />
            <Gig />
            <Gig />
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