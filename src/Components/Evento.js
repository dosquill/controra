import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Evento = ({ data, locandina }) => {
    return (
        <TouchableOpacity
            style={styles.eventoViewer}>
            <Text style={styles.testo}>{data}</Text>
            <Image
                source={locandina}
                style={styles.locandina}
            />
        </TouchableOpacity>
    )
}

export default Evento

const styles = StyleSheet.create({
    eventoViewer: {
        width: 250,
        height: 240,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        margin: 10,
    },
    locandina: {
        height: 180,
        width: 180,
    },
    testo: {

    }

})