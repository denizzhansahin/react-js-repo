import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



export default class Navi extends React.Component {

    render() {
      return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
            <NavbarToggler  className="mr-2" />
            
              <Nav navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
              </Nav>
            
          </Navbar>
        </div>
      );
    }
  }