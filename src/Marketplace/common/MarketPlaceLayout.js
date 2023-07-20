import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MarketPlaceLayout = () => {
  return (
    <Fragment>
      <div className="LayoutBG athleteSection">
        <Container fluid className="position-relative">
          <Header />
          <Outlet />
        </Container>
      </div>
    </Fragment>
  );
};

export default MarketPlaceLayout;
