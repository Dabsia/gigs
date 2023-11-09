import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import CustomNameComponent from '../../components/CustomNameComponent/CustomNameComponent'
import BalanceComponent from '../../components/BalanceComponent/BalanceComponent'
import SuperGig from '../../components/SuperGig/SuperGig'

const Gigs = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.wrapper} >
            <ScrollView showsVerticalScrollIndicator={false} >
                <CustomNameComponent title={'Gigs'} />
                <BalanceComponent title={'Gigs Balance'} amount={'3,250,000'} />
                <SuperGig navigation={navigation} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default Gigs


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,

    }
})