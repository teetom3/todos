import { createSlice } from "@reduxjs/toolkit";
// État initial du store
const initialState = [];
// Création du slice Redux pour les tâches
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Action pour ajouter une tâche
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    // Action pour marquer une tâche comme terminée
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
// Exportation des actions et du reducer
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
