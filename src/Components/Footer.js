import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
    <Container>
      <Row>
        <Col>
          <h5>Footer Content</h5>
          <p>This is a sample footer for your website.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer