
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import Details from '../screens/Details';
import Splash from '../screens/Splash';
import LoginUser from '../screens/LoginUser';
import OtpVerify from '../screens/OtpVerify';
import RegisterUser from '../screens/RegisterUser';
import EnrollFinger from '../screens/EnrollFinger';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="LoginUser" component={LoginUser} />
                <Stack.Screen name="OtpVerify" component={OtpVerify} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="RegisterUser" component={RegisterUser} />
                <Stack.Screen name="EnrollFinger" component={EnrollFinger} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}