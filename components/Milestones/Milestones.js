import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, IconButton, TextInput } from 'react-native-paper'
import { COLORS } from '../../constants/theme'

const Milestones = () => {
    return (
        <View>

            <View style={styles.views}>
                <View style={styles.miniInputContainer} >
                    <Text style={styles.name} >Due Date</Text>
                    <View style={styles.miniInput} >
                        <IconButton
                            icon="calendar"
                            color={COLORS.primary}
                            size={20}
                            style={styles.icon}
                        />
                        <TextInput style={styles.input2} />

                    </View>
                </View>
                <View style={styles.miniInputContainer} >
                    <Text style={styles.name} >Amount</Text>
                    <View style={styles.miniInput} >
                        <Text style={styles.naira} >₦</Text>
                        <TextInput style={styles.input2} />

                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={styles.add} >+ Add milestone</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Milestones


const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        backgroundColor: 'transparent',
        borderBottomColor: 'red'
    },
    input2: {
        marginTop: 20,
        position: 'absolute',
        backgroundColor: 'transparent',
        borderBottomColor: 'red',
        paddingLeft: 10,
        width: '100%'
    },
    name: {
        marginTop: 50,
        color: COLORS.gray
    },
    miniInputContainer: {
        width: '48%',

    },
    miniInput: {
        width: '100%',
        flexDirection: 'row',
    },
    icon: {
        position: 'relative',
        alignSelf: 'flex-end',
        bottom: -25,
        left: -10
    },
    views: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    naira: {
        position: 'relative',
        alignSelf: 'flex-end',
        bottom: -35,
        left: 0,
        fontSize: 17
    },
    add: {
        color: COLORS.secondary,
        position: 'relative',
        top: 50,
        fontSize: 13,
        fontWeight: 'bold'
    }
})