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
import { withNavigation } from "react-navigation";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHVbM0oG57TC2IiI3nZj866K33lJG736_jszKr964SBoF6gNBfpV8omUBKUo5a7KTG1o&usqp=CAU",
};

const LoginInput = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView style={styles.containerTop} behavior="padding">
        <ScrollView style={styles.container}>
          <Text style={styles.text}>Login</Text>
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate({ routeName: "TaskManager" });
              }}
              style={styles.button}
            >
              <Text sytle={[styles.buttonText, styles.buttonOutline]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: "visible",
    marginTop: 130,
    flex: 1,
    height: 200,
    margin: 12,
    marginLeft: 35,
    maxWidth: 300,
  },
  image: {
    flex: 1,
    justifyContent: "center",
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

export default LoginInput;
