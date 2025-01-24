import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <h3>
        <strong>Todos</strong>
      </h3>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: '10px' }}>
          <strong>{todo.text}</strong>

          {/* <button onClick={() => dispatch(removeTodo(todo.id))}>X</button> */}
          <Button
            style={{ marginLeft: '10px' }}
            variant='danger'
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </Button>
        </li>
      ))}
    </>
  );
}

export default Todos;
