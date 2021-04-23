import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MapPreview from '../components/MapPreview';
import Colours from '../Colours';

const ItemDetailScreen = props => {
    const itemId = props.navigation.getParam('itemId');
    const selectedItem = useSelector(state => state.items.items.find(item => item.id === itemId)) 
    return (
        <ScrollView contentContainerStyle = {{alignItems: 'center'}}>
            <Image source = {{uri: selectedItem.imageUri}} style = {styles.image}/>
            <View style = {styles.locationContainer}>
                <View style = {styles.addressContainer}><Text style = {styles.address}>{selectedItem.address}</Text></View>
                <MapPreview style = {styles.MapPreview} location = {{latitude: selectedItem.latitude, longitude: selectedItem.longitude}}/>
            </View>
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
      width: '100%',
      backgroundColor: '#ccc'
    },
    locationContainer: {
      marginVertical: 20,
      width: '90%',
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
    }
  });
  

export default ItemDetailScreen;