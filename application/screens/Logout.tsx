import React, { useEffect } from 'react';
import { Text } from 'react-native';
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

function LogoutScreen() {
    useEffect(() => {
        firebase.auth().signOut()
            .then(() => {
                Toast.showWithGravity('Has cerrado sesión correctamente', Toast.LONG, Toast.BOTTOM);
            })
            .catch((error) => {
                Toast.showWithGravity(error.message, Toast.LONG,Toast.BOTTOM);
            });
    },[]);

    return(
        null
    )
}

export default LogoutScreen;