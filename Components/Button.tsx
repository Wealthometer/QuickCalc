import { StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Button = ({
  title,
  type,
  onPress,
}: {
  title: string;
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={{fontSize : 34, color : Colors.white}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    button : {
        height : 70,
        width : 70,
        borderRadius: 10,
        padding : 10,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : Colors.btnDark
    }
});
