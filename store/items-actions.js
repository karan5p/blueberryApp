import * as FileSystem from 'expo-file-system';




export const ADD_ITEM = 'ADD_ITEM';

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
        } catch (error){
            console.log(error);
            throw error;
        }

        dispatch({ type: ADD_ITEM, itemData: { title: title, image: newPath} });
    };
};