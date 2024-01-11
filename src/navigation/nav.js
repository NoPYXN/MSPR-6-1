import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from './page1';
import Page2 from './page2';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont()

const Tab = createBottomTabNavigator();

const Routes = () => {

    return (
        <>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen
                        options={{
                            title: '',
                            tabBarIcon: ({ size, color }) => (<Icon name="heart" color="black"
                                size={24} />)
                        }}
                        name="Page1"
                        component={page1}
                    />
                  <Tab.Screen
                       options={{
                            title: '',
                            tabBarIcon: ({ size, color }) => (<Icon name="user" color="black"
                                size={24} />)
                        }}
                        name="Page2"
                        component={page2}
                    />
                </Tab.Navigator>
                <FlashMessage position="top" />
            </NavigationContainer>
        </>
    );
};


export default Routes;