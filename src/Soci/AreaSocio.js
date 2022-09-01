import { StyleSheet, Text, View, Image, Modal, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import RoundButton from '../Components/RoundButton';
import { useNavigation } from '@react-navigation/native';
import { link } from '../../LinkToExport';

const richiestaEventi = link + "/eventi";
const richiestaVerbali = link + "/soci/riunioni";

const AreaSocio = ({route}) => {
    const navigation = useNavigation();

    const fetchEventi = async () => {
        let response = await fetch(richiestaEventi, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'token ' + token,
            },
            //body: JSON.stringify(jsonObject)
        });

        let json = await response.json();
        console.log(json);
        return json;
    }


    const fetchRiunioni = async () => {
        let response = await fetch(richiestaVerbali, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'token ' + token,
            },
            //body: JSON.stringify(jsonObject)
        });

        let json = await response.json();
        console.log(json);
        return json;
    }

    return (
        <View style={styles.container}>
            <View style={styles.displayLogo}>
                <Image source={Logo} />
            </View>

            <View style={styles.displayButton}>

                <RoundButton
                    text={"EVENTI"}
                    onPress={() => { 
                        fetchEventi();
                        navigation.navigate('ListaEventi');
                    }}
                />

                <RoundButton
                    text={"RIUNIONI"}
                    onPress={() => { 
                        fetchRiunioni();
                        navigation.navigate('ListaVerbali'); 
                    }}
                />


                <RoundButton
                    text={"SCANNER TESSERE"}
                    onPress={() => { 
                        alert('Work in progress');
     /*                    fetchRiunioni();
                        navigation.navigate('ListaVerbali',{
                            token: token
                        })  */
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
        flex: 0.2,
    },
    displayButton: {
        alignItems: 'center',
        marginTop: 400,
        width: 200,
        height: 200,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})

export default AreaSocio