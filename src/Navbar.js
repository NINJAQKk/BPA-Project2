import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
function Navbar() {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
        </NavLink>
          <NavLink to="/tutor" activeStyle>
            Add to Wishlist
          </NavLink>
          <NavLink to="/" activeStyle>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScqulwaFGvMx2efLTNftSOxXA0kzF7PCIU33vXbCwu-TNe3zA/viewform">Contact Us</a>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;