import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import MapView, { Marker }  from 'react-native-maps';
import Colours from '../Colours';

const MapScreen = props => {
    const initialLocation = props.navigation.getParam('initialLocation');
    const readonly = props.navigation.getParam('readonly');
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const mapRegion = {
        //starting location near CN tower in toronto
        latitude: initialLocation ? initialLocation.latitude : 43.642927,
        longitude: initialLocation ? initialLocation.longitude :-79.387202,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const selectLocationHandler = event => {
        if (readonly){
            return;
        }
        setSelectedLocation({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude
        });

        //console.log(event); to check for which data comes up when tapping on the map screen
    };

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation){
            return;
        }
        props.navigation.navigate('NewItem', {pickedLocation: selectedLocation});
    }, [selectedLocation]);

    useEffect(() => {
        props.navigation.setParams({saveLocation: savePickedLocationHandler})
    }, [savePickedLocationHandler]);

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

MapScreen.navigationOptions = navData => {
    const saveFunction = navData.navigation.getParam('saveLocation');
    const readonly = navData.navigation.getParam('readonly');
    if (readonly){
        return {};
    }
    return {
        headerRight: (
            <TouchableOpacity style = {styles.headerButton} onPress = {saveFunction}>
                <Text style = {styles.headerButtonText}>Save</Text>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    headerButton: {
        marginHorizontal: 20
    },
    headerButtonText: {
        fontSize: 16,
        color: Platform.OS === 'android' ? 'white' : Colours.primary

    }
});

export default MapScreen;