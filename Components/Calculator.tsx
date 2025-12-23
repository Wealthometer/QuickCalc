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

  const handleOperatorInput = (op: string) => {
    if (firstValue === "") return;
    setOperator(op);
    setDisplayValue("0");
  };

  const handleEqualInput = () => {
    let result = 0;
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setFirstValue(result.toString());
    setSecondValue("");
    setOperator("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstValue("");
    setSecondValue("");
    setOperator("");
  };

  const handleDelete = () => {
    if (operator === "") {
      const newValue = firstValue.slice(0, -1);
      setFirstValue(newValue);
      setDisplayValue(newValue === "" ? "0" : newValue);
    } else {
      const newValue = secondValue.slice(0, -1);
      setSecondValue(newValue);
      setDisplayValue(newValue === "" ? "0" : newValue);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text
          style={{
            fontSize: 30,
            color: Colors.dark,
            position: "absolute",
            top: 20,
            right: 40,
          }}
        >
          {firstValue} {operator} {secondValue}
        </Text>
        <Text style={{ fontSize: 70, fontWeight: "300" }}>
          {Number(displayValue).toString().length > 9
            ? Number(displayValue)
                .toFixed(5)
                .replace(/\.?0+$/, "")
            : displayValue}
        </Text>
      </View>
      <View style={styles.keypad}>
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