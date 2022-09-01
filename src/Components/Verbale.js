import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import pdfLogo from '../../assets/images/pdfIcon.png';

const Verbale = ({ data }) => {
    return (
        <TouchableOpacity
            style={styles.verbaleViewer}>
            <Image
                source={pdfLogo}
                style={styles.logo}
            />
            <Text style={styles.testo}>{data}</Text>
        </TouchableOpacity>
    )
}

export default Verbale

const styles = StyleSheet.create({
    verbaleViewer: {
        width: 150,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        flexDirection: 'row',
        margin: 10,
    },
    logo: {
        height: 20,
        width: 20,
    },
    testo: {

    }
})
