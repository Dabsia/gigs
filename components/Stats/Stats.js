import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-paper'
import React from 'react'
import { COLORS } from '../../constants/theme'
import avatar2 from '../../assets/images/avatar2.png'
import avatar3 from '../../assets/images/avatar3.png'
import avatar4 from '../../assets/images/avatar4.png'
import avatar1 from '../../assets/images/avatar1.png'
import battery from '../../assets/images/Battery.png'

const Stats = () => {
    return (
        <View>
            <Text style={styles.headerText} >My Stats</Text>
            <View style={styles.holder} >
                <View style={styles.dueGig} >
                    <View style={styles.batteryContainer} >
                        <Image source={battery} />
                    </View>
                    <Text style={styles.gigText} >Due Gig</Text>
                    <Text style={styles.gigName}  >WP ecommerce site</Text>
                    <Text style={styles.gigTime}  >Jan 10, 2023</Text>
                </View>
                <View style={styles.stats} >
                    <View style={styles.recentClientsBox} >
                        <Text style={styles.clientsText} >Recent Clients</Text>
                        <View style={styles.imageList} >
                            <Image source={avatar2} />
                            <Image source={avatar3} />
                            <Image source={avatar4} />
                            <View style={styles.plusContainer} >
                                <TouchableOpacity>
                                    <Icon
                                        source="plus"
                                        color={COLORS.primary}
                                        size={20}
                                    /></TouchableOpacity>
                            </View>

                        </View>

                    </View>
                    <View style={styles.meetingsBox} >
                        <View style={styles.meetingBoxHeader} >
                            <Text style={styles.meetingText} >Meetings</Text>
                            <Image source={avatar1} />
                        </View>
                        <View>
                            <Text style={styles.meetingName} >Fintech UI website review</Text>
                            <View style={styles.meetingTextHolder} >
                                <Text style={styles.meetingTime} >2 Jan, 2023</Text>
                                <Text style={styles.meetingTime} >5:30PM</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Stats


const styles = StyleSheet.create({
    headerText: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 15

    },
    dueGig: {
        height: '100%',
        width: '49%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    batteryContainer: {
        height: 50,
        width: 50,
        borderRadius: 17,
        backgroundColor: COLORS.pink,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gigText: {
        color: COLORS.danger,
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 30
    },
    gigName: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15,

    },
    gigTime: {
        color: COLORS.gray,
        fontSize: 12,
        fontWeight: '600',
    },
    recentClientsBox: {
        backgroundColor: COLORS.primary,
        height: '49%',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10

    },
    imageList: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'
    },
    plusContainer: {
        height: 32,
        width: 32,
        borderRadius: 32 / 2,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    clientsText: {
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 15
    },
    meetingsBox: {
        backgroundColor: COLORS.white,
        height: '48%',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 10

    },
    meetingText: {
        color: COLORS.secondary,
        fontWeight: '800',
        fontSize: 15
    },
    meetingBoxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    meetingTextHolder: {
        flexDirection: 'row'
    },
    meetingName: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,

    },
    meetingTime: {
        color: COLORS.gray,
        marginRight: 5,
        fontWeight: 'bold',
        fontSize: 11,
        marginTop: 5
    },
    stats: {
        width: '48%',
        height: '100%',
        justifyContent: 'space-between'
    },
    holder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 250,
    }
})