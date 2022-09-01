import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';
import { link } from '../../LinkToExport';

const creaTesserato = link + "/tesserati/crea/credenziali";

const SignUp = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatedPassword, setRepeatedPassword] = useState(null);

    const jsonSend = {
        'username': username,
        'email': email,
        'password': password,
        'password2': repeatedPassword
    }

    
    function signUpForm() {
        fetch(creaTesserato, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonSend)
        })
            .then(response => response.json())
            .then(data => {
                if( username === null || password === null || email === null || repeatedPassword === null){
                    Alert.alert('Attenzione', 'Completa tutti i campi per continuare');
                    throw new Error('SignUp error');
                }
                navigation.navigate('NuovoTesserato', {
                    idUtente: data,
                    username: username,
                    password: password,
                });
            })
            .catch(function(error){
                console.log('SignUp: There has been a problem with your fetch operation ' + error.message);
                throw error;
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.displayLogo}>
                <Image source={Logo} />
            </View>

            <View style={styles.displayButton}>
                <TextInput style={styles.Button}
                    placeholder={"USERNAME..."}
                    textAlign={'center'}
                    placeholderTextColor={"#8f8a8a"}
                    onChangeText={newText => setUsername(newText)}
                    />

                <TextInput style={styles.Button}
                    placeholder={"EMAIL..."}
                    textAlign={'center'}
                    placeholderTextColor={"#8f8a8a"}
                    onChangeText={newText => setEmail(newText)}
                    />

                <TextInput style={styles.Button}
                    placeholder={"PASSWORD..."}
                    textAlign={'center'}
                    placeholderTextColor={"#8f8a8a"}
                    secureTextEntry={true}
                    onChangeText={newText => setPassword(newText)}
                    />

                <TextInput style={styles.Button}
                    placeholder={"CONFERMA PASSWORD..."}
                    textAlign={'center'}
                    placeholderTextColor={"#8f8a8a"}
                    secureTextEntry={true}
                    onChangeText={newText => setRepeatedPassword(newText)}
                />
            </View>

            <TouchableOpacity
                style={styles.sendButton}
                onPress={() => {
                    signUpForm();
                }}
            >
                <Text>INVIA</Text>
            </TouchableOpacity>
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
        marginTop: 300,
        width: 200,
        height: 110,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Button: {
        width: 220,
        height: 50,
        marginTop: 10,
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
        marginTop: '55%',
        marginStart: '75%',
        backgroundColor: '#C4C4C4',

    }

})

export default SignUp