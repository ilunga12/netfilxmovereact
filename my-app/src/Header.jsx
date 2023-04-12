import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
    return (
        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">NETFILX</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className ="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href='/home'>Home</Nav.Link>
                <Nav.Link href='/latestmovies'>LatestMovie</Nav.Link>
                <Nav.Link href='/trendingmovie'>TrendingMovie</Nav.Link>
                <Nav.Link href='/comedymovie'>ComedyMovie</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
 

export default Header