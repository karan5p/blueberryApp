import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import KEY from '../keys'

//file to contain the API information for google maps
const MapPreview = props => {
    let imagePreviewUrl;

    //setting the api and configuring it to match certain requirements like latitude and longitude
    if (props.location){
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=&markers=color:red%7Clabel:A%7C${props.location.latitude},${props.location.longitude}&key=${KEY.googleMapsApiKey}`;
    }    
    return (<TouchableOpacity onPress = {props.onPress} style = {{...styles.mapPreview, ...props.style}}>
        {props.location ? (<Image style = {styles.mapImage} source = {{uri: imagePreviewUrl}}/>) : (props.children)}
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
    mapPreview:{
        justifyContent: 'center',
        alignItems: 'center'    
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }

});

export default MapPreview;