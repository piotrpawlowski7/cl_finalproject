import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./Navigation.scss";


function Navigation() {
    return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SiteFinder</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">How to use</Nav.Link>
      <Nav.Link href="#add">Add new</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </>
    );
}
export default Navigation;