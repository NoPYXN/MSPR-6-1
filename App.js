import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '/src/components/header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <View style={styles.container}>
        <Header 
          onMenuPress={() => console.log('Menu Pressed')}
          onProfilePress={() => navigation.navigate('page1')}
          />
        <Stack.Navigator>
          <Stack.Screen name="page1" component={Page1} />
          <Stack.Screen name="page2" component={Page2} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;