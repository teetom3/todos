import { useSelector } from "react-redux";
import { selectTodos, selectCompletedTodos } from "../redux/selectors";
const TodoList = () => {
  const todos = useSelector(selectTodos); // Récupération des tâches
  const completedTodos = useSelector(selectCompletedTodos); // Récupération des tâches terminées
  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <h2>Tâches terminées</h2>
      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
