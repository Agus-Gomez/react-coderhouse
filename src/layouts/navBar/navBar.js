import {Navbar, Container, Nav, Form,} from 'react-bootstrap'
import {Outlet, Link} from 'react-router-dom';
import CartWidget from '../../components/cartWidget';

function NavBar() {
  return ( 
  <>
  <Navbar className='navBg' variant='light' expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link} to='/'>Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/products'>Productos</Nav.Link>
        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
      </Nav>
      <Form className="d-flex">
      <Nav.Link as={Link} to='/cart'><CartWidget/></Nav.Link>
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

export default NavBar;
