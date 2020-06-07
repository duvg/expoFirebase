import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

interface IRestaurantEmptyProps {
    text: string;
}

function RestaurantEmpty (props: IRestaurantEmptyProps) {
    const {text} = props;
    return(
        <View style={styles.restaurantEmptyView}>
            <Text style={styles.restaurantEmptyText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    restaurantEmptyView: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    restaurantEmptyText: {
        backgroundColor: '#db7500',
        color: 'black',
        textAlign: 'center',
        padding: 20
    }
});

export default RestaurantEmpty;