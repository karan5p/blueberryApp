import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('items.db'); //opening the database called items

//Initializing the database at the start to create or load existing table called items
export const init = () => {
    //Creating promises for error checking and async programming
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {        
            tx.executeSql(
             'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL);', 
             [],
             () => {
                 resolve();   
             },
             (_, error) => {
                reject(error); 
             }
            );
        });
    });
    return promise;
};

//exports database operations to add items to the table
export const insertItem = (title, imageUri, address, latitude, longitude) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {        
            tx.executeSql(
                //question marks are values to avoid an SQL injection attack if database was online for example instead of local
             `INSERT INTO items (title, imageUri, address, latitude, longitude) VALUES (?, ?, ?, ?, ?);`, 
             [title, imageUri, address, latitude, longitude],
             (_, result) => {
                 resolve(result);   
             },
             (_, error) => {
                reject(error); 
             }
            );
        });
    });
    return promise;
};

//exports database operations to get all the items within the table to display
export const getItems = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {        
            tx.executeSql(
             'SELECT * FROM items', 
             [],
             (_, result) => {
                 resolve(result);   
             },
             (_, error) => {
                reject(error); 
             }
            );
        });
    });
    return promise;
};

//Attempted to add database functionality for deleting item but could not figure it out
// export const deleteItem = (id) => {
//     const promise = new Promise((resolve, reject) => {
//         db.transaction((tx) => {        
//             tx.executeSql(
//             `DELETE FROM  items where id=${id};`, 
//              [],
//              () => {
//                  resolve();   
//              },
//              (_, error) => {
//                 reject(error); 
//              }
//             );
//         });
//     });    
//     return promise;
// };



