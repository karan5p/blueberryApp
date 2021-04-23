import { ADD_ITEM, SET_ITEMS } from "./items-actions";
import Item from '../models/item';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type){
        case SET_ITEMS:
            return {
                items: action.items.map(
                    item => new Item(item.id.toString(), item.title, item.imageUri)
                )
            };
        case ADD_ITEM:
            const newItem = new Item(
                action.itemData.id.toStrring(), 
                action.itemData.title, 
                action.itemData.image
            );
            return {
                items: state.items.concat(newItem)
            };

        default:
            return state;
    }
    
};
