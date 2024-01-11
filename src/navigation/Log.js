import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import { Button } from 'react-native-web';
import CompButton from './src/components/button/button';

const Log = () => {
  return (
    <View style={styles.container}>
      <Header 
        onMenuPress={() => console.log('Menu Pressed')}
        onProfilePress={() => console.log('Profile Pressed')}
      />
      <CompButton/>
    </View>
  );
};

export default Log;
