import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('items.db');

export const init = () => {
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