import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// components
import Tabs from '../components/Tabs'

const Home = () => {
    return(
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

export default Home