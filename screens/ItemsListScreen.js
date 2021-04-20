import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from './HeaderButton';

const ItemsListScreen = props => {
    return (
        <View>
            <Text>ItemsListScreen</Text>
        </View>
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