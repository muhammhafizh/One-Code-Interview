import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Auth } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const { token, name, id } = Auth.isAuthorization();
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand className="fw-bolder">Cinta Coding</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {token && (
              <>
                <Nav.Link href="/home">Posts</Nav.Link>
              </>
            )}
          </Nav>
          {token ? (
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title={`Welcome, ${name}`}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href={`/profile/${id}`}>
                  Detail Profile
                </NavDropdown.Item>

                <Button
                  variant="link"
                  className="text-decoration-none text-danger"
                  onClick={() => Auth.signOut(navigate)}
                >
                  Log Out
                </Button>
              </NavDropdown>
            </Nav>
          ) : (
            <a href="/Login">
              <Button className="btn text-light rounded-pill link px-4">
                Login
              </Button>
            </a>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
