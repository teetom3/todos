// Sélectionne toutes les tâches
export const selectTodos = (state) =>
  state.todos.filter((todo) => !todo.completed);
// Sélectionne uniquement les tâches terminées
export const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.completed)
);
