/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Nav, Navbar} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((_state) => _state.auth);

  return (
    <header className="w-100">
        <Navbar bg="light" expand="xl" className="navMainNew w-100">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bgLight" />
            <Navbar.Collapse id="basic-navbar-nav" className="menuMobile">
              <Nav className="">
                <NavLink  to={"/Info"}>
                  INFO
                </NavLink>
                <NavLink to={"/Gear"}>
                  GEAR
                </NavLink>
                <NavLink to={"/Utilities"}>
                  UTILITIES
                </NavLink>
                <NavLink to={"/Offers"}>
                  OFFERS
                </NavLink>
                <NavLink to={"/SalesHistory"}>
                  SALES HISTORY
                </NavLink>
                <NavLink to={"/Stats"}>
                  STATS
                </NavLink>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
