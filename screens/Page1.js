import React from 'react';
import { Button } from 'react-native';
import { View } from 'react-native-web';

const Page1 = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Page1"
        onPress={() => navigation.navigate('page2')}
        />
    </View>
  );
};

export default Page1;