import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator,  } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


import Restaurants from '../screens/Restaurants/Restaurants';
import LoginScreen from '../screens/Login';
import { Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/Header';
import Constants from 'expo-constants';

import { MyDrawerProps } from '../utils/types';

const Drawer = createDrawerNavigator();

function LogguedNavigation() {
    return(
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{
                    backgroundColor: '#c6cbef',
                    marginTop: Constants.statusBarHeight,
                }}
            >   
                <Drawer.Screen 
                    name="Home" 
                    component={Restaurants}
                    options={({navigation}: MyDrawerProps) => ({
                        title: 'Inicio',
                        drawerIcon: icon => <Icon name="home" size={25} color="#000" />,
                        headerLeft: () => 
                            <TouchableOpacity
                                onPress={() => navigation.toggleDrawer()}
                            >
                                <Icon name="bars" color="black" />
                            </TouchableOpacity>
                    })} 
                />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default LogguedNavigation;