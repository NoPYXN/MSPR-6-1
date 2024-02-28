import React from 'react';
import { Pressable, Alert } from 'react-native';

const CompButton = ({ navigation }) => {
    Alert.alert('Button with adjusted color pressed');
    // Naviguer vers l'écran suivant
    console.log('Boutton cliqué');
    navigation.navigate('../../navigation/Page1');

  return (
    <>
      <Pressable
        title="Je créé mon compte"
        color="#008000"
        //onClick={handleButtonClick()}
        onPress={ () => navigation.navigate("page1")}
      />
    </>
  );
};

export default CompButton;
