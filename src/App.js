import './App.css';
import Todos from './components/Todos';
import PushTodo from './components/PushTodo';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <Row className='w-100'>
        <Col className='d-flex justify-content-center'>
          <div className='text-center'>
            <h1>Learn about Redux Toolkit</h1>
            <PushTodo />
            <Todos />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
