import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Pagination,
  InputGroup
} from "react-bootstrap";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
// -- images --

import IconMetroImage from "../../src/assets/images/IconMetro-image.png";
import AddDescription from "../../src/assets/images/AddDescription.png";
import CombinedHeader from "./common/CombinedHeader";

const AdminAddEvent = () => {
  return (
    <CombinedHeader>
      <main className="adminPageMainCommon">
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">Add Events</h2>
          <button className="btnBlue btnEarnWith">Save Event</button>
        </div>

        {/* ------- */}
        <section className="adminCommanPageSection w-100">

          <Row>
            <Col lg={9}>
              <div className="headingBlue">
                <h3 className="m-0">General Information</h3>
              </div>
              <div className="adminCommanPageContent p-4">
                <Row className="mt-4">
                  <Col lg={12}>
                    <Form.Group className="mb-4">
                      <Form.Label className="label">Event Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Personal Corner Signing Experience"
                        className="InputField"
                      />
                    </Form.Group>
                  </Col>

                  <Row className="mt-4">
                    <Col lg={4} md={6} sm={12}>
                      <Form.Group className="mb-4">
                        <Form.Label className="label">Event Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="25/9/2022"
                          className="InputField datepickerInput"
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                      <Form.Group className="mb-4">
                        <Form.Label className="label">Event Time</Form.Label>
                        <Form.Control
                          type="time"
                          placeholder="1pm PST - 4pm PST"
                          className="InputField datepickerInput"
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                      <Form.Group className="mb-4">
                        <Form.Label className="label">After Party</Form.Label>
                        <Form.Control
                          type="time"
                          placeholder="8:30pm PST - 2pm PST"
                          className="InputField datepickerInput"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Col lg={12}>
                    <Form.Group className="mb-4">
                      <Form.Label className="label">Add Description</Form.Label>
                      <div><img src={AddDescription} className="w-100" /></div>
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <div className="p-4">
                <button class="btnBlue-sm btnEarnWith">Save Event</button>
              </div>
            </Col>

            <Col lg={3}>
              <div className="addAttributesPart h-100">
                <div className="detailsPart">
                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Choose First Package</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Commemorative Package"
                          className="InputField"
                        />
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Choose Second Package</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="VIP Package"
                            className="InputField"
                          />
                    </Form.Group>
                  </Col>

                </div>

              </div>
            </Col>

          </Row>


        </section>
        {/* -------- */}
      </main>
    </CombinedHeader>
  );
};

export default AdminAddEvent;
