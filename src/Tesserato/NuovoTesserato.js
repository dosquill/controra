import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import FormInput from '../Components/FormInput';
import { useNavigation } from '@react-navigation/native';
import { link } from '../../LinkToExport';

const creaTesserato = link + "/tesserati/crea/dati";

const NuovoTesserato = ({ route }) => {
    const { idUtente } = route.params;

    const navigation = useNavigation();

    const [nome, setNome] = useState("Domenico");
    const [cognome, setCognome] = useState("Cognome");
    const [newsletter, setNewsletter] = useState(false);
    const [data_di_nascita, setData_di_nascita] = useState("1998-04-29");
    const [luogo_di_nascita, setLuogo_di_nascita] = useState("Angri");
    const [indirizzo_di_residenza, setIndirizzo_di_residenza] = useState("PapaGiovanniXXIII");
    const [citta_di_residenza, setCitta_di_residenza] = useState("Angri");
    const [tipo_documento, setTipo_documento] = useState(false);
    const [codice_documento, setCodice_documento] = useState(400924);


    const jsonObject = {
        'nome': nome,
        'cognome': cognome,
        'newsletter': newsletter,
        'luogo_di_nascita': luogo_di_nascita,
        'data_di_nascita': data_di_nascita,
        'indirizzo_di_residenza': indirizzo_di_residenza,
        'citta_di_residenza': citta_di_residenza,
        'tipo_documento': tipo_documento,
        'codice_documento': codice_documento,
        'id': idUtente
    }

    function prova1() {
        fetch(creaTesserato, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonObject)
        })
            .then(response => response.json())
            .then(data => {
                navigation.navigate('ConfermaTesserato', {
                    utente: idUtente
                });
            })
            .catch(function(error){
                console.log('NuovoTesserato: There has been a problem with your fetch operation ' + error.message);
                throw error;
            });
    }


    return (
        <View style={styles.container}>
            <View logoViewer>
                <Image source={Logo} />
            </View>

            <View>
                <View style={styles.form}>
                    <FormInput defaultValue={"Domenico"} title={"NOME:"} onChangeText={newText => setNome(newText)} />
                    <FormInput defaultValue={"Squillante"} title={"COGNOME:"} onChangeText={newText => setCognome(newText)} />
                    <FormInput defaultValue={"1998-04-29"} title={"DATA DI NASCITA:"} onChangeText={newText => t(newText)} />
                    <FormInput defaultValue={"Angri"} title={"LUOGO DI NASCITA:"} onChangeText={newText => setLuogo_di_nascita(newText)} />
                    <FormInput defaultValue={"Angri"} title={"CITTA DI RESIDENZA:"} onChangeText={newText => setCitta_di_residenza(newText)} />
                    <FormInput defaultValue={"PapaGiovanniXXIII"} title={"VIA DI RESIDENZA:"} onChangeText={newText => setIndirizzo_di_residenza(newText)} />
                    <FormInput defaultValue={"204882"} title={"CODICE DOC:"} onChangeText={newText => setCodice_documento(newText)} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            prova1();
                        }}
                    >
                        <Text>INVIA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NuovoTesserato

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logoViewer: {

    },
    form: {
        height: 400,
        width: 350,
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#C4C4C4',
        width: 70,
        height: 25,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 250,
        marginTop: 90,
    }
})