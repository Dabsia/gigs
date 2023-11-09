import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants/theme'
import React from 'react'
import User from '../../assets/images/User.png'
import Supergroup from '../../assets/images/Supergroup.png'
import { Icon } from 'react-native-paper'


const SuperGig = ({ navigation }) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('PersonalGigs')} style={styles.SuperGigBox} >
                <View style={styles.superGigsInner} >
                    <View style={styles.imageBox} >
                        <Image source={User} />
                    </View>
                    <View style={styles.textBox} >
                        <Text style={styles.balanceTitle} >Personal Gigs</Text>
                        <Text style={styles.balanceAmount}  >₦2,550,000</Text>
                    </View>
                </View>
                <Icon
                    source="chevron-right"
                    color={'#000'}
                    size={30}

                />

            </TouchableOpacity>
            <View style={styles.SuperGigBox2} >
                <View style={styles.superGigsInner} >
                    <View style={styles.imageBox} >
                        <Image source={Supergroup} />
                    </View>
                    <View style={styles.textBox} >
                        <Text style={styles.balanceTitle2} >Group Gigs</Text>
                        <Text style={styles.balanceAmount2}  >₦700,000</Text>
                    </View>
                </View>
                <Icon
                    source="chevron-right"
                    color={'#fff'}
                    size={30}

                />
            </View>
        </>

    )
}

export default SuperGig


const styles = StyleSheet.create({
    SuperGigBox: {
        height: 100,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    SuperGigBox2: {
        height: 100,
        width: '100%',
        borderRadius: 15,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    imageBox: {
        height: 50,
        width: 50,
        backgroundColor: '#E8FBFF',
        justifyContent: 'center',
        borderRadius: 15,
        alignItems: 'center'
    },
    balanceTitle: {
        color: '#989BA6',
        fontSize: 15
    },
    balanceAmount: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    balanceTitle2: {
        color: '#fff',
        fontSize: 15
    },
    balanceAmount2: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    textBox: {
        // alignSelf: 'center'
        marginLeft: 20
    },
    superGigsInner: {
        flexDirection: 'row'
    },

})