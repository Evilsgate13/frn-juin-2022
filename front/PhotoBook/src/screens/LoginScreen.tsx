import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../navigation';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { connect, selectAuthentication, User } from '../redux/slices/authentication.slice';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;



const LoginScreen = ({navigation} : LoginProps) => { 
  const authentication = useAppSelector(selectAuthentication);
  const dispatch = useAppDispatch();
  
  const onPress = () => {
    console.log('coucou');
    const user : User = {displayName: 'leUser'}
    dispatch(connect(user));
    navigation.navigate('Home')
    }

  const [loginform, setLoginForm] = useState({
    login: '',
    password: ''
  });
  const [password, setPassword] = useState()

    return(
        <View style={styles.mainContainer}>
          <Text style={styles.grosTexte}>Faut se logguer!</Text>
          <Text>{JSON.stringify(loginform)}</Text>
          <TextInput style={styles.lesLogins} placeholder="Login" 
              onChangeText= {newLogin => setLoginForm({login : newLogin, password: loginform.password})} />
          <TextInput style={styles.lesLogins} placeholder="Password" secureTextEntry />
          <Button title="Connect" onPress= {onPress}/>
        
        </View>
    );
};
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#003b6f',
    height: '100%',
    padding : 5
  },
  grosTexte: {
    color: 'white',
    fontSize: 40
  },
  lesLogins: {
    margin: 12,
    borderWidth : 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 10,
    color : '#6A700B',
    height: 40
  },
});
export default LoginScreen;