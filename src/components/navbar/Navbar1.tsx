import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsSearch} from 'react-icons/bs'
import {VscSignIn} from 'react-icons/vsc'
import myLogo from "../../images/book_and_cup.jpg";
import './Navbar1.scss'

function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={myLogo} alt="book logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="/search">Search <BsSearch/></Nav.Link>
            <Nav.Link href="signin">
              Sign In<VscSignIn/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;