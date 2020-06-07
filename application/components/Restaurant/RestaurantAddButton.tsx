import React from 'react';
import AppButton from '../AppButton';
import { StyleSheet, View } from 'react-native';

interface IRestaurantProps {
    addRestaurant: () => void
}

function RestaurantAddButton (props: IRestaurantProps) {
    const { addRestaurant } = props;
    return(
        <View style={styles.buttonContainer}>
            <AppButton
                bgColor="rgba(255, 38, 74, 0.6)"
                title="Añadir un restaurante"
                action={addRestaurant}
                iconName="plus"
                iconColor="#FFF"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        width: '98%',
    }
});


export default RestaurantAddButton;
