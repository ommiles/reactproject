// this is where we're going to store our jsx and content

import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    MISE
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about">About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="services">Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="process">Our Process</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="contact">Give Us a Shout</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar
