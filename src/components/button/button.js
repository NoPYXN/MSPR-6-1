import React from 'react';
import {
  Button,
  Alert,
} from 'react-native';

const CompButton = () => (
<Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
);

export default CompButton;