import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarMenu({ items }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {items.map((item) => (
                        <Nav.Link href={item.url} key={item.id}>
                            {item.label}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarMenu;
