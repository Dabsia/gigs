import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Goback from '../../components/Goback/Goback'
import { COLORS, SIZES } from '../../constants/theme'
import GigInfo from '../../components/GigInfo/GigInfo'
import GigInfo2 from '../../components/GigInfo2/GigInfo2'
import ContinueBtn from '../../components/ContinueBtn/ContinueBtn'
import { Icon } from 'react-native-paper'

const Invoice = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.backGroundHolder} >
                    <View style={styles.background} >
                        <Goback />

                        <View style={styles.nameContainer} >
                            <Text style={styles.name} >Hi, Kathy</Text>
                            <Text style={styles.details} >Preview your details below,
                                we also prepared an invoice for you to send your client. Awesome, right? 😎 </Text>
                        </View>
                        <View>
                            <Text style={styles.gigAmountText} >GIG AMOUNT</Text>
                            <Text style={styles.amount} >₦400,000</Text>
                        </View>
                        <View>
                            <View style={styles.previewContainer} >
                                <TouchableOpacity style={styles.boxHolder} >
                                    <Text style={styles.previewText} >Preview Invoice</Text>
                                    <Icon
                                        source="chevron-right"
                                        color={'#fff'}
                                        size={30}

                                    />
                                </TouchableOpacity>

                            </View>

                            <View style={styles.previewContainer} >
                                <TouchableOpacity style={styles.boxHolder} >
                                    <Text style={styles.previewText} >Send Invoice</Text>
                                    <Icon
                                        source="upload"
                                        color={'#fff'}
                                        size={30}

                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.gigInfosBox} >
                    <GigInfo />
                    <GigInfo2 />

                    <View style={styles.btnContainer} >
                        <ContinueBtn />
                    </View>



                </View>



            </ScrollView>
        </SafeAreaView>

    )
}

export default Invoice


const styles = StyleSheet.create({
    container: {

        paddingBottom: '20%'
    },
    backGroundHolder: {
        backgroundColor: COLORS.primary,
        // height: '100%'

    },
    contentContainer: {
        height: 1200,
    },
    background: {
        width: '90%',
        alignSelf: 'center'
    },
    name: {
        color: COLORS.white,
        fontSize: SIZES.extraLarge,
        fontWeight: 'bold',
        marginBottom: SIZES.font
    },
    details: {
        color: COLORS.white,
        fontSize: 13.5,
        lineHeight: 17
    },
    nameContainer: {
        marginBottom: 40
    },
    gigAmountText: {
        color: COLORS.white
    },
    amount: {
        fontSize: 50,
        color: '#5CC95A',
        fontWeight: 'bold'
    },

    gigInfosBox: {
        marginTop: 20,
        height: 400,

    },

    btnContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    previewContainer: {

        width: '100%',

        paddingVertical: 20,
        borderTopColor: 'rgba(217, 217, 217, 1)',
        borderTopWidth: 1
    },
    boxHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    previewText: {
        color: COLORS.white
    }

})