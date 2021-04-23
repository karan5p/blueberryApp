import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('items.db');

const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {        
            tx.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL);', 
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