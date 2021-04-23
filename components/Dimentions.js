//simple class that uses getters and spits out the height and width of the screen to ensure reactive functionality
import { Dimensions } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
