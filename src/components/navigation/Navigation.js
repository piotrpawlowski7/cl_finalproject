import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./Navigation.scss";


function Navigation() {
    return (
    <>
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SiteFinder</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/howto">How to use</Nav.Link>
      <Nav.Link href="/add">Add new</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  {/* <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/howto" component={Howto} />
         <Route path="/add" component={AddNew} />
         <Route path="/about" component={About} />
         <Route component={NotFound} />
       </Switch> */}
  </Router>
    </>
    );
}
export default Navigation;