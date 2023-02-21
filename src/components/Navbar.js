import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarAirBus() {
  const logout=()=>{
    localStorage.removeItem("name");
    window.location.reload(false);
  }
  return (
    <Navbar bg="warning"  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-2">Airbus</Navbar.Brand>
        <image src="image/airbusLogo.png"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" >Home</Nav.Link>
            <Nav.Link href="#action2" >Pricing</Nav.Link>
            
          </Nav>
            <Button variant="outline-success" onClick={logout}>Logout</Button
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarAirBus;