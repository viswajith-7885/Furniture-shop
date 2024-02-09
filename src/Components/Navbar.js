import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
      </Form>
      <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/beds">Beds</Nav.Link>
            <Nav.Link as={Link} to ="/sofas">Sofas</Nav.Link>
          

          
            
           
          
          </Nav>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>
  )
}

export default Header