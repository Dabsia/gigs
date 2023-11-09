import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GigDetailsHeader = ({ title, question }) => {
    return (
        <View>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.question} >{question}</Text>
        </View>
    )
}

export default GigDetailsHeader

const styles = StyleSheet.create({
    title: {
        color: 'rgba(152, 155, 166, 1)',
        fontSize: 22,
        marginBottom: 10
    },
    question: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

