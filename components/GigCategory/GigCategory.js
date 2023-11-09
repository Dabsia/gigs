import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Goback from '../Goback/Goback'
import { COLORS } from '../../constants/theme'
import GigDetailsHeader from '../GigDetailsHeader/GigDetailsHeader'
import GigCategoryItems from '../GigCategoryItems/GigCategoryItems'

const GigCategory = () => {
    return (
        <SafeAreaView style={styles.wrapper} >
            <View>
                <Goback />
            </View>
            <GigDetailsHeader title={'Choose'} question={'Select gig category...'} />
            <GigCategoryItems />

        </SafeAreaView>
    )
}

export default GigCategory

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 50,
        paddingHorizontal: 10,
        height: '100%',


    }
})