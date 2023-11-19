import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import Clearbit from '../../assets/images/Clearbit.png'

const GigInfo = () => {
    return (
        <View style={styles.gigInfoContainerBox} >
            <View style={styles.gigInfoHeader} >
                <Image source={Clearbit} style={styles.gigInfoHeaderImage} />
                <View style={styles.gigInfoHeaderTxtContainer} >
                    <Text style={styles.title} >Develop Streaming Platform</Text>
                    <Text style={styles.name}>Fashola Gabriel</Text>
                </View>
            </View>
            <View style={styles.detailContainer} >
                <View style={styles.textContainer}>
                    <View >
                        <Text style={styles.mainText} >Start Date</Text>
                        <Text style={styles.subText}>January 20, 2023</Text>
                    </View>
                    <View >
                        <Text style={styles.mainText} >Stop Date</Text>
                        <Text style={styles.subText}>May 20, 2023</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View >
                        <Text style={styles.mainText} >Gig Type</Text>
                        <Text style={styles.subText}>Frontend Development</Text>
                    </View>
                    <View >
                        <Text style={styles.mainText} >Gig Category</Text>
                        <Text style={styles.subText}>Personal Gig</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GigInfo

const styles = StyleSheet.create({
    gigInfoContainerBox: {
        width: '90%',
        alignSelf: 'center',
        height: 250,
        padding: 20,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        marginBottom: 20
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