import React, { useState, useEffect } from 'react';

function useTodos() {
  const [todo, settodo] = useState([]);

  useEffect(() => {
    setInterval(()=>{
    fetch("http://localhost:3000/todos", {
      method: "GET"
    })
    .then(response => response.json())
    .then(data => {
      settodo(data);
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
  },1000)}, []);

  return todo;
}

function MediumTodo() {
  const todos = useTodos();

  return (
    <div>
      {
        todos.map((todo, index) => {
          return (
            <div key={index}>
              <h3>{todo.title}</h3>
              <h4>{todo.description}</h4>
              <h4>hello world</h4>
            </div>
          );
        })
      }
    </div>
  );
}

export default MediumTodo;
