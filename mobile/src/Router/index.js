import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AttendencePersonal from '../pages/attendence/AttendencePersonal'
import Login from '../pages/auth/Login'
import Registrasi from '../pages/auth/Registrasi'
import MenuSettings from '../pages/settings/MenuSettings'

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Registrasi"
                component={Registrasi}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Router