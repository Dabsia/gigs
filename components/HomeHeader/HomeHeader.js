import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import Switch from '../../assets/images/Switch.jpg'
import bell from '../../assets/images/bell.png'
import { FONTS, SIZES } from '../../constants/theme'

const HomeHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.textContainer} >
                <Image source={Switch} />
                <Text style={styles.headerText} >Hi, Kathy</Text>
            </View>
            <View style={styles.bellContainer} >
                <Image source={bell} />
            </View>

        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headerText: {
        // fontFamily: FONTS.semiBold
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: 12
    },
    textContainer: {
        flexDirection: 'row'
    },
    bellContainer: {
        backgroundColor: '#fff',
        width: 40,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 40 / 2
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'

    }
})