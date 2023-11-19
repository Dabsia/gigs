import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Goback = ({ title }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}  >
                <Icon
                    source="chevron-left"
                    color={'#000'}
                    size={30}
                />

            </TouchableOpacity>

            <Text style={styles.text} >{title}</Text>
        </View>
    )
}

export default Goback


const styles = StyleSheet.create({
    iconContainer: {
        height: 40,
        width: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 40 / 2,
        backgroundColor: 'white',
        justifyContent: 'center',

        alignItems: 'center',
        marginVertical: 20
    },
    container: {
        flexDirection: 'row',

    },
    text: {
        alignSelf: 'center',
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 17,

    }
})