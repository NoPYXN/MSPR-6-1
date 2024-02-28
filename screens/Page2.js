import React from 'react';
import { Button } from 'react-native';
import { View } from 'react-native-web';

const Page2 = ({ navigation }) => {
  return (
    <View>
      <Button
      title="Page2"
      onPress={() => navigation.navigate('page1')}
      />
    </View>
    );
  };

  export default Page2;