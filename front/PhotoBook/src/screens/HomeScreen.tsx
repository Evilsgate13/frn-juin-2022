import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Image, StyleSheet, Text, View } from 'react-native';
import WallScreen from './WallScreen';
import SettingsScreen from './SettingsScreen';
import LegalScreen from './LegalScreen';

import { Icon } from "@rneui/themed";



const Tab = createBottomTabNavigator()
const HomeScreen = ( {name}: {name: string}) => { 
    return(
          <Tab.Navigator>
            <Tab.Screen name="Wall" component={WallScreen} options={{
                    tabBarIcon: () => (<Icon
                      name='devices'
                      color='#003b6f'/>)
                }}/>
            <Tab.Screen name="Legal" component={LegalScreen} options={{
                    tabBarIcon: () => (<Icon
                      name='heartbeat'
                      type='font-awesome'
                      color='#003b6f'/>)
                }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                    tabBarIcon: () => (<Icon
                      name='g-translate'
                      color='#003b6f'/>)
                }}/>
          </Tab.Navigator>
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
  },
  
});
export default HomeScreen;