import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import MapView, { Marker }  from 'react-native-maps';
import Colours from '../Colours';

//file that will handle all things related to previewing and working with maps
const MapScreen = props => {
    //passing parameters from other files to use them in this one
    const initialLocation = props.navigation.getParam('initialLocation');
    const readonly = props.navigation.getParam('readonly');
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    //mapping a starting position for when the map is opened
    const mapRegion = {
        //starting location near CN tower in toronto
        latitude: initialLocation ? initialLocation.latitude : 43.642927,
        longitude: initialLocation ? initialLocation.longitude :-79.387202,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    //assigning the selected location to variables for use in other files
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

    
    //using callback to hold a certain state of the function so when it renders, it will remain in the same state
    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation){
            return;
        }
        props.navigation.navigate('NewItem', {pickedLocation: selectedLocation});
    }, [selectedLocation]);

    //use effect to render the screen with new information
    useEffect(() => {
        props.navigation.setParams({saveLocation: savePickedLocationHandler})
    }, [savePickedLocationHandler]);

    //setting variable to hold coordinates for a marker for map
    let markerCoordinates;

    //setting the selected locations longitude and latitude to the marker
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