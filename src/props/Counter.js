import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Container className="mt-4">
    <Row>
        <Col>
            <h2>Counter: {count}</h2>
            <Button variant="primary" onClick={() => setCount(count + 1)}>
            Increment
            </Button>
        </Col>
    </Row>
    </Container>
  );
};

export default Counter;
