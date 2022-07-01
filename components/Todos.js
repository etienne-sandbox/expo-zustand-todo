import { Fragment } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useStore } from "../logic/store";
import { Feather } from "@expo/vector-icons";

export function Todos() {
  const filterCompleted = useStore((state) => state.filterCompleted);
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  const filteredTodos = filterCompleted
    ? todos.filter((todo) => !todo.completed)
    : todos;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 10, alignItems: "stretch" }}>
        {filteredTodos.map((todo, index) => (
          <Fragment key={todo.id}>
            {index > 0 && <View style={{ height: 5 }} />}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableHighlight
                onPress={() => toggleTodo(todo.id)}
                underlayColor="#BBDEFB"
                style={styles.touchable}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Feather
                    name={todo.completed ? "check-circle" : "circle"}
                    size={24}
                    color="#1E88E5"
                  />
                  <Text style={{ fontSize: 20, marginHorizontal: 10, flex: 1 }}>
                    {todo.title}
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  Alert.alert(
                    "Supprimer ce todo",
                    "Êtes-vous sûr de vouloir supprimer ce todo ?",
                    [
                      { text: "Annuler", style: "cancel" },
                      {
                        style: "destructive",
                        text: "Supprimer",
                        onPress: () => {
                          removeTodo(todo.id);
                        },
                      },
                    ]
                  );
                }}
                underlayColor="#FFCDD2"
                style={{ borderRadius: 5, padding: 10 }}
              >
                <Feather name="trash-2" size={24} color="#E53935" />
              </TouchableHighlight>
            </View>
          </Fragment>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 1,
  },
});
