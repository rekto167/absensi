import React from 'react';
import {
    View, Text,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// components
import Beranda from '../pages/Beranda'
import AttendencePersonal from '../pages/attendence/AttendencePersonal'
import MenuSettings from '../pages/settings/MenuSettings'
// icon
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

const Tabs  = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#3498db',
                tabBarActiveTintColor: '#2980b9',
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems:'center', justifyCenter: 'center'}}>
                            <Text>
                                <FontAwesome5 name={'home'} size={15} color={ focused ? '#3498db' : '#95a5a6' } />;
                            </Text>
                        </View>
                    ),
                    headerShown: false
                }}
                name="Beranda" component={Beranda}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems:'center', justifyCenter: 'center'}}>
                            <Text>
                                <FontAwesome5 name={'calendar-check'} solid size={15} color={ focused ? '#3498db' : '#95a5a6' } />;
                            </Text>
                        </View>
                    ),
                    headerShown: false
                }}
                name="Kehadiran" component={AttendencePersonal}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems:'center', justifyCenter: 'center',}}>
                            <Text>
                                <FontAwesome5 name={'user'} solid size={15} color={ focused ? '#3498db' : '#95a5a6' } />;
                            </Text>
                        </View>
                    ),
                    headerShown: false
                }}
                name="Settings" component={MenuSettings}
            />
        </Tab.Navigator>
    )
}

export default Tabs