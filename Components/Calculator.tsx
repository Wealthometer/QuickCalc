import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/utils/Colors";
import Button from "./Button";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberInput = (num: string) => {
    if (operator === "") {
      const newValue = firstValue + num;
      setFirstValue(newValue);
      setDisplayValue(newValue);
    } else {
      const newValue = secondValue + num;
      setSecondValue(newValue);
      setDisplayValue(newValue);
    }
  };
    setOperator(op);
    setDisplayValue("0");
  return (
    <View style={styles.container}>
     <View style={styles.display}>
        <Text style ={{ fontSize : 70, fontWeight: '300' }}>1111</Text>
     </View>
      <View style={styles.keypad}>
        <Button title='C' type='top' />
        <Button title='' type='top' />
        <Button title='C' type='top' />
        <Button title='C' type='top' />
        <Button title='C' type='top' />
        <Button title='C' type='top' />
        <Button title='C' type='top' />
        <Button title='C' type='top' />
      </View> 
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.dark
    },

    display : {
      flex : 1,
      backgroundColor : Colors.gray,
      paddingVertical : 20,
      paddingHorizontal : 40,
      justifyContent : 'flex-end',
      alignItems : 'flex-end'
    },

    keypad : {
      flex : 2,
      backgroundColor : Colors.light,
      flexDirection : 'row',
      flexWrap : 'wrap',
      justifyContent : 'center',
      gap : 30,
      padding : 30
    }
})