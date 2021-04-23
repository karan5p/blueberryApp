import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, Button } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';
import * as itemsActions from '../store/items-actions'
import Colours from '../Colours';


//Page for displaying all the items in a flatlist
const ItemsListScreen = props => {
    const items = useSelector(state => state.items.items);
    const dispatch = useDispatch();

    //using effect to render items according to database table
    useEffect(() => {
        dispatch(itemsActions.loadItems());
    }, [dispatch]);

    const navigateNewItemsHandler = () => {        
        props.navigation.navigate('NewItem');
    };

    return (
        <View>
            <FlatList 
            data = {items}
            keyExtractor= {item => item.id} 
            renderItem = {itemData => (
            <PlaceItem image = {itemData.item.imageUri} title = {itemData.item.title} address = {itemData.item.address} onSelect = {() => {
                    props.navigation.navigate('ItemDetail', {
                        itemTitle: itemData.item.title, 
                        itemId: itemData.item.id
                    });
                }}
            /> 
            )} 
            />            
            <Button title="Add Item" color={Colours.primary} onPress={navigateNewItemsHandler}/>
        </View>
    );
};

ItemsListScreen.navigationOptions = navData => {
    return { 
        headerTitle: 'All Items',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Add Item' 
                iconName={Platform.OS === 'android' ? 'md-camera' : 'ios-camera'}
                onPress={() =>{
                    navData.navigation.navigate('NewItem');
                }}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({});

export default ItemsListScreen;