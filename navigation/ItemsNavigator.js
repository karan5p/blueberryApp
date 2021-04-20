import { Platform } from 'react-native';
import { createNavigator, createAppContainer } from '@react-navigation/native';

import ItemsListScreen from '../screens/ItemsListScreen';
import ItemsDetailScreen from '../screens/ItemDetailScreen';
import NewItemScreen from '../screens/NewItemScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../Colours';

const ItemsNavigator = creatStackNavigator({
    Items : ItemsListScreen,
    ItemDetail: ItemsDetailScreen,
    NewItem: NewItemScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ItemsNavigator);




