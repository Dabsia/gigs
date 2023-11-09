import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/theme'
import { Icon } from 'react-native-paper'

const BalanceComponent = ({ amount, title }) => {

    const [showMoney, setShowMoney] = useState(false)

    const toggle = () => {
        setShowMoney(prev => !prev)
    }


    return (
        <View style={styles.balanceContainer} >
            <Text style={styles.balanceTitle} >{title}</Text>
            <View style={styles.container} >
                {!showMoney ? <Text style={styles.balanceAmount} >₦{amount}</Text> :
                    <Text style={styles.balanceAmount} >****</Text>}
                <TouchableOpacity style={styles.icon} onPress={toggle} >
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
    )
}

export default BalanceComponent


const styles = StyleSheet.create({
    balanceContainer: {
        marginVertical: 20
    },
    balanceTitle: {
        color: '#989BA6',
        fontSize: 15
    },
    balanceAmount: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold'
    },
    icon: {
        alignSelf: 'center',
        marginLeft: 5,

    },
    container: {
        flexDirection: 'row'
    }
})