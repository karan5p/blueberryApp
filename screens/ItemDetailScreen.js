import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import * as SQLite from 'expo-sqlite';
import * as itemsActions from '../store/items-actions';
import { useDispatch } from 'react-redux';

import MapPreview from '../components/MapPreview';
import Colours from '../Colours';

//opening database to modify the table
const db = SQLite.openDatabase('items.db');

//function to define all the requirements for this screen to work.
const ItemDetailScreen = props => {
    //attempted to use dispatch for delete but was not successful
    //const dispatch = useDispatch();
    const itemId = props.navigation.getParam('itemId');
    //selecting the item by its ID to display proper information
    const selectedItem = useSelector(state => state.items.items.find(item => item.id === itemId));

    //assigning a general location variable to hold both latitude and longitude
    const selectedLocation = {latitude: selectedItem.latitude, longitude: selectedItem.longitude}; 

    //delete item handler that functions but some issues
    let deleteItemHandler = () => {
      const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {        
            tx.executeSql(
            `DELETE FROM  items where id=${selectedItem.id};`, 
             [],
             () => {
                 resolve();   
             },
             (_, error) => {
                reject(error); 
             }
            );
        });
    });
    props.navigation.navigate('Signin');
    return promise;
    };

    //attempted to use dispatch to make delete item work but was not successful
    // let deleteItemHandler = () => {
    //   dispatch(itemsActions.deleteItem(selectedItem.id));
    //     props.navigation.goBack();
    // };
        

    return (
        <ScrollView contentContainerStyle = {{alignItems: 'center'}}>
            <Image source = {{uri: selectedItem.imageUri}} style = {styles.image}/>
            <View style = {styles.locationContainer}>
                <View style = {styles.addressContainer}><Text style = {styles.address}>{selectedItem.address}</Text></View>
                <MapPreview style = {styles.mapPreview} location = {selectedLocation}/>
            </View>

            <Button title="Delete Item" colour={Colours.primary} onPress={deleteItemHandler} style = {styles.deleteButton}/>

        </ScrollView>
    );
};

ItemDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('itemTitle')
    };
}

const styles = StyleSheet.create({
    image: {
      height: '35%',
      minHeight: 300,
      width: '90%',
      backgroundColor: '#ccc',
      marginTop: 20,
      borderRadius: 10 
    },
    locationContainer: {
      marginVertical: 20,
      width: '100%',
      maxWidth: 350,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 10
    },
    addressContainer: {
      padding: 20
    },
    address: {
      color: Colours.primary,
      textAlign: 'center'
    },
    mapPreview: {
      width: '100%',
      maxWidth: 350,
      height: 300,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    },
    deleteButton: {
      marginBottom: 10
    }
  });
  

export default ItemDetailScreen;