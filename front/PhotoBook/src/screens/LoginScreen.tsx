import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation} : LoginProps) => { 
    return(
        <View style={styles.mainContainer}>
          <Text style={styles.grosTexte}>LoginScreen !</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003b6f',
    height: '100%'
  },
  grosTexte: {
    color: 'white',
    fontSize: 40
  }
});
export default LoginScreen;