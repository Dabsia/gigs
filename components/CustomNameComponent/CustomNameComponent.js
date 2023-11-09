import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomNameComponent = ({ title }) => {
    return (
        <View style={styles.titleContainer} >
            <Text style={styles.title} >{title}</Text>
        </View>
    )
}

export default CustomNameComponent


const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#989BA6'
    }
})