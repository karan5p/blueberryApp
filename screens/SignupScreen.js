//singup page and then sends to signin page right after successfully registered
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, TouchableOpacity, Platform, ScrollView, Image} from 'react-native';
import {Button, Input} from 'react-native-elements'
import {windowHeight, windowWidth} from '../components/Dimentions';
import firebase from '../firebase/fire';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const SignupScreen = ({navigation})=>{// creating variables and setting them empty
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]= useState('');

    const signUp = async()=>{
        try{
            //uses firebase to create an account and checks if any duplicates and if the password meets requirements
            firebase.auth().createUserWithEmailAndPassword(email,password);
            navigation.navigate('Signin');
        }
        catch(err){//validates the email and password field
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
                        <FormInput label="Email" value={email} onChangeText={setEmail}  placeholderText="Email"
                                iconType="user"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}></FormInput>
                        <FormInput label="Password" value={password} onChangeText={setPassword} placeholderText="Password"
                            iconType="lock"
                            secureTextEntry={true}></FormInput>
                        <FormButton
                              buttonTitle="Sign Up"
                         onPress={() => signUp()}
                        />
                     <View style={styles.signIn}>
                           {/* redirecting to signin screen */}
                        <TouchableOpacity  onPress={()=>navigation.navigate('Signin')}>
                        <Text style={styles.navButtonText}>Already have an account? Sign in</Text>
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
SignupScreen.navigationOptions = {
    headerTitle: 'Sign Up'
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
    signIn:{
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

export default SignupScreen;