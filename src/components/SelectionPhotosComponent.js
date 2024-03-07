import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import Galerie from './GalerieComponent';

const PhotoPicker = ({ onImageSelect }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera roll is required!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, result.uri]);
      // Appel de la fonction de rappel avec l'URI de l'image sélectionnée
      onImageSelect(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImages.length > 0 && <Galerie images={selectedImages} />}
      
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <FontAwesome5 name="upload" size={50} color="black" />
        <Text style={styles.text}>Ajouter des photos</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default PhotoPicker;