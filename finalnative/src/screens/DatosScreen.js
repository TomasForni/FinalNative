import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import Button from '../components/Button'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DatosScreen = () => {
  const navigation = useNavigation();
  const [nombre, setName] = useState('');
  const [edad, setEdad] = useState('');

  const validarDatos = async () => {
    if(!nombre && !edad){
      Alert.alert('Completa los datos...')
    }
    else if (!nombre){
      Alert.alert('El nombre no puede estar vacio')
    }else if(!edad){
      Alert.alert('El numero no puede estar vacio')
    }
    else{
      await AsyncStorage.setItem("nom", nombre);
      await AsyncStorage.setItem("eda", edad);
      navigation.navigate("ResultadoScreen");
    }
  };

  
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <View style={styles.formgroup}>
          <Text style={styles.text}>Nombre</Text>
          <TextInput style={styles.input} placeholder="Nombre:" value={nombre} onChangeText={setName}/>
          <Text style={styles.text2}>Edad</Text>
          <TextInput style={styles.input} keyboardType = 'numeric' placeholder="Edad:" value={edad} onChangeText={setEdad}/>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={validarDatos} text="Continuar"/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    backgroundColor: "#45938748",
  },
  container:{
    width: "90%",
    top: 10,
  },
  buttonContainer:{
    alignContent: 'center',
    top: 0,
    height: "5%",
    width: "80%",
  },
  titulo:{
    width:"100%",
    fontSize: 25,
    marginBottom:"10%"
  },
  formgroup: {
    flexDirection: "column",
    height: "200",
  },
  input:{
    width: "100%",
    height: "20%",
    margin: 5,
    marginBottom: 15,
    borderWidth: 0.2,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(250,250,250,1)",
    marginLeft:"5%"
  },
  text:{
    left:"46%",  
    fontSize:20,
  },
  text2:{
    left:"50%",  
    fontSize:20,
  }
})

export default DatosScreen;