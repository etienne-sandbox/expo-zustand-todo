import { Switch, Text, View } from "react-native";
import { useStore } from "../logic/store";

export function Filters() {
  const filterCompleted = useStore((state) => state.filterCompleted);
  const setFilterCompleted = useStore((state) => state.setFilterCompleted);
  const todos = useStore((state) => state.todos);

  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
      <Text style={{ fontSize: 20, flex: 1 }}>
        Hide completed ({completedTodosCount})
      </Text>
      <Switch value={filterCompleted} onValueChange={setFilterCompleted} />
    </View>
  );
}
