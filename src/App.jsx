import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./redux/toDoSlice";
import { selectTodos, selectCompletedTodos } from "./redux/selectors";
import { Button, Card, CardHeader, Container } from "react-bootstrap";
const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);
  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <Container>
      <Card className="my-4">
        <CardHeader className="p-4 flex flex-col-1">
          <h1>Liste des tâches</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ajouter une tâche..."
          />
          <Button onClick={handleAddTodo}>Ajouter</Button>
        </CardHeader>

        <ul className="list">
          {todos.map((todo) => (
            <li key={todo.id} onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </li>
          ))}
        </ul>
        <h2>Tâches terminées</h2>
        <ul>
          {completedTodos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};
export default App;
