import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

      <View style={styles.container}>
          <Text>Final test commit hopefully to sync</Text>
          <StatusBar style="auto" />
          <View style={styles.rectangle}></View>
      </View>
    
  );
}
//test 2
//test
//test 3
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C78B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle:{
      position: "absolute",
      width: 411,
      height: 269,
      left: 0,
      top: 0,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 55,
      borderBottomLeftRadius: 55
  },
});
