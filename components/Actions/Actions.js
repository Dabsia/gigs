import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import userAdded from '../../assets/images/User.png'
import edit from '../../assets/images/Edit.png'
import imac from '../../assets/images/iMac.png'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { Icon } from 'react-native-paper'


const Actions = ({ personal }) => {
    return (
        <View style={styles.actionContainer} >
            <Text style={styles.header} >ACTIONS</Text>
            <View>
                {personal && <TouchableOpacity style={styles.userAddedContainer} >
                    <View style={styles.boxContainer} >
                        <View style={styles.leftSection} >
                            <View style={styles.imageContainer} >
                                <Image source={userAdded} />
                            </View>
                            <View>
                                <Text style={styles.heading} >Add Team Members</Text>
                                <Text>Jan 10, 2023</Text>
                            </View>
                        </View>
                        <View style={styles.icon}>
                            <Icon
                                source="chevron-right"
                                color={'#000'}
                                size={30}

                            />
                        </View>


                    </View>

                </TouchableOpacity>}

                <TouchableOpacity style={styles.userAddedContainer} >
                    <View style={styles.boxContainer} >
                        <View style={styles.leftSection} >
                            <View style={styles.imageContainer} >
                                <Image source={edit} />
                            </View>
                            <View>
                                <Text style={styles.heading} >Update Gig Progress</Text>
                                <Text>Jan 10, 2023</Text>
                            </View>
                        </View>
                        <View style={styles.icon}>
                            <Icon
                                source="chevron-right"
                                color={'#000'}
                                size={30}

                            />
                        </View>


                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.userAddedContainer} >
                    <View style={styles.boxContainer} >
                        <View style={styles.leftSection} >
                            <View style={styles.imageContainer} >
                                <Image source={imac} />
                            </View>
                            <View style={styles.smallContainer} >
                                <Text style={styles.heading} >Schedule a meeting</Text>
                                <Text style={styles.subheading} >Heads up!
                                    <Text style={styles.small} > You can set a reminder for meetings or reviews to directly via the in-app browser</Text>
                                </Text>
                            </View>
                        </View>



                    </View>

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Actions

const styles = StyleSheet.create({
    actionContainer: {
        marginVertical: 20
    },
    header: {
        fontSize: SIZES.large,
        marginBottom: 20
    },
    boxContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center'
    },
    userAddedContainer: {
        width: '100%',
        backgroundColor: COLORS.white,
        height: 90,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: 20

    },
    icon: {
        alignSelf: 'center'
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(232, 251, 255, 1)',
        alignSelf: 'center',
        marginRight: 20

    },
    leftSection: {
        flexDirection: 'row'
    },
    heading: {
        color: COLORS.primary,
        fontSize: SIZES.font,
        fontWeight: '700'
    },
    smallContainer: {
        width: '100%',

    },
    subheading: {
        width: '67%',
        fontSize: SIZES.small,
        fontWeight: '700'
    },
    small: {
        fontSize: SIZES.small,
        fontWeight: '400'
    },
})