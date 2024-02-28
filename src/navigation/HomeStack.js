import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from '../screens/Page1';
import { NavigationContainer } from '@react-navigation/native';
import Page2 from '../screens/Page2';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                options={{ title: 'Welcome' }}
                name="Page1" 
                component={Page1}
            />
            <Stack.Screen
                options={{ title: 'PAGE2' }}
                name="Page2" 
                component={Page2}
            />

        </Stack.Navigator>
        </NavigationContainer>
    );
};



export default HomeStack;