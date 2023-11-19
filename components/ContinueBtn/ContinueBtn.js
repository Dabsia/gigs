import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'


const ContinueBtn = ({ name }) => {
    const navigation = useNavigation();
    const Next = () => {
        navigation.navigate(name)
    }
    return (
        <View style={styles.container} >
            <Button style={styles.button} onPress={() => { Next(name) }} buttonColor={COLORS.secondary} mode="contained" >Continue</Button>
            <TouchableOpacity><Text style={styles.cancel} >CANCEL GIG</Text></TouchableOpacity>
        </View>
    )
}

export default ContinueBtn

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,

    },
    cancel: {
        textAlign: 'center',
        marginVertical: 15,
        color: COLORS.gray
    },
    container: {
        // marginTop: 300
    }
})