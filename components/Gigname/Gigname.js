import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import GigDetailsHeader from '../GigDetailsHeader/GigDetailsHeader'
import Goback from '../Goback/Goback'
import { COLORS } from '../../constants/theme'
import { TextInput } from 'react-native-paper'
import ContinueBtn from '../ContinueBtn/ContinueBtn'


const Gigname = () => {
    return (
        <SafeAreaView style={styles.container} >
            <Goback />
            <GigDetailsHeader title={"Let's begin..."} question={'What is the name of your gig?'} />
            <Text style={styles.name} >Gig name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.description} >Give it a simple name. Eg Fintech UI Design or Frontend School dev Keep it at 3 words...</Text>
            <ContinueBtn />
        </SafeAreaView>
    )
}

export default Gigname


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 20
    },
    name: {
        marginTop: 50,
        color: COLORS.gray
    },
    input: {
        marginTop: 20,
        backgroundColor: 'transparent',
        borderBottomColor: 'red'
    },
    description: {
        marginTop: 10,
        fontSize: 12,
        color: COLORS.gray,
        lineHeight: 15
    }

})