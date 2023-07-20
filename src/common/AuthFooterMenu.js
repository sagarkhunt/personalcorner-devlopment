import React from "react";
import { NavLink } from "react-router-dom";

const AuthFooterMenu = () => {
  return (
    <div className="menuBottomAuth">
      <NavLink className="m-2 link" to={"#"}>
        About
      </NavLink>
      <span className="m-2 part"></span>
      <NavLink className="m-2 link" to={"#"}>
        Marketplace
      </NavLink>
      <span className="m-2 part"></span>
      <NavLink className="m-2 link" to={"/nfts"}>
        Collection
      </NavLink>
      <span className="m-2 part"></span>
      <NavLink className="m-2 link" to={"#"}>
        Community
      </NavLink>
      <span className="m-2 part"></span>
      <NavLink className="m-2 link" to={"#"}>
        Events
      </NavLink>
    </div>
  );
};

export default AuthFooterMenu;
