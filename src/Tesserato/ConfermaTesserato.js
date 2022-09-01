import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import QRCode from 'react-native-qrcode-svg';
import { link } from '../../LinkToExport';
import { useNavigation } from '@react-navigation/native';
import RoundButton from '../Components/RoundButton';

// questo token serve per assicurarsi che le attivazioni vangano fatte da un utente autorizzato, questo è quello di stefano
const tokenDelPersonale = '57d17aa601d5c80347bec65d7084ceff101805d6';

const ConfermaTesserato = ({ route }) => {
    const navigation = useNavigation();
    const utente = (route.params.utente).toString();
    const verificaStatusId = link + '/tesserati/status/' + utente;
    let isValid, isActive;


    function verificaStatoId() {
        fetch(verificaStatusId, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json' ,
                'Authorization': 'token ' + tokenDelPersonale
            }
        })
            .then(response => response.json())
            .then(data => {
                isValid = data.response;
                isActive = data.content;
                console.log(data);
                console.log('isValid: ' + isValid + ' idUtente: ' + utente + ' isActive: '+ isActive +'\n');

                if (isValid && isActive)
                    navigation.navigate('Accesso');
            })
            .catch(function(error){
                console.log('ConfermaTesserato: There has been a problem with your fetch operation ' + error.message);
                throw error;
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mostralo al personale</Text>

            <QRCode 
                value={utente}
                size={250}
                color="black"
                backgroundColor="white"
            />

            <RoundButton
                onPress={() => {
                    verificaStatoId();
                }}                
                text= "Verifica stato"
                style={styles.verificaStatoButton}
            >
            </RoundButton>


        </View >
    )
}

export default ConfermaTesserato

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 10,
        fontSize: 26,
    },
    verificaStatoButton:{
    }
})