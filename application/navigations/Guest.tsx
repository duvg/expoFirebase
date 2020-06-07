import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from 'react-navigation';
import { Text, View, Button } from 'react-native';

// Screens to guest users
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import Restaurants from '../screens/Restaurants/Restaurants';


const Stack = createStackNavigator();
const GuestNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Login"
              headerMode="none"
            >   
                <Stack.Screen name="Restaurant" component={Restaurants} options={{ title: 'Restaurants'}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login'}} />
                <Stack.Screen name="Register" component={RegisterScreen} />
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default GuestNavigation;