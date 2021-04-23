import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Image } from 'react-native';
import FormInput from '../components/FormInput.js';
import {windowHeight, windowWidth} from '../components/Dimentions';
import FormButton from '../components/FormButton';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';
const SigninScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Items');
        } catch (err) {
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
                     <View style={styles.signUp}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.navButtonText}>Don't have an account? Sign Up</Text>
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
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
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