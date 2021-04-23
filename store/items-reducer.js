import { ADD_ITEM, SET_ITEMS, DELETE_ITEM } from "./items-actions";
import Item from '../models/item';

//file to handle state manipulation using REDUX

//initial state to involve an empty list of items
const initialState = {
    items: []
};

//function that will contain all the different state changes required for the app
export default (state = initialState, action) => {
    switch (action.type){
        //case for when setting the items for the list
        case SET_ITEMS:
            return {
                items: action.items.map(
                    item => new Item(item.id.toString(), item.title, item.imageUri, item.address, item.latitude, item.longitude)
                )
            };
        //case to add the item in the database table
        case ADD_ITEM:
            const newItem = new Item(
                action.itemData.id.toString(), 
                action.itemData.title, 
                action.itemData.image,
                action.itemData.address,
                action.itemData.latitude,
                action.itemData.longitude
            );
            return {
                items: state.items.concat(newItem)
            };
        // case DELETE_ITEM:
        //     return {
        //         items: action.items.map(
        //             item => new Item(item.id.toString(), item.title, item.imageUri, item.address, item.latitude, item.longitude)
        //         )
        //     };
        default:
            return state;
    }
    
};
