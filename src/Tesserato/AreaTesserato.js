import { StyleSheet, Text, View, Image, Modal, Alert, Pressable } from 'react-native';
import React, { useState,useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import RoundButton from '../Components/RoundButton';
import qr from '../../assets/images/qrCodeExample.png';
import QRCode from 'react-native-qrcode-svg';
import { link } from '../../LinkToExport';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const richiestaEventi = link + "/eventi";
const linkControlloTessera = `${link}/tesserati/tessera/controllo`;

const AreaTesserato = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const token = route.params.token;
    let tokenStored;
    const tokenDelPersonale = '57d17aa601d5c80347bec65d7084ceff101805d6';
    const navigation = useNavigation();

    let userData;
    let nome, cognome, isValid;

    // on load startup
    useEffect(() => {
        // Per adesso sta dando problemi lo storage per il token quindi sto passando con stacknavigation 
        //getData();
        controlloTessera();
    }, []); 
    
    const getData = async () => {
        try{
            const value = await AsyncStorage.getItem('@storage_Token');
            if (value){
                tokenStored = value;
                console.log(`Value retrieved: ${tokenStored}`);
            }
        } catch (e){
            console.error('Problems in getData ' + e);
        }
    }

    function controlloTessera() {
        fetch(linkControlloTessera, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({'token': token}),
        })
            .then(response => response.text())
            .then(data => {
                userData = JSON.parse(data);
                nome = userData.nome;
                cognome = userData.cognome;
                isValid = userData.is_valid;
            })
            .catch(function(error){
                console.log(`AreaTesserato: There has been a problem with your fetch operation ${error.message}`);
                throw error;
            });
        }


    return (
        <View style={styles.container}>
            <View style={styles.displayLogo}>
                <Image source={Logo} />
            </View>

            <View style={styles.displayButton}>
                <RoundButton 
                    text={"MOSTRA TESSERA"}
                    onPress={() => {
                        navigation.navigate('Tessera', {
                            nome: nome,
                            cognome: cognome,
                            isValid: isValid,
                        });
                    }}
                    />

                <RoundButton 
                    text={"EVENTI"}
                    onPress={() => {
                        //navigation.navigate('ListaEventi');
                        alert('Work in progress');
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
        marginTop: 30,
        flex: 0.2,
    },
    displayButton: {
        alignItems: 'center',
        marginTop: 400,
        width: 200,
        height: 110,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})

export default AreaTesserato



/*
        copia e incolla per il modale con popup della tessera

        <View style={styles.container}>
            <View style={styles.displayLogo}>
                <Image source={Logo} />
            </View>

            <View style={styles.displayButton}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Non lo so</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Ti spacco la faccia</Text>
                            </Pressable>
                            <QRCode 
                                value={tokenStored}
                                size={125}
                                color="black"
                                backgroundColor="white"
                                style={styles.qrViewer}
                            />           
                        </View>
                    </View>
                </Modal>

                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>MOSTRA TESSERA</Text>
                </Pressable>

                <RoundButton 
                    text={"EVENTI"}
                    onPress={() => {
                        //navigation.navigate('ListaEventi');
                        alert('Work in progress');
                    }}
                />
            </View>
        </View>




*/