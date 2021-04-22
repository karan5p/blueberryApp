import React from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Colours from '../Colours'

const ImgPicker = props => {
    const verifyPermissions = () => {
        Permissions.askAsync()
    };

    const takeImageHandler = () => {
        ImagePicker.launchCameraAsync();
    };
    return(
        <View style = {styles.imagePicker}>
            <View style = {styles.imagePreview}>
                <Text>No Image Picked Yet</Text>
                <Image style = {styles.image}/>
            </View>
            <Button title= "Take Image" colour ={Colours.primary} onPress = {takeImageHandler}/>
        </View>
    );
};

//styling the image preview portion
const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center'
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