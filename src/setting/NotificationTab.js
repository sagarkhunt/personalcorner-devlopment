import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import avatarImg from "../assets/images/wallet/tableItem.png";

const NotificationTab = () => {
  const inputsData = [
    {
      label: "TRANSACTION EMAIL",
      text: "Receive emails for sales, auction bids etc.",
    },
    {
      label: "ANNOUNCEMENT EMAIL",
      text: "Receive email about product update, newest features and improvement.",
    },
    {
      label: "SOCIAL EMAIL",
      text: "Receive email about personal corner events and athlete suggestion.",
    },
    {
      label: "recommendation EMAIL",
      text: "Receive email about recommended NFTs and lastest gears.",
    },
    {
      label: "TRANSACTION EMAIL",
      text: "DANIEL",
    },
    {
      label: "SOCIAL EMAIL",
      text: "Receive email about personal corner events and athlete suggestion.",
    },
    {
      label: "recommendation EMAIL",
      text: "Receive email about recommended NFTs and lastest gears.",
    },
  ];

  return (
    <div className="accountTab">
      <h4 className="mt-5 mainHeading">EMAIL NOTIFICATION</h4>
      <div className="darkBlueBg">
        <Form>
          <Row className="mt-2">
            {inputsData.map((data, i) => (
              <Col xxl={6} xl={12} key={i}>
                <Form.Group className="mb-3 customInput">
                  <div className="customFormGroup">
                    <Form.Label className="mb-1 customLabel2">
                      {data.label}
                    </Form.Label>
                    <Form.Text className="">{data.text}</Form.Text>
                  </div>
                  <div className="ms-4 customeToggleBtn">
                    <input id={i + 1} hidden type="checkbox" />
                    <label htmlFor={i + 1} className="text-white"></label>
                  </div>
                </Form.Group>
              </Col>
            ))}
          </Row>
        </Form>
        <div></div>
      </div>
    </div>
  );
};

export default NotificationTab;
