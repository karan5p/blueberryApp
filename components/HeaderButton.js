import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Colours from '../Colours';

//File to load header item located in the listitems page
const CustomHeaderButton = props => {
    return (
        <HeaderButton
         {...props} 
         IconComponent={Ionicons} 
         iconSize={23} 
         color={Platform.OS === 'android' ? 'white' : Colours.primary}
        />
    );
};

export default CustomHeaderButton;