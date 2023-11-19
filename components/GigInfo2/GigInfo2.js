import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import Clearbit from '../../assets/images/Clearbit.png'

const GigInfo2 = () => {
    return (
        <View style={styles.gigInfoContainerBox} >
            <View style={styles.gigInfoHeader} >
                <Image source={Clearbit} style={styles.gigInfoHeaderImage} />
                <View style={styles.gigInfoHeaderTxtContainer} >
                    <Text style={styles.title} >Gig Financial Details</Text>
                    <Text style={styles.name}>Amount Info</Text>
                </View>
            </View>
            <View style={styles.detailContainer} >
                <View style={styles.textContainer}>
                    <View >
                        <Text style={styles.mainText} >Total Amount</Text>
                        <Text style={styles.subText}>₦400,000</Text>
                    </View>
                    <View >
                        <Text style={styles.mainText} >Starting Amount</Text>
                        <Text style={styles.subText}>₦250,000</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View >
                        <Text style={styles.mainText} >Balance</Text>
                        <Text style={styles.subText}>₦150,000</Text>
                    </View>
                    <View >
                        <Text style={styles.mainText} >Payment Type</Text>
                        <Text style={styles.subText}>Milestone</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GigInfo2

const styles = StyleSheet.create({
    gigInfoContainerBox: {
        width: '90%',
        alignSelf: 'center',
        height: 250,
        padding: 20,
        backgroundColor: COLORS.white,
        borderRadius: 15
    },
    gigInfoHeader: {

        width: '100%',

        flexDirection: 'row'
    },
    gigInfoHeaderImage: {
        height: 50,
        width: 50
    },
    gigInfoHeaderTxtContainer: {
        marginLeft: 10
    },
    title: {
        color: COLORS.primary,
        fontSize: SIZES.large,
        fontWeight: '500'
    },
    name: {
        color: COLORS.secondary,
        fontSize: SIZES.font,
        fontWeight: '500'
    },
    detailContainer: {
        marginTop: 15,

        borderTopColor: '#D9D9D9',
        borderTopWidth: 2,
        justifyContent: 'space-between',

        height: 130
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    mainText: {
        color: '#8C8CA9',
        fontWeight: '400'
    },
    subText: {
        color: COLORS.primary,
        fontWeight: '500'
    },
})