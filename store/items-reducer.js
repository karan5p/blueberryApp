import { ADD_ITEM } from "./items-actions";
import Item from '../models/item';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_ITEM:
            const newItem = new Item(new Date().toString(), action.itemData.title);
            return {
                items: state.items.concat(newItem)
            };

        default:
            return state;
    }
    
};
