import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ItemsListScreen from '../screens/ItemsListScreen';
import ItemsDetailScreen from '../screens/ItemDetailScreen';
import NewItemScreen from '../screens/NewItemScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../Colours';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

const ItemsNavigator = createStackNavigator({
    Signin : SigninScreen,
    Signup : SignupScreen,
    Items: ItemsListScreen,
    ItemDetail: ItemsDetailScreen,
    NewItem: NewItemScreen,
    Map: MapScreen,

}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});


export default createAppContainer(ItemsNavigator);