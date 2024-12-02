import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function DropdownBtn() {
    return (
       <div className="dropdown">
           <Navbar variant="dark" bg="transparent" expand="lg" style={{height:"3.3rem"}}>
               <Container fluid>
                       <Nav>
                           <NavDropdown
                               id="nav-dropdown-dark-example"
                               title="My profile"
                               menuVariant="dark"
                           >
                               <NavDropdown.Item href="account">My profile</NavDropdown.Item>
                               <NavDropdown.Divider />
                               <NavDropdown.Item href="login">Sign in</NavDropdown.Item>
                           </NavDropdown>
                       </Nav>
               </Container>
           </Navbar>
       </div>
    );
}

export default DropdownBtn;