import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Outlet, Link} from 'react-router-dom';
import CartWidget from '../../components/cartWidget';

function navBar() {
  return( 
  <>
  <Navbar className='navBg' variant='dark' expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link} to='/'>Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/about'>About</Nav.Link>
        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
        <Nav.Link as={Link} to=''> <CartWidget/></Nav.Link>
        
        
      
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

<section>
    <Outlet></Outlet>
</section>

  </>
  );
};

export default navBar;
