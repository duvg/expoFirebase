import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,  DrawerNavigationProp, DrawerContentScrollView } from '@react-navigation/drawer';
import { createStackNavigator,  } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


import Restaurants from '../screens/Restaurants/Restaurants';
import LoginScreen from '../screens/Login';
import LogoutScreen from '../screens/Logout';

import { Button, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, BorderlessButton } from 'react-native-gesture-handler';
import Header from '../components/Header';
import Constants from 'expo-constants';

import { MyDrawerProps } from '../utils/types';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

function LogguedNavigation() {
    
    return(
        <PaperProvider>
            <NavigationContainer>
            <Drawer.Navigator drawerContent={({navigation}) => <CustomDrawer navigation={navigation} />}>
                <Drawer.Screen name="Restaurants" component={Restaurants} />
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Salir" component={LogoutScreen} />
            </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}


export default LogguedNavigation;