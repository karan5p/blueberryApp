import * as FileSystem from 'expo-file-system';
import { insertItem, getItems } from '../components/database'

export const ADD_ITEM = 'ADD_ITEM';
export const SET_ITEMS = 'SET_ITEMS';

export const addItem = (title, image) => {
    return async dispatch => {
        //converts a long string into parts using / as the target. Array of string segments will be made and retrieve the last segment
        const fileName = image.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;
        
        try{        
            FileSystem.moveAsync({
                from: image,
                to: newPath
            });
            const databaseResult = await insertItem(title, newPath, 'Placeholder address', 10.5, 10.5);
            console.log(databaseResult);
            dispatch({ type: ADD_ITEM, itemData: { id: databaseResult.insertId, title: title, image: newPath} });
        } catch (error){
            console.log(error);
            throw error;
        }
    };
};

export const loadItems = () => {
    return async dispatch => {
        try{
            const databaseResult = await getItems();
            console.log(databaseResult);
            dispatch({type: SET_ITEMS, items: databaseResult.rows._array});
        } catch (error){
            throw error;
        }
    };
};