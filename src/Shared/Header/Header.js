import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import logo from '../../images/logo.png';
import { FaUser } from 'react-icons/fa';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // providerLogin
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">News</Nav.Link>
            <Nav.Link href="#action2">Destination</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Your Destination"
                className="me-3"
                aria-label="Search"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <>
          <div className='d-flex ms-5'>
            {
              user?.uid ?
                <div className='me-2'>
                  <span>{user?.displayName}</span>
                  <Button onClick={handleLogOut} variant="primary" type="submit">
                    LogOut
                  </Button>
                </div>
                :
                <div className='me-2'>
                  <Link className='me-2 bg-warning text-white p-2 m-5' to="/login">Login</Link>
                  <Link className='bg-warning text-white p-2' to="/register">Register</Link>
                </div>

            }
            <div>
              <Link to="/profile">
                {user?.photoURL ?
                  <Image
                    style={{ height: '30px' }}
                    roundedCircle
                    src={user?.photoURL}>
                  </Image>
                  : <FaUser></FaUser>
                }
              </Link>
            </div>
          </div>


        </>

      </div>
    </Navbar>
  );
};

export default Header;