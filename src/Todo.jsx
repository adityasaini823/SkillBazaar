import { useState, useEffect } from 'react';
// import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch all todos from server
  useEffect(() => {
    setInterval(() => {
      fetch('http://localhost:3000/todos', {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setTodos(data);
        });
    }, 1000);

    return ; // Cleanup on unmount
  }, []);

  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}

function Todo({ id, title, deleteTodo }) {
  return (
    <div>
      {title}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}

export default App;
