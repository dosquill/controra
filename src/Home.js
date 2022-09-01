import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import RoundButton from '../src/Components/RoundButton';
import { useNavigation } from '@react-navigation/native';
import { link } from '../LinkToExport';

const tokenTesserato = "981c798b136865f247fc7450fcca8089ea3ddfd5";

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <Text style={styles.betaText}>Beta</Text>
            <View style={styles.displayLogo}>
                <Image source={Logo} />
            </View>

            <View style={styles.displayButton}>

                <RoundButton
                    style={styles.Button}
                    text={"ACCEDI"}
                    onPress={() => {
                        navigation.navigate('Accesso');
                    }}
                />

                <RoundButton
                    style={styles.Button}
                    text={"NUOVO TESSERATO"}
                    onPress={() => {
                        navigation.navigate('SignUp');
                        Alert.alert('Non registrarti se non sei in sede')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    displayLogo: {
        flex: 1,
    },
    displayButton: {
        alignItems: 'center',
        marginTop: 400,
        width: 200,
        height: 130,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Button: {
        margin: 10,
    },
    betaText: {
        color: 'gray',
        paddingLeft: "80%"
    }
})

export default Home