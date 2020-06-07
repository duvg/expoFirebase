import React, { useState, useEffect} from 'react';
import {  StyleSheet, FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import { CommonActions } from '@react-navigation/native';
import * as firebase from 'firebase';
import Header from '../../components/Header';
import PreLoader from '../../components/PreLoader';
import RestaurantEmpty from '../../components/Restaurant/RestaurantEmpty';
import RestaurantAddButton from '../../components/Restaurant/RestaurantAddButton';
import Constants from 'expo-constants';

// import de los types para la navegacion
import { MyDrawerProps } from '../../utils/types';

interface IRestaurant {
    id: string; 
    name: string; 
    capacity: string; 
    description: string;
}
interface IRestaurants extends Array<object> {
    [index: number] : IRestaurant
};

interface IListProps {
    restaurants: IRestaurant[] 
}

function Restaurants({navigation}: MyDrawerProps) {

    // Estado del screen.
    const [restaurants, setRestaurants] = useState<IRestaurants>([]);
    const [loaded, setLoaded] = useState(false);
    const [restaurantLogo, setRestaurantLogo] = useState(require('../../../assets/images/restaurant.jpg'));
    const [refRestaurant, setRefRestaurant] = useState(firebase.database().ref().child('restaurants'));

    // Inicializacion de los datos del componente.
    useEffect(() => {
        refRestaurant.on('value', snapshot => {
            let restaurants:IRestaurants = [];
            snapshot.forEach(row => {
                restaurants.push({
                    id: row.key,
                    name: row.val().name,
                    capacity: row.val().capacity,
                    description: row.val().description
                })
            });
            setRestaurants(restaurants);
            
        });
        setLoaded(true);
    }, []);

    // Navegar al formaulario para agregar un nuevo restaurante.
    const addRestaurant = () => {
        const navigationAction = CommonActions.navigate({
            name: 'AddRestaurant',
        });   
        navigation.dispatch(navigationAction);
    }

    // Mostrar los detalles del restaurante.
    const restaurantDetail = (restaurant: IRestaurant) => {
        console.log('detalles del restaurante');
    };

    // Renderizar los items de la lista de restaurante.
    const renderRestaurant = (restaurant: any) => {
        return(
            <View>
                <Header navigation={navigation} />
                <ListItem
                    containerStyle={styles.item}
                    titleStyle={styles.title}
                    leftAvatar={{ rounded: true, source: {uri: restaurantLogo}}}
                    title={`${restaurant.name} (Capacidad: ${restaurant.capacity})`}
                    onPress={() => restaurantDetail(restaurant)}
                    rightIcon={{name: 'arrow-right', type: 'font-awesome', style: styles.listIconStyle}}
                />
            </View>
        )
    }


    if(!loaded) {
        return <PreLoader /> 
    }

    if( ! restaurants.length) {
        return(
            <View style={styles.containerEmpty}>
                <Header navigation={navigation} />
                <RestaurantEmpty text="No hay resturantes disponibles" />
                <RestaurantAddButton  addRestaurant={() => addRestaurant()}/>
            </View>
        )
    }

    const restaurantDetails = () => {
        console.log('d');
    }

    return(
        <View>
            <FlatList
                data={restaurants}
                keyExtractor={(index) => index.toString()}
                renderItem={(data) =>  renderRestaurant(data.item)}
            />
            <RestaurantAddButton addRestaurant={() => addRestaurant()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#FFf',
    },
    listIconStyle: {
        marginRight: 10,
        fontSize: 15,
        color: 'rgba(255, 38, 74, 0.6)'
    },
    item: {
        padding: 0,
        backgroundColor: 'rgba(206, 206, 206, 0.6)',
    },
    containerEmpty: {
        flex:1, 
        flexDirection: 'column', 
        justifyContent:'space-between',
        marginTop: Constants.statusBarHeight,
    }
});

export default Restaurants;