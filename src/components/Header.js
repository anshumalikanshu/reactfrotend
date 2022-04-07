import React from 'react'
import PropTypes from 'prop-types'
import { Navbar,Nav , Container, NavDropdown ,Row} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header(props) {
  return (
    <header>
      

      <Navbar bg="dark" variant = "dark" expand="lg" collapseOnSelect>
  <Container>
  <LinkContainer to="/">
    <Navbar.Brand >My Shop</Navbar.Brand>
</LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to ="/"> 
        <Nav.Link >Home</Nav.Link>
      </LinkContainer>
        <LinkContainer to="/cart">
        <Nav.Link > <i class="fas fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
        <Nav.Link ><i className='fas fa-user'></i> Login</Nav.Link>
        </LinkContainer>

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

Header.propTypes = {}

export default Header
