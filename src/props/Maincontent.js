import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Maincontent = ({ title, subtitle, buttonText }) => {
  const [buttonTextState, setButtonTextState] = useState(buttonText);

  const handleClick = () => {
    setButtonTextState('Tugas 14 selesai hehe!');
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Button variant="primary" onClick={handleClick}>{buttonTextState}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Maincontent;
