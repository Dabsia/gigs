import { StyleSheet, Text, Image, View, ScrollView } from 'react-native'
import React from 'react'
import Goback from '../../components/Goback/Goback'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../../constants/theme'
import star from '../../assets/images/Star.png'
import Actions from '../../components/Actions/Actions'
import GigMoneyCard from '../../components/GigMoneyCard/GigMoneyCard'

const GigScreen = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <Goback title='WP ecommerce site' />
                <View>
                    <GigMoneyCard />
                    <Text style={styles.amountText} >GIG AMOUNT</Text>
                    <View style={styles.textContainer} >
                        <Text style={styles.text}><Text style={styles.money} >₦100K</Text> paid, remaining <Text style={styles.money} >₦80K</Text></Text>
                        <Image source={star} />
                    </View>
                    <View style={styles.fullWidth} >
                        <View style={styles.percentageContainer} />
                    </View>
                    <Text style={styles.deadlineWarning} >😕 Hurry up, deadline is in 8 days. Abi money no de sweet you?</Text>
                </View>
                <Actions personal={false} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default GigScreen

const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 20,


    },
    fullWidth: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: 7,
        borderRadius: 5,
        marginVertical: 20
    },
    percentageContainer: {
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        width: '48%',
        height: '100%'
    },
    amountText: {
        fontWeight: '500',
        marginVertical: 20
    },
    textContainer: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row'

    },
    deadlineWarning: {
        fontSize: SIZES.small
    },
    text: {
        color: COLORS.primary
    },
    money: {
        fontWeight: '700'
    }
})