import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../navigation';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation} : LoginProps) => { 
    return(
        <View style={styles.mainContainer}>
          <Text style={styles.grosTexte}>Faut se logguer!</Text>
          <TextInput style={styles.lesLogins} placeholder="Login"  />
          <TextInput style={styles.lesLogins} placeholder="Password" secureTextEntry />
          <Button title="Connect" onPress={() => 
            {console.log('coucou petite Merluche'); 
            navigation.navigate('Home');}
            }
            />
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