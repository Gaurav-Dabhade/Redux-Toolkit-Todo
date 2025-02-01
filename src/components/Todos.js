import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeTodo, toggleTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleCheckboxChange = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <>
      <h3>
        <strong>Todos</strong>
      </h3>
      {todos.map((todo) =>
        todo.id !== 1 ? (
          <li
            key={todo.id}
            style={{ marginBottom: '10px', listStyleType: 'none' }}
          >
            <input
              type='checkbox'
              checked={todo.checked}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <strong
              style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}
            >
              {todo.text}
            </strong>

            {/* <button onClick={() => dispatch(removeTodo(todo.id))}>X</button> */}
            <Button
              style={{ marginLeft: '10px' }}
              variant='danger'
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </Button>
          </li>
        ) : null
      )}
    </>
  );
}

export default Todos;
