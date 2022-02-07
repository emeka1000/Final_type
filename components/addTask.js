import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  View,
} from "react-native";

export default function AddTask({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        styles={styles.input}
        placeholder="NewTodo"
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add Task"
        color="#7fff00"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
  },
});
