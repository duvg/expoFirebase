import React from 'react';
import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({

    // containers
    container: {
        backgroundColor:'#AE0000',
        flex: 1, 
        justifyContent: 'center',
        padding: 30
    },

    // Form fields
    inputs: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        borderRadius: 5,
        backgroundColor: '#FFF'
    },
    labels: {
        color: '#FFF',
        fontSize: 15,
    },
    // Text, title, button text
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 25,
        marginBottom: 30
    },

    // images
    logo: {
        width: 100,
        height: 100,
    },

    // Errors validations
    errors: {
        color: '#FFF',
        fontSize: 10,
        padding: 10,
        backgroundColor: '#600101'
    },

    // buttons react-native-elemnts
    bButtonStyle: {
        backgroundColor: 'transparent',
        borderColor: "transparent",
        borderWidth: 0,
    },
    bTitleStyle: {
        color: '#FFF',
        textDecorationLine: 'underline',
        fontSize: 12
    }

});

export default commonStyles;