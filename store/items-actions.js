export const ADD_ITEM = 'ADD_ITEM';

export const addItem = title => {
    return { type: ADD_ITEM, itemData: { title: title} };
}