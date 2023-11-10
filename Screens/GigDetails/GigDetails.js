import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import GigDetailsHeader from '../../components/GigDetailsHeader/GigDetailsHeader'
import Goback from '../../components/Goback/Goback'
import { COLORS } from '../../constants/theme'
import { TextInput, Icon } from 'react-native-paper'
import ContinueBtn from '../../components/ContinueBtn/ContinueBtn'



const GigDetails = () => {
    return (
        <SafeAreaView style={styles.container} >
            <View>
                <Goback />
                <GigDetailsHeader title={"Gig details"} question={'How long will this gig last?'} />
                <View style={styles.optionContainer} >
                    <TouchableOpacity style={styles.option} >
                        <Text style={styles.optionText} >2 weeks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Text style={styles.optionText} >1 month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Text style={styles.optionText} >3 months</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Text style={styles.optionText} >6 months</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.dateHolder} >
                    <TouchableOpacity style={styles.calendar} >
                        <Icon
                            source="calendar"
                            color={'#fff'}
                            size={20}
                        />
                        <Text style={styles.select} >Select</Text>
                    </TouchableOpacity>
                    <Text style={styles.date} >5 Months: Jan - May, 2023</Text>
                </View>

                <Text style={styles.amount} >What’s the name of your client?</Text>
                <Text style={styles.name} >Name</Text>
                <TextInput underlineColor={COLORS.secondary} style={styles.input} />

            </View>

            <ContinueBtn />
        </SafeAreaView>
    )
}

export default GigDetails



const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        height: '100%',
        paddingBottom: '20%'
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
    },
    amount: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40
    },
    optionContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    option: {
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        width: '23%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionText: {
        fontWeight: '500',

    },
    calendar: {
        flexDirection: 'row',
        height: 50,
        width: '30%',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25

    },
    dateHolder: {
        marginTop: 20,
        flexDirection: 'row'
    },
    select: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: '500'
    },
    date: {
        color: COLORS.secondary,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 10,
        fontSize: 14
    },
    name: {
        marginTop: 50,
        color: COLORS.gray
    },


})