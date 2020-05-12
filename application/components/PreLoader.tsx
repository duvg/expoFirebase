import React from 'react';
import { ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get('window');


const PreLoader = () => {
    return(
        <View style={[styles.prelaoder]}>
            <ActivityIndicator style={{height: 80}} size="large" />
        </View>
    )
}

const styles = StyleSheet.create({
    prelaoder: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        backgroundColor: '#AE0000'
    }
});

export default PreLoader;



