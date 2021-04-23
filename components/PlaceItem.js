import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colours from '../Colours';

//File to design how each item in the list will look like
const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>        
      </View>
    </TouchableOpacity>
  );
};

//styling of the list display
const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 100,    
    backgroundColor: '#ccc',
    borderColor: Colours.primary,
    borderWidth: 1,
    borderRadius: 10
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  address: {
    color: '#666',
    fontSize: 16
  }
});

export default PlaceItem;
