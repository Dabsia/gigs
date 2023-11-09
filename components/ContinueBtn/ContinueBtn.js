import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import { COLORS } from '../../constants/theme'

const ContinueBtn = () => {
    return (
        <View>
            <Button style={styles.button} buttonColor={COLORS.secondary} mode="contained" >Continue</Button>
        </View>
    )
}

export default ContinueBtn

const styles = StyleSheet.create({
    button: {

        height: 70,

        marginTop: 350
    }
})