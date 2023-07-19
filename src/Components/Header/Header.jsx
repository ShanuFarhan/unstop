import React, { useEffect, useState } from 'react'
import { auth, provider } from "../../Firebase/config"
import { signInWithPopup } from 'firebase/auth'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
const Header = () => {
  const [value, setValue] = useState("")
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(false), 3000); // Hide navbar after 3 seconds

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleMouseMove = () => {
    setShowNavbar(true);
  };

  const handleMouseLeave = () => {
    setShowNavbar(false);
  };
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user.email);
      setValue(data.user.email)
      localStorage.getItem("email", data.user.email)
    })
  }
  useEffect(() => {
    setValue(localStorage.getItem("email"))
  })
  return (
   
    <>{showNavbar && (
       <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">untitled</Navbar.Brand>
      
        <div class="collapse navbar-collapse" id="navbarNav">
          <button onClick={handleClick} class="btn btn-primary">Login or Create acount</button>
        </div>
        <Nav className="ml-auto">
          <Nav.Item>
            {/* <Icon icon="fullscreen" onClick={handleFullScreen} className="fullscreen-icon"/> */}
          </Nav.Item>
        </Nav>
        </Navbar>
    )}
    </>
  )
}

export default Header
