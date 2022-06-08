/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactNode, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './src/HomeScreen';
import SplashScreen from './src/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Section: React.FC<{
  title: string;
  children: ReactNode;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>

    </View>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createNativeStackNavigator();

  console.log('setIsLoading : ', setIsLoading);
  console.log('isLoading : ', isLoading);

  useEffect(() => {
    setTimeout(() => 
    {setIsLoading(false)}
    , 2000)
  }, [])

  return (
    <SafeAreaProvider >
      
      <StatusBar />
        {isLoading ? <SplashScreen/> : 
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
         </Stack.Navigator>
        </NavigationContainer>}
    </SafeAreaProvider>
  );
};


export default App;
