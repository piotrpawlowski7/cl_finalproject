import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./Navigation.scss";

function Navigation() {
  // const searchSpace = (event) => {
  //   let keyword = event.target.value;
  //   this.setState({ search: keyword });
  // };

  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Sofia</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/howto">How to use</Nav.Link>
            <Nav.Link href="/add">Add new</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search soon"
              className="mr-sm-2"
              // onChange={(e) => searchSpace(e)}
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        {
        //router switch
        /* <Switch>
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
