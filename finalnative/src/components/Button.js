import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ onPress, text }) {
  return (
    <>
      <TouchableOpacity style={styles.stylebutton} onPress={onPress}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFF",
  },
  stylebutton:{
    backgroundColor: "#007AFF",
    borderRadius: 10,
    flex: 1,
    shadowOpacity: .5,
    padding: 5,
    position: "absolute",
    left:"52%",
    marginTop:"10%",
  }
});