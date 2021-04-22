import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator} from 'react-navigation';
import ItemsListScreen from '../screens/ItemsListScreen';
import ItemsDetailScreen from '../screens/ItemDetailScreen';
import NewItemScreen from '../screens/NewItemScreen';
import MapScreen from '../screens/MapScreen';
import AuthScreen from "../screens/AuthScreen"
import Colors from '../Colours';
import { forModalPresentationIOS } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators';

const ItemsNavigator = createStackNavigator({
    Items: ItemsListScreen,
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

const AuthNavigator = createStackNavigator({
Auth:AuthScreen
});

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Item: ItemsNavigator
});
export default createAppContainer(MainNavigator);




