import { Navbar, Container, Nav, Form, Badge, NavDropdown, } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import CartWidget from "../../Images/CartIcon";
import { useCartContext } from "../../contexts/CartContext";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  const { CartQuantity, cartList } = useCartContext();

  return (
    <>
      <Navbar className="navBg" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="box logo">
            🐈‍⬛
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/categorias/Botellas">
                  Botellas/Termos
                </NavDropdown.Item>
                <NavDropdown.Item href="/categorias/Lamparas">
                  Lámparas de noche
                </NavDropdown.Item>
                <NavDropdown.Item href="/categorias/Tazas">
                  Tazas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products">Ver todo</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              {cartList.length !== 0 ? (
                <LinkContainer to="/cart">
                  <button>
                    <CartWidget />
                    <Badge bg="primary">
                      {cartList.length === 0 ? 0 : CartQuantity()}
                    </Badge>
                  </button>
                </LinkContainer>
              ) : (
                <></>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default NavBar;
