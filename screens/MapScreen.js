import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = props => {
    const mapRegion = {
        latitude: 43.642927,
        longitude: -79.387202,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };
    return <MapView style = {styles.map} region = {mapRegion}/>;
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default MapScreen;