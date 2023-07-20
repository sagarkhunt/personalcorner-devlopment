import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const GeneralTab = () => {
  return (
    <div className="generalTab">
      <div className="mainTitle">
        <h4 className="mb-0">Business Information</h4>
      </div>
      <div className="area">
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-5 generalInputGroup">
              <Form.Label className="mb-2">Address</Form.Label>
              <Form.Control
                type="text"
                defaultValue={""}
                placeholder={"Address"}
                className="btnDisable"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-5 generalInputGroup">
              <Form.Label className="mb-2">City</Form.Label>
              <Form.Control
                type="text"
                defaultValue={""}
                placeholder={"City"}
                className="btnDisable"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-5 generalInputGroup">
              <Form.Label className="mb-2">Country/ State</Form.Label>
              <Form.Control
                type="text"
                defaultValue={""}
                placeholder={"Country/ State"}
                className="btnDisable"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-5 generalInputGroup">
              <Form.Label className="mb-2">Postal Code</Form.Label>
              <Form.Control
                type="text"
                defaultValue={""}
                placeholder={"Postal Code"}
                className="btnDisable"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-5 generalInputGroup">
              <Form.Label className="mb-2">Selling Location</Form.Label>
              <Form.Control
                type="text"
                defaultValue={""}
                placeholder={"Selling Location"}
                className="btnDisable"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-5 generalInputGroup">
              <Form.Label className="mb-2">Shipping Location</Form.Label>
              <Form.Control
                type="text"
                defaultValue={""}
                placeholder={"Shipping Location"}
                className="btnDisable"
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GeneralTab;
