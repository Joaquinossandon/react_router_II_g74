import { Button, Container, Nav, Navbar } from "react-bootstrap"
import CustomLink from "./CustomLink"
import { useUser } from "../context/UserContext"

function MainNav() {

    const { user, signOut } = useUser()

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/link">Link</CustomLink>
                        {!user
                            ? <CustomLink to="/login">Iniciar sesion</CustomLink>
                            : <Button variant="primary" onClick={() => signOut()}>Cerrar sesión</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav