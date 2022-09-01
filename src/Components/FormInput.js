import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const FormInput = ({ title, inputText, onChangeText, defaultValue }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} defaultValue={defaultValue}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 24,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    text: {
        width: 120,
        fontSize: 12,
        alignItems: 'flex-start',
        borderRadius: 5,
    },
    input: {
        width: 150,
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        marginRight: 15,
    }
})

export default FormInput
