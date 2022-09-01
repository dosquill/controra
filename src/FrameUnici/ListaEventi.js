import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/searchIcon.png';
import Evento from '../Components/Evento';
import immagine1 from '../../assets/images/immagineEvento.png';
import immagine2 from '../../assets/images/evento2.png';

const str = "https://02d1-154-60-200-113.ngrok.io/api/eventi";


const ListaEventi = () => {
    const getEventi = async () => {
        try {
            const response = await fetch(str);
            const json = await response.json();
            setData(json);
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.displayLogo}>
                <Image source={Logo} />
            </View>

            <View style={styles.displayButton}>
                <Image source={searchIcon} style={styles.icon} />
                <TextInput
                    style={styles.Button}
                    placeholder={"Cerca..."}
                    textAlign={'center'}
                    placeholderTextColor={"#8f8a8a"} />
            </View>

            <Text>Lista eventi</Text>
            <SafeAreaView style={styles.scroll}>
                <ScrollView >
                    <Evento data={"03/02/2022"} locandina={immagine1} />
                    <Evento data={"22/01/2022"} locandina={immagine2} />
                    <Evento data={"03/02/2022"} locandina={immagine1} />
                    <Evento data={"22/01/2022"} locandina={immagine2} />
                </ScrollView>
            </SafeAreaView>

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
        marginTop: 250,
        width: 200,
        height: 110,
        flexDirection: 'column',
        justifyContent: 'center',
        flexDirection: 'row',

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
    icon: {
        height: 30,
        width: 30,
    },

})

export default ListaEventi