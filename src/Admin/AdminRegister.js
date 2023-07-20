import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
// --- images --- //
import logoBlack from "../assets/images/logoBlack.png";

const AdminRegister = () => {
  return (
    <main className="adminAuthForm">
      <Container>
        <Row className="justify-content-center">
          <Col xl={6} lg={8} md={10} sm={12}>
            <div className="d-flex justify-content-center mb-4">
              <button className="btnClose">
                <svg
                  id="svg_2"
                  data-name="svg 2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="56.953"
                  height="55.898"
                  viewBox="0 0 56.953 55.898"
                >
                  <defs>
                    <clipPath id="clipPath">
                      <rect
                        id="Background"
                        width="56.953"
                        height="55.898"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="Background-2"
                    data-name="Background"
                    width="56.953"
                    height="55.898"
                    fill="none"
                  />
                  <g id="svg_2-2" data-name="svg 2" clipPath="url(#clipPath)">
                    <path
                      id="Circle"
                      d="M0,26.677A26.677,26.677,0,1,1,26.677,53.354,26.677,26.677,0,0,1,0,26.677Z"
                      transform="translate(1.8 1.097)"
                      fill="none"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Shape"
                      d="M21.311,0,0,21.311"
                      transform="translate(17.821 17.118)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Shape-2"
                      data-name="Shape"
                      d="M0,0,21.311,21.311"
                      transform="translate(17.821 17.118)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </button>
            </div>

            <div className="whiteBG">
              <div className="d-flex justify-content-center">
                <img src={logoBlack} className="img-fluid" />
              </div>
              <h1 className="text-center my-5">CREATE ACCOUNT</h1>

              <Form>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    className="aouthField"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="aouthField"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    className="aouthField"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    className="aouthField"
                  />
                </Form.Group>

                <Row>
                  <Col lg="auto">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="I accept the" />
                    </Form.Group>
                  </Col>
                  <Col lg="auto" className="p-0">
                    <NavLink to="/forgotPassword" className="link">
                      Terms & Conditions
                    </NavLink>
                  </Col>
                </Row>

                <Button type="submit" className="w-100 mt-3 btnBlue rounded-5">
                  Sign Up
                </Button>
                <p className="text-center mt-5">
                  Already have an account?{" "}
                  <NavLink to="/createAccount" className="link">
                    Login
                  </NavLink>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminRegister;
