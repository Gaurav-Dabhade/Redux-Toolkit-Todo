import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeTodo, toggleTodo } from '../features/todo/todoSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <Container key={todo.id} style={{ marginBottom: '10px' }}>
            <Row>
              <Col xs={1}>
                <input
                  type='checkbox'
                  checked={todo.checked}
                  onChange={() => handleCheckboxChange(todo.id)}
                  style={{ marginRight: '10px' }}
                />
              </Col>
              <Col xs={10} className='text-start'>
                <strong
                  style={{
                    textDecoration: todo.checked ? 'line-through' : 'none',
                    fontSize: '20px',
                  }}
                >
                  {todo.text}
                </strong>
              </Col>
              <Col xs={1}>
                <Button
                  style={{ marginLeft: '10px' }}
                  variant='danger'
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  X
                </Button>
              </Col>
            </Row>
          </Container>
        ) : null
      )}
    </>
  );
}

export default Todos;
