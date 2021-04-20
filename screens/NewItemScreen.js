import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewItemScreen = props => {
    return <View>
        <Text>NewItemScreen</Text>
    </View>
};

NewItemScreen.navigationOptions = {
    headerTitle: 'Add Item'
};

const styles = StyleSheet.create({});

export default NewItemScreen;