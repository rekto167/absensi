import React from 'react'
import {
  Text,
  View
} from 'react-native'

// pages
import Router from './Router'
// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  )
}

export default App