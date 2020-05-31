import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#AE0000',
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 300,
    }
});

export default function Start(){
    const login = () => {
        console.log("iniciando sesion");
    }

    const register = () => {
        console.log("registrando nueva cuenta");
    }

    const facebook = async () => {
        console.log("desde facebook");
    }

    return (
        <BackgroundImage
            source={require('../../assets/images/wall.png')}
        >

            <View style={ styles.container }>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <AppButton 
                    bgColor="rgba(255, 180, 0, 0.7)"
                    title="Entrar "
                    action={() => login()}
                    iconName="sign-in"
                    iconColor="#fff"
                />

                <AppButton 
                    bgColor="rgba(0, 200, 0, 0.7)"
                    title="Registarme "
                    action={() => register()}
                    iconName="user-plus"
                    iconColor="#fff"
                />

                <AppButton 
                    bgColor="rgba(3, 49, 140, 0.7)"
                    title="Iniciar con Facebook "
                    action={() => facebook()}
                    iconName="facebook"
                    iconColor="#fff"
                    
                />
            </View>
        </BackgroundImage>
    )
}
