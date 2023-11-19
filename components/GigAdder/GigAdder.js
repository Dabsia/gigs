import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-paper'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const GigAdder = () => {
    const navigation = useNavigation();
    const add = () => {
        navigation.navigate("GigCategory")
    }
    return (

        <TouchableOpacity style={styles.gigAdder} onPress={add} >
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