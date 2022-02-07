import React, { useState } from "react";
import { Text, StyleSheet, Button, FlatList, View } from "react-native";

import AddTask from "../components/addTask";
import TodoItem from "../components/todoItem";

const HomepageScreen = (props) => {
  const [todos, setTodos] = useState([
    { text: "Open", key: "1" },
    { text: "Working On", key: "2" },
    { text: "Completed", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AddTask submitHandler={submitHandler} />
        <Button
          title="Sign out"
          onPress={() => {
            props.navigation.navigate("LogIn");
          }}
          style={styles.buttonstyle}
        />
        <Text style={styles.orders}>Tap to remove a todo</Text>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f4f4f",
  },
  content: {
    flex: 1,
    width: "100%",
    marginTop: 150,
    padding: 40,
    marginVertical: 20,
    backgroundColor: "#2f4f4f",
    color: "#ffffff",
  },
  orders: {
    textAlign: "center",
    marginTop: "10%",
    textTransform: "uppercase",
    color: "#ffffff",
  },
  list: {
    marginTop: 20,
  },
  buttonstyle: {
    color: "#000000",
  },
});

export default HomepageScreen;
