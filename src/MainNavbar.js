import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const styles = {
  navBarStyle: {
    backgroundColor: '#008080f0',
    boxShadow: "0px 10px 0px 0px rgba(59, 179, 149, 0.8)",
    zIndex: 1000,
    fontSize: "1.5rem",
    marginBottom: "10px"
  },
  navBarBrandStyle: {
    color: '#ffffff',
    fontFamily: "Geo",
    fontSize: "2rem"
  }
}

class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <Navbar dark expand="md" style={styles.navBarStyle}>
        <Link to='/'>
          <NavbarBrand style={styles.navBarBrandStyle}>
            2020 MakeNTU : InnOvaTion
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar style={{fontFamily: "Geo"}}>
            <NavItem>
              <NavLink href="/#about">About</NavLink>
            </NavItem>
            {/*
            <NavItem>
              <NavLink href="/#schedule">Schedule</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/#faq">FAQ</NavLink>
            </NavItem>
            */}
            <NavItem>
              <NavLink href="/#sponsors">Sponsors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#contact">Contact</NavLink>
            </NavItem>
            {/*
            <NavItem>
              <Link to='/login'>
                <NavLink>Participant Page</NavLink>
              </Link>
            </NavItem>
            */}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
