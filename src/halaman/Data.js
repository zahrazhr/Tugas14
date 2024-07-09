import React, { useState, useEffect, useMemo } from 'react';
import { Table, Container, Row, Col, Form } from 'react-bootstrap';

const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Data Table</h1>
          <Form.Group controlId="filter">
            <Form.Label>Filter by Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter text to filter"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
          </Form.Group>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Data;
