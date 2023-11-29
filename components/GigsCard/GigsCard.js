import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'


const GigsCard = () => {
    const percentage = 66;

    const navigation = useNavigation()


    return (
        <TouchableOpacity onPress={() => navigation.navigate('GigScreen')} style={styles.gigBox} >
            <View style={styles.gigHolder} >
                <View style={styles.shape} ></View>
                <View style={styles.textHolder} >
                    <Text style={styles.gigName} >WP ecommerce site</Text>
                    <Text style={styles.gigTime} >Jan 10, 2023</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default GigsCard

const styles = StyleSheet.create({
    gigBox: {
        height: 90,
        borderRadius: 20,
        width: '100%',
        backgroundColor: COLORS.white,
        padding: 10,
        marginBottom: 15,

    },
    gigHolder: {
        flexDirection: 'row',
        // alignSelf: 'center'
    },
    gigName: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,

    },
    gigTime: {
        color: COLORS.gray,
        fontSize: 12,
        fontWeight: '600',
    },
    shape: {
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: COLORS.pink,
        marginRight: 20,
        alignSelf: 'center'
    },
    textHolder: {
        alignSelf: 'center'
    },
})