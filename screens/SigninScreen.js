import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import UserInput from "../components/LoginInput";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHVbM0oG57TC2IiI3nZj866K33lJG736_jszKr964SBoF6gNBfpV8omUBKUo5a7KTG1o&usqp=CAU",
};

const SignInScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <UserInput style={styles.container} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "visible",
    marginTop: 120,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    marginVertical: -15,
    marginHorizontal: 50,
  },
  textSmall: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 50,
    marginBottom: 60,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 30,
    marginLeft: 40,
    width: 290,
    backgroundColor: "#9acd32",
    borderRadius: 50,
    height: 50,
    textAlign: "center",
    justifyContent: "center",
  },
});

export default SignInScreen;
