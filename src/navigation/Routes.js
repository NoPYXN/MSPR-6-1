import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import page1 from './Page1';
import page2 from './Page2';

//const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="page1">
          <Stack.Screen name="page1" component={Page1} />
          <Stack.Screen name="page2" component={Page2} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
