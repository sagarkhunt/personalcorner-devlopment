/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container } from "react-bootstrap";
import { DiscordIcon, InstagramIcon, TwitterIcon } from "./Icons";
import { NavLink } from "react-router-dom";
import logoFooter from "../assets/images/logoFooter.png";

const Footer = () => {
  return (
    <footer className="customFooter">
      <Container>
        <div className="d-flex align-items-center justify-content-between pt-3 pb-2 top flex-wrap">
          <div className="m-3 ms-0 logo">
            <a href="#">
              <div className="d-flex align-items-center gap-2">
                <img src={logoFooter} alt="" height={"60px"} />
                {/* <h2 className="mb-0 logoName">Personal Corner</h2> */}
              </div>
            </a>
          </div>
          <div className="d-flex align-items-center flex-wrap gap-5 links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/Marketplace"}>Marketplace</NavLink>
            <NavLink to={"/"}>Collection</NavLink>
            <NavLink to={"/"}>Community</NavLink>
            <NavLink to={"/Events"}>Events</NavLink>
          </div>
        </div>
        <hr className="text-white my-2" />
        <div className="d-flex align-items-center justify-content-between pt-2 pb-3 bottom">
          <p className="mb-0 copyRightLine">
            {" "}
            &copy; Personal Corner 2021-2022. All Rights Reserved.
          </p>
          {/* <div className="d-flex align-items-center gap-2 socialIcons">
            <a href="#" target="_BLANK">
              <DiscordIcon />
            </a>
            <a href="#" target="_BLANK">
              <InstagramIcon />
            </a>
            <a href="#" target="_BLANK">
              <TwitterIcon />
            </a>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
