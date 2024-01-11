import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

const NavigationBar = () => {
    
    return <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img
          src="./logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="/">Молитвеник</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/prayers">Молитви</Nav.Link>
          <Nav.Link href="/formulas">Формули</Nav.Link>
          <Nav.Link href="/prayerorders">Наряди</Nav.Link>
          <Nav.Link href="/songs">Песни</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form className="d-flex mt-2">
        <FormControl
          type="search"
          placeholder="Молитва, формула, песен..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Търси</Button>
      </Form>
    </Container>
  </Navbar>
}   

export default NavigationBar;