export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (title, image) => {
    return { type: ADD_ITEM, itemData: { title: title, image: image} };
}