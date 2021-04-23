import { ADD_ITEM } from "./items-actions";
import Item from '../models/item';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_ITEM:
            const newItem = new Item(
                action.itemData.id.toString(), 
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
