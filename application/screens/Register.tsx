import React, { useState, useEffect, useRef } from 'react';
import { Text, TextInput, View, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import { Button } from 'react-native-elements';
import { useForm } from 'react-hook-form';
import { StackNavigationProp } from '@react-navigation/stack';
import Toast from 'react-native-simple-toast';
import firebase from '../utils/firebase';
import commonStyles from '../../assets/styles/common';

type RootStackParamList = {
    Login: undefined,
    Register: undefined,
}

type RegisterScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
    navigation: RegisterScreenNavigationProps
}

interface IRegisterFormData {
    name: string;
    lastname: string;
    email: string;
    password: string;
    password_repeat: string;
}


function Register({navigation}: Props) {
    
    const {  handleSubmit, register, setValue, watch, errors } = useForm<IRegisterFormData>();
    const password = useRef({});
    password.current = watch("password", "");

    // Validacione para los campos del formulario
    useEffect(() => {
        register({name: 'name'}, {required: true});
        register({name: 'lastname'}, {required: true});
        register({name: 'email'}, 
            {
                required: true,
                pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Error: Direccion de correo invalida'
                }
            }
        );
        register({name: 'password'}, 
            {
                required: true,
                minLength: {
                    value: 6,
                    message: 'El password debe tener al menos 6 caracteres',
                }
            }
        );
        
        register({name: 'password_repeat'}, 
            {
                required: true,
                validate: value =>
                    value === password.current || "Los passwords no coinciden"
            }
        );
    }, [register])


    // Registrar al usuario en la base de datos
    const onSubmit = async (user: IRegisterFormData) => {
        firebase.auth().createUserWithEmailAndPassword(
            user.email, user.password
        )
            .then(() => {
                Alert.alert(
                    "Registro completado!",
                    "Bienvenido a nuestra familia, te has registrado satisfactoriamente"
                )
            })
            .catch(error => {
                Alert.alert(
                    "Error",
                    error.message
                )
            });
    }

    // Iniciar sesion con facebook
    const loginFacebok = () => {
        console.log("Iniciando sesion con facebook");
    }



    return(
        <View style={commonStyles.container}>
            <Text style={commonStyles.title}>Registrate</Text>

            <Text style={commonStyles.labels}>Nombre</Text>
            <TextInput
                style={commonStyles.inputs}
                onChangeText={ text => setValue("name", text, true)}
            />
            {errors.name && <Text style={commonStyles.errors}>Error: Nombre es requerido</Text>}
            
            <Text style={commonStyles.labels}>Apellidos</Text>
            <TextInput
                style={commonStyles.inputs}
                onChangeText={ text => setValue("lastname", text, true)}
            />
            {errors.lastname && <Text style={commonStyles.errors}>Error: Apellido es requerido</Text>}

            <Text style={commonStyles.labels}>Email:</Text>
            <TextInput 
                style={commonStyles.inputs}
                onChangeText={ text => setValue("email", text, true)}
            />
            {errors.email && <Text style={commonStyles.errors}>Error: Email es requerido</Text>}
            {errors.email && errors.email.type === 'pattern' && <Text>Error: Ingrese un email valido</Text>}

            <Text style={commonStyles.labels}>Password:</Text>
            <TextInput
                secureTextEntry={true}
                style={commonStyles.inputs}
                onChangeText={ text => setValue("password", text, true)}
            />
            {errors.password && <Text style={commonStyles.errors}>Error: Password es requerido</Text>}
            {errors.password && errors.password.type === 'minLength' && <Text style={commonStyles.errors}>Error: El password debe tener almenos 6 caracteres</Text>}

            <Text style={commonStyles.labels}>Confirmar Password</Text>
            <TextInput
                secureTextEntry={true}
                style={commonStyles.inputs}
                onChangeText={ text => setValue("password_repeat", text, true)}
            />
            {errors.password_repeat && <Text style={commonStyles.errors}>Error: Debe confirmar el password</Text>}
            {errors.password_repeat && errors.password_repeat.type === 'validate' && <Text style={commonStyles.errors}>Error: Los passwords no coinciden</Text>}
            <AppButton
                bgColor="rgb(224, 108, 0)"
                title="Registrarme"
                action={handleSubmit(onSubmit)}
                iconName="save"
                iconColor="#FFF"
            />
            <AppButton
                bgColor="rgba(3, 49, 140, 0.7)"
                title="Iniciar sesion con facebook"
                action={() => loginFacebok()}
                iconName="facebook"
                iconColor="#FFF"
            />
            <Button
                onPress={() => navigation.navigate('Login')}
                title="   Ya tiens cuenta? inicia sesion!   "
                buttonStyle={commonStyles.bButtonStyle}
                titleStyle={commonStyles.bTitleStyle}

            />
        </View>
    );
}

export default Register;