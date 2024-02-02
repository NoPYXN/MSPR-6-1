import React from 'react';
import { Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CompButton = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    Alert.alert('Button with adjusted color pressed');
    // Naviguer vers l'écran suivant
    navigation.navigate('page1');
  };

  return (
    <>
      <Button
        title="Je créé mon compte"
        color="#008000"
        onClick={handleButtonClick}
      />
    </>
  );
};

export default CompButton;
