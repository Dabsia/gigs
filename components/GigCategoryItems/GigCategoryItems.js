import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Coding from '../../assets/images/Coding.png'
import Equalizer from '../../assets/images/Equalizer.png'
import Palette from '../../assets/images/Palette.png'
import Safari from '../../assets/images/Safari.png'
import Pen from '../../assets/images/Pen.png'
import Add from '../../assets/images/Add.png'

const GigCategoryItems = () => {
    return (
        <View style={styles.parentContainer} >
            <TouchableOpacity style={styles.container} >
                <View style={styles.box} >
                    <View style={styles.imageContainer}>
                        <Image source={Coding} style={styles.image} />
                    </View>
                    <Text style={styles.text} >Frontend Development</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} >
                <View style={styles.box} >
                    <View style={styles.imageContainer2}>
                        <Image source={Equalizer} style={styles.image} />
                    </View>
                    <Text style={styles.text} >Product Design</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} >
                <View style={styles.box} >
                    <View style={styles.imageContainer3}>
                        <Image source={Palette} style={styles.image} />
                    </View>
                    <Text style={styles.text} >Branding</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} >
                <View style={styles.box} >
                    <View style={styles.imageContainer4}>
                        <Image source={Safari} style={styles.image} />
                    </View>
                    <Text style={styles.text} >Backend Development</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} >
                <View style={styles.box} >
                    <View style={styles.imageContainer5}>
                        <Image source={Pen} style={styles.image} />
                    </View>
                    <Text style={styles.text} >Content Writing</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} >
                <View style={styles.box} >
                    <View style={styles.imageContainer6}>
                        <Image source={Add} style={styles.image} />
                    </View>
                    <Text style={styles.text} >Other Gig</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default GigCategoryItems


const styles = StyleSheet.create({
    container: {
        height: 150,
        borderRadius: 15,
        width: '48%',
        backgroundColor: '#fff',
        padding: 15,
        justifyContent: 'center',
        marginBottom: 20
    },
    box: {
        // alignSelf: 'center'
    },
    parentContainer: {
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    image: {
        height: 25,
        width: 25
    },
    imageContainer: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(238, 159, 53,.05)',
        borderRadius: 10
    },
    imageContainer2: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8FBFF',
        borderRadius: 10
    },
    imageContainer3: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(90, 69, 255, 0.05)',
        borderRadius: 10
    },
    imageContainer4: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 8, 53, 0.05)',
        borderRadius: 10
    },
    imageContainer5: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8FBFF',
        borderRadius: 10
    },
    imageContainer6: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(5, 221, 169, 0.05)',
        borderRadius: 10
    },
    text: {
        marginTop: 10
    },
})