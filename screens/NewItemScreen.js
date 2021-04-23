import React, { useState, useCallback } from 'react';
import { ScrollView, View, Button, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Colours from '../Colours';
import * as itemsActions from '../store/items-actions';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';



const NewItemScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitleValue(text);
    }

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    };

    const locationPickedHandler = useCallback(location => {
        setSelectedLocation(location);
        //console.log(location); checking if location data is passed
    }, []);

    const saveItemHandler = () => {
        dispatch(itemsActions.addItem(titleValue, selectedImage, selectedLocation));
        props.navigation.goBack();
    };

    return(
        <ScrollView>
            <View style = {styles.form}>
                <Text style = {styles.label}>Item Name</Text>
                <TextInput 
                 style = {styles.textInput}
                 onChangeText = {titleChangeHandler} 
                 value = {titleValue} 
                />
                <ImagePicker onImageTaken = {imageTakenHandler} />
                <LocationPicker navigation = {props.navigation} onLocationPicked = {locationPickedHandler}/>

                <Button title="Save Item" color={Colours.primary} onPress={saveItemHandler}/>
            </View>
        </ScrollView>
    );
};

NewItemScreen.navigationOptions = {
    headerTitle: 'Add Item'
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewItemScreen;