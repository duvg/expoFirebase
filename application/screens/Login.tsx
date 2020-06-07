import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import { Button } from 'react-native-elements';
import { useForm } from 'react-hook-form';
import { StackNavigationProp } from '@react-navigation/stack';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';
import commonStyles from '../../assets/styles/common';
import facebook from '../utils/facebook';
import * as Facebook from 'expo-facebook';

type RootStackParamList = {
    Login: undefined,
    Register: undefined
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

interface ILoginFormData {
    username: string;
    password: string;
}
function Login ({navigation}: Props ) {

    let facebookResult:Facebook.FacebookLoginResult;


    const { register, setValue, handleSubmit, errors } = useForm<ILoginFormData>();

    useEffect(() => {
        
        register({ name: "password"}, { required: true});
        register(
            { name: "username"}, 
            { 
                required: true, 
                pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Error: Dirección de correo invalida'
                },
            });

            console.log(errors.username);
    }, [register]); //

    // Login con email y password
    const onSubmit = ({username, password}: ILoginFormData) => {
        console.log(errors);
        
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => {
                Toast.showWithGravity("Bienvenido", Toast.LONG, Toast.BOTTOM);
            }).catch((error) => {   
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode === "auth/wrong-password") {
                    Toast.showWithGravity('Password Incorrecto', Toast.LONG, Toast.BOTTOM);
                }
                else {
                    Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
                }
            });
    };   

    interface facprop {
        type: string;
        permissions: string;
    }
    
    // Login confacebook
    const facebookLogin = async () => {
        
        
            await Facebook.initializeAsync(facebook.config.application_id);
            const facebookResult = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            
            if(facebookResult.type == 'success')
            {
                const { type, token } = facebookResult;
                if(type === 'success') {
                    const credentials = firebase.auth.FacebookAuthProvider.credential(token);
                    firebase.auth().signInWithCredential(credentials)
                        .catch(error => {
                            Toast.showWithGravity('Bienvenido XD', Toast.LONG, Toast.BOTTOM);
                        });
                }
                else if(type === 'cancel') {
                    Toast.showWithGravity("Inicio de seson cancelado", Toast.LONG, Toast.BOTTOM);
                }
                else {
                    Toast.showWithGravity("Error desconocido", Toast.LONG, Toast.BOTTOM);
                }

            }
            
        
    }
    
    return(
        <View style={commonStyles.container}>
            <View style={{ alignItems: 'center'}}>
            <Image source={require('../../assets/images/logo.png')} style={commonStyles.logo} />
            </View>
            
            <Text style={commonStyles.title}> Iniciar Sesion </Text>
            <Text style={commonStyles.labels}>Usuario o email</Text>
            <TextInput
                onChangeText={text => setValue("username", text, true)}
                style={commonStyles.inputs}
            />
            {errors.username && <Text style={commonStyles.errors}>Error: El usuario o email es requerido</Text>}
            {errors.username && errors.username.type === 'pattern' && <Text style={commonStyles.errors}>{errors.username.message}</Text>}
            
            <Text style={commonStyles.labels}>Contraseña</Text>
            <TextInput
                secureTextEntry={true}
                onChangeText={text => setValue("password", text, true)}
                style={commonStyles.inputs}
            />
            {errors.password && <Text style={commonStyles.errors}>Error: La contraseña es requerida</Text>}
            <AppButton 
                    bgColor="rgb(224, 108, 0)"
                    title="Iniciar sesion"
                    action={handleSubmit(onSubmit)}
                    iconName="user"
                    iconColor="#fff"
                    
                />
            <AppButton 
                    bgColor="rgba(3, 49, 140, 0.7)"
                    title="Iniciar sesion con facebook"
                    action={() => facebookLogin()}
                    iconName="facebook"
                    iconColor="#fff"
                    
                />
            <Button
                onPress={() => navigation.navigate('Register')}
                title="    No tienes una cuenta, Registarte!    "
                buttonStyle={commonStyles.bButtonStyle}
                titleStyle={commonStyles.bTitleStyle}
            />
        </View>
    );
}

export default Login;