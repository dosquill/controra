import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';
import { link } from '../LinkToExport';

const richiesta = link + "/login";

/**     UTENTI
 * Socio
 * Paolotto
 * 12345678
 * 
 * Tesserato
 * Dosquill
 * 123
 */


const Accesso = () => {
    const navigation = useNavigation();

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    let token, socio;

    const jsonObject = {
        'username': user,
        'password': password,
    }

    function richiestaLogin() {
        fetch(richiesta, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonObject)
        })
            .then(response => response.json())
            .then(data => {
                if (data.non_field_errors || user === null || password === null){
                    alert('Credenziali errate');
                    throw new Error('Login incorrect');
                }
                token = data.token;
                socio = data.socio;
            })
            .then(() => {
                if (socio)
                    navigation.navigate('AreaSocio');
                else
                    navigation.navigate('AreaTesserato', {token: token}); 
            })
            .catch(function(error){
                console.error('Accesso: There has been a problem with your fetch operation ' + error.message);
                throw error;
            });
        }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            enabled={true}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.container}>
                    <View style={styles.displayLogo}>
                        <Image source={Logo} />
                    </View>

                    <View style={styles.displayButton}>
                        <TextInput 
                            style={styles.Button} 
                            placeholder={"USERNAME..."} 
                            textAlign={'center'} 
                            onChangeText={username => setUser(username)}
                            placeholderTextColor={"#8f8a8a"}></TextInput>
                        <TextInput 
                            style={styles.Button} 
                            placeholder={"PASSWORD..."} 
                            textAlign={'center'} 
                            placeholderTextColor={"#8f8a8a"} 
                            secureTextEntry={true}
                            onChangeText={password => setPassword(password)}
                            ></TextInput>
                    </View>

                    <TouchableOpacity
                        style={styles.sendButton}
                        onPress={() => {
                            richiestaLogin();
                        }}
                        >
                        <Text>INVIA</Text>
                    </TouchableOpacity>
                </View>

            </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent:'center',
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
    },
    Button: {
        width: 220,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    sendButton: {
        width: 60,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '35%',
        marginStart: 280,
        backgroundColor: '#C4C4C4',
    }
})

export default Accesso