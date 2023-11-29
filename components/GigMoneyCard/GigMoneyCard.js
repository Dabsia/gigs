import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'


const GigMoneyCard = () => {
    return (
        <View style={styles.card} >
            <View>
                <Text>Gig Amount</Text>
                <Text style={styles.money} >₦180,000</Text>
            </View>

        </View>
    )
}

export default GigMoneyCard

const styles = StyleSheet.create({
    card: {
        height: 200,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 20
    },
    money: {
        fontSize: SIZES.extraLarge,
        fontWeight: '800'
    }
})