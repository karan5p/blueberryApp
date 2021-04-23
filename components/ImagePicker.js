import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Colours from '../Colours'

//Fucntion that includes all the requirements to select and image and save it
const ImgPicker = props => {
    //variables to hold certain states required for images
    const [pickedImage, setPickedImage] = useState();

    //Adding permissions to allow camera working on iOS as well.
    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (result.status !== 'granted'){
            Alert.alert('You need to grant camera permissions to use this app.', [{Text: 'Okay'}]);
            return false;
        }
        return true;
    };

    //Handler to launch the camera once permissions have been given. Function is done asynchronously
    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission){
            return;
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],            
            quality: 0.5
        });

        //settings the image uri to variable to be used later and elsewhere in the project
        setPickedImage(image.uri);
        props.onImageTaken(image.uri);
    };
    return(
        //View that will hold all the things regarding the image capture in the add item screen
        <View style = {styles.imagePicker}>
            <View style = {styles.imagePreview}>
                {!pickedImage ? (
                    <Text>No Image Picked Yet</Text>
                ) : (
                    <Image style = {styles.image} source = {{uri: pickedImage}}/>
                )}
            </View>
            <Button title= "Take Image" color ={Colours.primary} onPress = {takeImageHandler}/>
        </View>
    );
};

//styling the image preview portion
const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }

});

export default ImgPicker;