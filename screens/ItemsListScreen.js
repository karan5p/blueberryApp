import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { useSelector, UseSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';


const ItemsListScreen = props => {
    const items = useSelector(state => state.items.items);

    return (
        <FlatList 
         data = {items}
         keyExtractor= {item => item.id} 
         renderItem = {itemData => (
          <PlaceItem image = {itemData.item.imageUri} title = {itemData.item.title} address = {null} onSelect = {() => {
                props.navigation.navigate('ItemDetail', {
                    itemTitle: itemData.item.title, 
                    itemId: itemData.item.id
                });
            }}
          /> 
          )} 
        />
    );
};

ItemsListScreen.navigationOptions = navData => {
    return { 
        headerTitle: 'All Items',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Add Item' 
                iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() =>{
                    navData.navigation.navigate('NewItem');
                }}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({});

export default ItemsListScreen;