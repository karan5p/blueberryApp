import React, { useState } from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, Button, Input} from 'react-native-elements'
import firebase from '../firebase/fire';

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
    return <>
        <Input label="Email" value={email} onChangeText={setEmail}></Input>
        <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry></Input>
        {
            error?
            <Text style={{color:'red'}}>{error}</Text>
            :null
        }
        <Button title="SignUp" onPress={()=> signUp()}></Button>
        <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
            <Text>Already have an account? Sign in</Text>
        </TouchableOpacity>

    </>;
};

export default SignupScreen;