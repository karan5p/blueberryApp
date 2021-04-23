import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker }  from 'react-native-maps';

const MapScreen = props => {
    const [selectedLocation, setSelectedLocation] = useState();

    const mapRegion = {
        latitude: 43.642927,
        longitude: -79.387202,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const selectLocationHandler = event => {
        setSelectedLocation({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude
        });

        //console.log(event); to check for which data comes up when tapping on the map screen
    };

    let markerCoordinates;

    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude
        };
    }


    return <MapView style = {styles.map} region = {mapRegion} onPress = {selectLocationHandler}>
        {markerCoordinates && <Marker title = 'Picked Location' coordinate = {markerCoordinates}></Marker>}
    </MapView>;
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default MapScreen;