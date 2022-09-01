import { StyleSheet, Text, View, Image, Modal, Alert, Pressable } from 'react-native';
import React, { useState,useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { link } from '../../LinkToExport';
import { useNavigation } from '@react-navigation/native';

const Tessera = ({route}) => {
    const tokenDelPersonale = '57d17aa601d5c80347bec65d7084ceff101805d6';
    const navigation = useNavigation();    
    let nome = route.params.nome;
    let cognome = route.params.cognome;
    let isValid = route.params.isValid;
    const stringToQr = `${nome} ${cognome} ${isValid}`;
    
    useEffect(() => {
        console.log(stringToQr);
    }, []); 

    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
            >
                La tua tessera
            </Text>
            <QRCode 
                value={stringToQr}
                size={200}
                color="black"
                backgroundColor="white"
                style={styles.qrViewer}
            />           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrViewer: {
        
    },
    text:{
        padding: 20,
        fontSize: 25,
    }
})

export default Tessera