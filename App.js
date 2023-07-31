import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, {useState} from "react";
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  const [image, setImage] = useState(null)

  const pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    });
    console.log(result);

    //if(!result.canceled){
      setImage(result.assets[0].uri)
    //}
  }

  return (
    <View style={styles.container}>
      <Text styles={styles.text}>Image Picker</Text>
      <Button title='pick an image from gallery' onPress={pickImage}/>
      {image && <Image source={{uri:image}} style={styles.image}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#fff",
    marginBottom:50
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 30,
  }
});
