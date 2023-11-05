import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-paper'
import { COLORS } from '../../constants/theme'
import flower from '../../assets/images/66.png'

const GigsBalanceContainer = () => {

    const [showMoney, setShowMoney] = useState(false)

    const toggle = () => {
        setShowMoney(prev => !prev)
    }


    return (
        <View style={styles.gigsAmountContainer} >
            <View style={styles.textHolder} >
                <Text style={styles.gigsAmountTextHolder} >Gig balance</Text>
                <Image source={flower} />
            </View>
            <View style={styles.amountContainer} >
                <View style={styles.amountHolder} >
                    <View style={styles.amountBox} >
                        <Text style={styles.amount} >Amount: </Text>
                        {!showMoney ? <Text style={styles.money} >₦3,250,000</Text> :
                            <Text style={styles.money} >Hidden</Text>}

                    </View>
                    <TouchableOpacity onPress={toggle} >
                        {showMoney ? <Icon
                            source="eye"
                            color={'#000'}
                            size={20}
                        /> :
                            <Icon
                                source="eye-off"
                                color={'#000'}
                                size={20}
                            />}
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    )
}

export default GigsBalanceContainer

const styles = StyleSheet.create({
    gigsAmountContainer: {
        marginVertical: 20,
        height: 200,
        width: '100%',
        backgroundColor: COLORS.tertiary,
        borderRadius: 20,
        paddingTop: 40,
        paddingHorizontal: 30
    },
    textHolder: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 15

    },
    gigsAmountTextHolder: {
        fontSize: 18,
        alignSelf: 'center',
        color: COLORS.white,
        fontWeight: 'bold'
    },
    amountContainer: {
        backgroundColor: COLORS.white,
        height: 104,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    amountHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    amount: {
        color: 'grey',
        fontSize: 15,
        fontWeight: '700'
    },
    amountBox: {
        flexDirection: 'row'
    },
    money: {
        color: '#000',
        fontWeight: 'bold'
    }
})