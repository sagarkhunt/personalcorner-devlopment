import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
// --- images --- //
import authBgImg from "../assets/images/bg.png";
// ---- icons --- //
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";


const SupportForm = () => {

  return (
    <main style={{ backgroundImage: "url(" + authBgImg + ")" }} className="authPage">
      <div className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xl={7} lg={8} md={11} sm={12}>
              <div className="mb-4 authFormSection">

                <div className="headArea d-flex justify-content-between align-items-center">
                  <div className="">
                    <h1 className="title mb-0">Support Form</h1>
                    <p className="content mb-0">Hi, how can we help you?</p>
                  </div>
                  <div className="">
                    <NavLink to={"/review-and-ratings"} className="p-0 btn btnClose">
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 72 72" width="40" height="40" fill="none">
                        <path d="M25.2422 51L20.9996 46.7573L46.5005 21.2573L50.743 25.5001L25.2422 51Z" fill="#FFEBEE" />
                        <path d="M51.0371 46.416L46.7945 50.6587L21.1569 25.022L25.3994 20.7792L51.0371 46.416Z" fill="#FFEBEE" />
                        </svg>
                    </NavLink>
                  </div>
                </div>
                <Formik>                  
                    <Form className="authForm p-md-4 p-2">
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text"  placeholder="DANIEL VLOSKY" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text"  placeholder="DANIELVLOSKY@GMAIL.COM" />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Mail Subject</Form.Label>
                        <Form.Control type="text"  placeholder="GAMEPLAY NOT WORKING WELL" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" name="" as="textarea" placeholder="Write your support message here" style={{ height: '185px' }}/>
                      </Form.Group>

                      <Button className="skyLightBorderedBtn mt-4 w-100 justify-content-center" variant="">SEND MESSAGE</Button>                      
                    </Form>                  
                </Formik>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default SupportForm;
