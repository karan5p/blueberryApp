import { ADD_ITEM, SET_ITEMS, DELETE_ITEM } from "./items-actions";
import Item from '../models/item';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type){
        case SET_ITEMS:
            return {
                items: action.items.map(
                    item => new Item(item.id.toString(), item.title, item.imageUri, item.address, item.latitude, item.longitude)
                )
            };
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
