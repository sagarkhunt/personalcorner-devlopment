import React from "react";
import { Form, NavLink, Row } from "react-bootstrap";
import CombinedHeader from "../common/CombinedHeader";
import SideCollepsSection from "./SideCollepsSection";
import EmailListing from "./EmailListing";

const AllNotification = () => {
  return (
    <CombinedHeader>
      <main className="adminPageMainCommon allNotificationPage">
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">Inbox</h2>
          <NavLink className="btnBlue btnEarnWith" to={"/"}>
            Compose Email
          </NavLink>
        </div>

        {/* ------- */}
        <section className="adminCommanPageSection _202020 w-100">
          <div className="headingBlue usersScreenSection border-0">
            <div className="filterPart flex-wrap p-0">
              <div className="leftPart d-flex align-items-center">
                <span className="font18White">1-20 of 300</span>
              </div>
              <div className="searchPart position-relative mt-lg-3 mt-xl-0">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="searchField"
                />
              </div>
            </div>
          </div>
          <Row>
            <div className="d-flex">
              <EmailListing />
              <SideCollepsSection />
            </div>
          </Row>
        </section>
        {/* -------- */}
      </main>
    </CombinedHeader>
  );
};

export default AllNotification;
