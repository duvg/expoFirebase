import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';



import { MyDrawerProps } from '../utils/types';
function Header({navigation}: MyDrawerProps){
    return(
        <View
            style={styles.container}
        >
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="bars" color="#FFF" size={20} />
            </TouchableOpacity>
            <Text>Aji Restaurant</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Icon name="user" color="#FFF" size={20} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: 60,
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'red'
    },
});


export default Header;
