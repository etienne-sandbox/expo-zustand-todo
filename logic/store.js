import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
  persist(
    (set, get) => {
      return {
        todos: [
          { id: "1", title: "Learn React", completed: true },
          { id: "2", title: "Learn Zustand", completed: true },
          { id: "3", title: "Learn TypeScript", completed: false },
          { id: "4", title: "Learn React Native", completed: false },
        ],
        filterCompleted: true,
        setFilterCompleted: (filterCompleted) => {
          set({ filterCompleted });
        },
        addTodo: (title) => {
          set((prev) => {
            return {
              todos: [
                ...prev.todos,
                { id: Math.random().toString(), title, completed: false },
              ],
            };
          });
        },
        toggleTodo: (id) => {
          set((prev) => {
            return {
              todos: prev.todos.map((todo) => {
                if (todo.id === id) {
                  return { ...todo, completed: !todo.completed };
                }
                return todo;
              }),
            };
          });
        },
        removeTodo: (id) => {
          set((prev) => {
            return {
              todos: prev.todos.filter((todo) => todo.id !== id),
            };
          });
        },
      };
    },
    {
      name: "todos",
      version: 2,
      getStorage: () => AsyncStorage,
    }
  )
);
