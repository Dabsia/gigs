import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-paper'
import React from 'react'
import { COLORS } from '../../constants/theme'


const GigAdder = () => {
    return (

        <TouchableOpacity style={styles.gigAdder}  >
            <Icon
                source="plus"
                color={COLORS.white}
                size={30}
            />
        </TouchableOpacity>

    )
}

export default GigAdder



const styles = StyleSheet.create({
    gigAdder: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        right: 50,
        backgroundColor: COLORS.tertiary
    }
})