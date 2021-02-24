import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
    </div>
  ));
}

export default Todo;
