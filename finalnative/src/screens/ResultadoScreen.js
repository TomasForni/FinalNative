import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import DatosScreen from './DatosScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ResultadoScreen = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  useEffect(() => {
  const traerDatos = async () =>{
   let getNom = await AsyncStorage.getItem("nom");
   let getEdad = await AsyncStorage.getItem("eda");
    setNombre(getNom);
    setEdad(getEdad);
  }
  traerDatos();
  }, []);
  
  
  return (
    <View style={styles.view}>
      <Text style={styles.text} >Hola {nombre}, tu edad es {edad}</Text>
    </View>
  )
}

export default ResultadoScreen

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    backgroundColor: "#45938748",
  },
  text:{
    fontSize:20,
    marginTop:"45%",
    marginLeft:"20%"
  }
})