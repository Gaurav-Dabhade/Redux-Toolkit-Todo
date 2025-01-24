import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../features/todo/todoSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PushTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodos(input));
    setInput('');
  };

  return (
    <>
      <Form onSubmit={addTodoHandler}>
        {/* <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /> */}
        <Form.Control
          type='text'
          placeholder='Enter a task'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* <button type='submit'>Add Todo</button> */}
        <Button style={{ marginTop: '10px' }} variant='success' type='submit'>
          Add Todo
        </Button>
      </Form>
    </>
  );
}

export default PushTodo;
