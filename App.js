import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import ItemsNavigator from './navigation/ItemsNavigator';
import itemsReducer from './store/items-reducer'
import { init } from './components/database'

init().then(() => {
  console.log('Initialized Database')
}).catch(error => {
  console.log('Database failed to load');
  console.log(error);
});


const rootReducer = combineReducers({
  items: itemsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (<Provider store={store}><ItemsNavigator /></Provider>);
}

