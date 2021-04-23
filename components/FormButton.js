// simple class that just has a preset look for the buttons
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../components/Dimentions';

//using touchable opacity because it is very hard to edit the default react buttons
const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
//css that specifies what the buttton should look like
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#D8F32F',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#818181',

  },
});
