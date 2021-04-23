import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapPreview from './MapPreview';


import Colours from '../Colours';

//Fuction that will behave like the image picker but with locations instead
const LocationPicker = props => {
    //setting variables to hold certain states
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();

    //Aquiring variables from other files with the use of parameters
    const mapPickedLocation = props.navigation.getParam('pickedLocation');

    const {onLocationPicked} = props;

    //For sideeffects to affect certain outcomes and render if certain information has been assigned to the variables
    useEffect(() => {
        if (mapPickedLocation){
            setPickedLocation(mapPickedLocation);
            onLocationPicked(mapPickedLocation);
        }
    }, [mapPickedLocation, onLocationPicked]); //dependencies for useeffect


    //Adding permissions to allow location working on iOS as well.
    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (result.status !== 'granted'){
            Alert.alert('You need to grant location permissions to use this app.', [{Text: 'Okay'}]);
            return false;
        }
        return true;
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission){
            return;
        }

        try{
            //Launches the current location function to assign longitude and latitude of the current location of the device
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({timeout: 5000});
            console.log(location);
            //setting the latitude and longtitude to variables to be used in other files
            setPickedLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
            props.onLocationPicked({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
        } catch(error){
            Alert.alert('Could not get location', 'Please try again later or pick a location on the map.', [{text: 'Okay'}]);
        }
        setIsFetching(false);
        
    };

    //handler to navigate to mapscreen
    const pickOnMapHandler = () => {
        props.navigation.navigate('Map');
    };

    return <View style = {styles.locationPicker}>
        <MapPreview style = {styles.mapPreview} location = {pickedLocation} onPress = {pickOnMapHandler}>
            {isFetching ? (<ActivityIndicator size = "large" color = {Colours.primary} />) : (<Text>No Location has been chosen yet!</Text>)}
        </MapPreview> 
        <View style = {styles.actions}>
            <Button title = "Get User Location" color = {Colours.primary} onPress = {getLocationHandler}/>
            <Button title = "Pick on Map" color = {Colours.primary} onPress = {pickOnMapHandler}/>
        </View>       
        
    </View>
};


const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
});

export default LocationPicker;