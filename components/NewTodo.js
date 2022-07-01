import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useStore } from "../logic/store";

export function NewTodo() {
  const [text, setText] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <TextInput
          placeholder="New Todo"
          style={styles.input}
          value={text}
          onChangeText={setText}
          onSubmitEditing={() => {
            addTodo(text);
            setText("");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    backgroundColor: "white",
    zIndex: 10,
  },
  input: {
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#90A4AE",
  },
});
