import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { TouchableOpacity, View } from "react-native";

const UserInput = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  console.log(props);

  return (
    <KeyboardAvoidingView style={styles.containerTop} behavior="padding">
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Create an account</Text>
        <TextInput
          placeholder="Email/User ID"
          placeholderTextColor="#ffffff"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          required
        />
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#ffffff"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#ffffff"
          value={confirmPass}
          onChangeText={(text) => setConfirmPass(text)}
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text sytle={[styles.buttonText, styles.buttonOutline]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text sytle={[styles.buttonText, styles.buttonOutlineText]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: "visible",
    marginTop: 100,
    flex: 1,
    height: 200,
    margin: 12,
    marginLeft: 35,
    maxWidth: 300,
  },
  input: {
    borderWidth: 3,
    padding: 20,
    // backgroundColor: "#ffffff",
    borderRadius: 50,
    borderColor: "#9acd32",
    color: "#ffffff",
    alignItems: "center",
    margin: 5,
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 50,
    marginLeft: 15,
  },
  buttonContainer: {
    marginTop: 30,
    width: 290,
    backgroundColor: "#9acd32",
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {},
});

export default UserInput;
