import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemDetailScreen = props => {
    return <View>
        <Text>ItemDetailScreen</Text>
    </View>
};

ItemDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('itemTitle')
    };
}

const styles = StyleSheet.create({});

export default ItemDetailScreen;