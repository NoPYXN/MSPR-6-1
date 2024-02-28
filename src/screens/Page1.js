import React from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native-web';
import { TouchableOpacity } from 'react-native';
const Page1 = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Page1"
        onPress={() => navigation.navigate('Page2')}
        />
        <Text>PAGE 1</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Page2')}} ><Text>BOUTON VERS PAGE 2</Text></TouchableOpacity>
       
    </View>
  );
};

export default Page1;