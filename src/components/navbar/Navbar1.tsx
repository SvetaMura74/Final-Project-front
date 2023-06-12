import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch } from "react-icons/bs";
import { VscSignIn } from "react-icons/vsc";
import { MdOutlineAppRegistration } from "react-icons/md";
import {BiLogOut} from "react-icons/bi"
import myLogo from "../../images/book_and_cup.jpg";
import "./Navbar1.scss";
import AuthContext from "../../context/AuthContext";
import {useContext} from 'react'
import { useNavigate } from "react-router-dom";


const Navbar1=() =>{
  const {isLoggedIn}=useContext(AuthContext)
  const nav=useNavigate()
  const log_out=()=>{
    localStorage.clear()
    nav("/signin")
  }
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
            <Nav.Link href="/search">
              Search <BsSearch />
            </Nav.Link>
            {!isLoggedIn && (
              <Nav.Link href="/signin">
                Sign In
                <VscSignIn />
              </Nav.Link>
            )}
            {!isLoggedIn && (
              <Nav.Link href="/signup">
                Sign Up
                <MdOutlineAppRegistration />
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link href="/signin" onClick={log_out}>
                Log Out
                <BiLogOut />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
