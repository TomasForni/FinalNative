import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Button from "./Button";
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
  const navigationHook = useNavigation();  
  const handleDatosScreenClick = () => {   navigationHook.navigate('DatosScreen') }
  const handleResultadoScreenClick = () => {   navigationHook.navigate('ResultadoScreen') }
  return (
    <>
        <View style={styles.container}>
          <Button styles={styles.button} onPress={handleDatosScreenClick} text={'DatosScreen'}>
          </Button>
          <Button styles={styles.button} onPress={handleResultadoScreenClick} text={'ResultadoScreen'}>
          </Button>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    height: '4%',
    bottom: 0,
    gap: 25,
    alignSelf: 'center',
    marginBottom: '10%',
  },
  button: {
    flex: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: .5,
    padding: 5,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "rgba(250,0,0,1)",
    color: 'white',
  },
  text: {
    color: "#FFF",
  },
});