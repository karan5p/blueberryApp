// landing screen that user is met with to then navigated to the main page or signup
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Image } from 'react-native';
import FormInput from '../components/FormInput.js';
import {windowHeight, windowWidth} from '../components/Dimentions';
import FormButton from '../components/FormButton';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';
import NewItemScreen from './NewItemScreen.js';
const SigninScreen = ({navigation})=>{ // creating variables and setting them empty
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => { 
        try {
            //uses firebase to authenticate and check if there is an account and if not pushes out an error urging signup
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Items');
        } catch (err) { //validates the email and password field
            setError(err.message);
        }

    }
    //scrollview incase user screen is small
    return <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <View style={styles.purpleCasing}>
                        {/* showing the app image right on top */}
                        <View style={styles.imageView}> 
                            <Image
                                source={require('../components/blueberry.png')}
                                style={styles.logo}
                            />
                        </View>
                        {/* input fields using the forminput class */}
                        <FormInput
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            placeholderText="Email"
                            iconType="user"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <FormInput 
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                        />
                        <FormButton
                              buttonTitle="Sign In"
                         onPress={() => signIn()}
                        />
                        {/* redirecting to signup screen */}
                     <View style={styles.signUp}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.navButtonText}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                     </View>
                    </View>
                    
                  {/* this is where the errors from above are displayed to user */}
                    {
                        error ?
                            <Text style={{ color: 'red' }}>{error}</Text>
                            : null
                    }
                    
                </View>
            </ScrollView>
};
// changing the header title
SigninScreen.navigationOptions = {
    headerTitle: 'Sign In'
};
const styles = StyleSheet.create({
   //background
    purpleCasing:{
        width: 411,
        height: 500,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor:'#6C78B8'
    },
    navButtonText: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        marginTop: 20,
      },
    signUp:{
        marginTop: 5,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    imageView:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    //logo size
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'cover',
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
       
      },
  });
export default SigninScreen;