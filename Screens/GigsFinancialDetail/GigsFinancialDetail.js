import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Goback from '../../components/Goback/Goback'
import GigDetailsHeader from '../../components/GigDetailsHeader/GigDetailsHeader'
import { TextInput } from 'react-native-paper'
import { COLORS } from '../../constants/theme'
import Milestones from '../../components/Milestones/Milestones'
import ContinueBtn from '../../components/ContinueBtn/ContinueBtn'



const GigsFinancialDetail = () => {

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

                <View>

                    <Goback />

                    <GigDetailsHeader title={"Financial details"} question={'How much is the gig?'} />
                    <Text style={styles.name} >Amount</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.amount} >How much is your starting amount?</Text>
                    <Text style={styles.name} >Amount</Text>

                    <TextInput style={styles.input} />
                    <Text style={styles.note} >NOTE: We strongly recommend not to start a gig without any part payment.</Text>
                    <Text style={styles.amount} >How would you be paid?</Text>
                    <View style={styles.optionContainer} >
                        <TouchableOpacity style={styles.options} >
                            <Text style={styles.text}>Project based</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.options2} >
                            <Text style={styles.text2} >Milestones</Text>
                        </TouchableOpacity>
                    </View>
                    <>
                        <Text style={styles.name} >1. Description</Text>
                        <TextInput style={styles.input} />
                    </>

                    <Milestones />
                </View>
                <ContinueBtn />

            </ScrollView>
        </SafeAreaView>
    )
}

export default GigsFinancialDetail


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 20,


    },
    contentContainer: {
        justifyContent: 'space-between',
        height: 1250,

        paddingBottom: '20%'
    },
    input: {
        marginTop: 15,
        backgroundColor: 'transparent',
        borderBottomColor: 'red'
    },
    amount: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40
    },
    note: {
        color: 'rgba(152, 155, 166, 1)',
        fontSize: 13,
        marginTop: 10,
        fontWeight: 'bold'

    },
    optionContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20
    },
    options: {
        marginRight: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '33%',
        borderRadius: 20,

    },
    options2: {
        marginRight: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        width: '33%',
        borderRadius: 20,

    },
    text: {
        color: '#03010A',
        fontWeight: '500'
    },
    text2: {
        color: '#fff',
        fontWeight: '500'
    }, name: {
        marginTop: 50,
        color: COLORS.gray
    },
})