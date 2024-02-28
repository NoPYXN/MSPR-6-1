import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from '/src/components/header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Page1 from './src/screens/Page1';
import Page2 from './src/screens/Page2';
import HomeStack from './src/navigation/HomeStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <HomeStack />
    // <NavigationContainer>
    // <View style={styles.container}>
    //     <Header 
    //       onMenuPress={() => console.log('Menu Pressed')}
    //       onProfilePress={() => navigation.navigate('page1')}
    //       />
    //       <TouchableOpacity onPress={()=>{navigation.navigate('Page2')}} > BOUTON</TouchableOpacity>
       
    //     {/* <Stack.Navigator>
    //       <Stack.Screen name="page1" component={Page1} />
    //       <Stack.Screen name="page2" component={Page2} />
    //     </Stack.Navigator> */}
    //   </View>
    // </NavigationContainer>
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