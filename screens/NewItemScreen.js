import React, { useState } from 'react';
import { ScrollView, View, Button, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Colours from '../Colours';
import * as itemsActions from '../store/items-actions';



const NewItemScreen = props => {
    const [titleValue, setTitleValue] = useState('');

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitleValue(text);
    }

    const saveItemHandler = () => {
        dispatch(itemsActions.addItem(titleValue));
        props.navigation.goBack();
    };

    return(
        <ScrollView>
            <View style = {styles.form}>
                <Text style = {styles.label}>Title</Text>
                <TextInput 
                 style = {styles.textInput}
                 onChangeText = {titleChangeHandler} 
                 value = {titleValue} 
                />
                <Button title="Save Item" colour={Colours.primary} onPress={saveItemHandler}/>
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