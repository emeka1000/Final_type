import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  View,
  Text,
} from "react-native";

export default function AddTask({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        styles={styles.input}
        placeholder="Add a New Todo"
        onChangeText={changeHandler}
        placeholderTextColor="#ffffff"
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add Task"
        color="#ffffff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 3,
    borderColor: "#ffffff",
    textAlign: "center",
    color: "#ffffff",
  },
});
