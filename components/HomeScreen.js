import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { Filters } from "./Filters";
import { NewTodo } from "./NewTodo";
import { Todos } from "./Todos";

export function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Filters />
        <Todos />
        <NewTodo />
      </SafeAreaView>
    </View>
  );
}
