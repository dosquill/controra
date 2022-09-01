import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const RoundButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>
            <View style={styles.circular}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    circular: {
        borderColor: '#55BCF6',
        alignItems: 'center',
        width: 160,
        height: 50,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,

    },
    text: {
        fontSize: 12,
    }
})


export default RoundButton