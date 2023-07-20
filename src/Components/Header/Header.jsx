import React, { useEffect, useState } from 'react'
import { auth, provider } from "../../Firebase/config"
import { signInWithPopup } from 'firebase/auth'
import { Navbar, Nav } from 'react-bootstrap';
import {FaRegHandPaper} from 'react-icons/fa'
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
      
       <Navbar bg="dark" variant="dark" expand="lg" fixed=''>
        <Navbar.Brand href="">
          <FaRegHandPaper className='handicon' size={20} />
        </Navbar.Brand>
        <Navbar.Brand href="#home">untitled</Navbar.Brand>
        <div class="collapse navbar-collapse" id="navbarNav">
          <button onClick={handleClick} class="btn btn-primary">Login</button>
        </div>
        
            <select className='options'>
              <option  defaultValue>option</option>
              <option value="fit screen">fit screen(100%)</option>
              <option value="">fit width</option>
              <option value="">Show sidebar</option>
              <option value="">show hotspot</option>
              <option value="">Accessability settings</option>
              <option value="">Disable default</option>
            </select>
          
        </Navbar>
    )}
    </>
  )
}

export default Header
