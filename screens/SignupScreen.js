import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, TouchableOpacity, Platform, ScrollView, Image} from 'react-native';
import {Button, Input} from 'react-native-elements'
import {windowHeight, windowWidth} from '../components/Dimentions';
import firebase from '../firebase/fire';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const SignupScreen = ({navigation})=>{
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]= useState('');

    const signUp = async()=>{
        try{
            firebase.auth().createUserWithEmailAndPassword(email,password);
            navigation.navigate('Signin');
        }
        catch(err){
            setError(err.message);
        }
    }
        return <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <View style={styles.purpleCasing}>
                        <View style={styles.imageView}>
                            <Image
                                source={require('../components/blueberry.png')}
                                style={styles.logo}
                            />
                        </View>
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
                        <TouchableOpacity  onPress={()=>navigation.navigate('Signin')}>
                        <Text style={styles.navButtonText}>Already have an account? Sign in</Text>
                        </TouchableOpacity>
                     </View>
                    </View>
                    
                  
                    {
                        error ?
                            <Text style={{ color: 'red' }}>{error}</Text>
                            : null
                    }
                    
                </View>
            </ScrollView>


};
SignupScreen.navigationOptions = {
    headerTitle: 'Sign Up'
};
const styles = StyleSheet.create({
 
   
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