import React from 'react';
import {
  Button,
  Alert,
} from 'react-native';
import Routes from '../../../navigation/nav';

const CompButton = () => (
  <><Button
    title="Je créé mon compte"
    color="#008000"
    onPress={() => Alert.alert('Button with adjusted color pressed')} /><Routes></Routes></>
);

export default CompButton;