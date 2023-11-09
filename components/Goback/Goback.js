import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { Icon } from 'react-native-paper'

const Goback = ({ title }) => {
    return (
        <View>
            <TouchableOpacity style={styles.iconContainer}  >
                <Icon
                    source="chevron-left"
                    color={'#000'}
                    size={30}
                />
            </TouchableOpacity>

            <Text>{title}</Text>
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
        marginTop: 20
    },
})