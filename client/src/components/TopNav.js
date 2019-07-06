import React from "react";
import Navbar from 'react-bootstrap/Navbar';

function TopNav(){
  return (
    <Navbar className="mb-3 rounded" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {' React Bootstrap'}
      </Navbar.Brand>
    </Navbar>
  );
}

export default TopNav;