import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Collapse,
  Modal,
  Form,
} from "react-bootstrap";
// -- images --
import mailSampleImg from "../assets/images/mailSampleImg.png";

const Notifications = () => {
  // const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
        <>
      <div className="inboxSearch">
        <button class="grayBtn">
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.07994 0.853516C4.31942 0.853516 0.439941 4.73299 0.439941 9.49352C0.439941 14.254 4.31942 18.1335 9.07994 18.1335C10.8184 18.1335 12.4362 17.6122 13.7937 16.7235L19.8218 22.7516L21.8581 20.7154L15.9078 14.7651C17.039 13.3039 17.7199 11.4782 17.7199 9.49352C17.7199 4.73299 13.8405 0.853516 9.07994 0.853516ZM9.07994 2.77352C12.8029 2.77352 15.7999 5.77052 15.7999 9.49352C15.7999 13.2165 12.8029 16.2135 9.07994 16.2135C5.35695 16.2135 2.35994 13.2165 2.35994 9.49352C2.35994 5.77052 5.35695 2.77352 9.07994 2.77352Z" fill="#4A5662" />
          </svg>
        </button>
      </div>

      <div className="col-12 col-lg-5">
        <hr />
      </div>

      <Row>
        <Col xxl={5} xl={5} lg={12} md={12}>
          
        <div className="list mb-2">
            <div className="row">
              <div className="col-auto">
                <div className="symbol">DV</div>
              </div>
              <div className="col">
                <div className="details">
                  <div className="title">Daniel Vlosky <span>placed a</span> $50 bid <span>for</span> Trevon Diggs #15272</div>
                  <div className="date">Nov 12, 2021 at 04:12 AM</div>
                  <p className="mb-0">Hey Daniel, you’ve been an active contributor to the Personal Corner Ecosystem. To reward you for your hardwork, you have won a ticket to the Personal corner signing in Las Vegas.....</p>
                </div>
              </div>
            </div>
          </div>

          <div className="list mb-2">
            <div className="row">
              <div className="col-auto">
                <div className="symbol">DV</div>
              </div>
              <div className="col">
                <div className="details">
                  <div className="title">Daniel Vlosky <span>placed a</span> $50 bid <span>for</span> Trevon Diggs #15272</div>
                  <div className="date">Nov 12, 2021 at 04:12 AM</div>
                  <p className="mb-0">Hey Daniel, you’ve been an active contributor to the Personal Corner Ecosystem. To reward you for your hardwork, you have won a ticket to the Personal corner signing in Las Vegas.....</p>
                </div>
              </div>
            </div>
          </div>

          <div className="list mb-2">
            <div className="row">
              <div className="col-auto">
                <div className="symbol">DV</div>
              </div>
              <div className="col">
                <div className="details">
                  <div className="title">Daniel Vlosky <span>placed a</span> $50 bid <span>for</span> Trevon Diggs #15272</div>
                  <div className="date">Nov 12, 2021 at 04:12 AM</div>
                  <p className="mb-0">Hey Daniel, you’ve been an active contributor to the Personal Corner Ecosystem. To reward you for your hardwork, you have won a ticket to the Personal corner signing in Las Vegas.....</p>
                </div>
              </div>
            </div>
          </div>
          <div className="list mb-2">
            <div className="row">
              <div className="col-auto">
                <div className="symbol">DV</div>
              </div>
              <div className="col">
                <div className="details">
                  <div className="title">Daniel Vlosky <span>placed a</span> $50 bid <span>for</span> Trevon Diggs #15272</div>
                  <div className="date">Nov 12, 2021 at 04:12 AM</div>
                  <p className="mb-0">Hey Daniel, you’ve been an active contributor to the Personal Corner Ecosystem. To reward you for your hardwork, you have won a ticket to the Personal corner signing in Las Vegas.....</p>
                </div>
              </div>
            </div>
          </div>
        </Col>

      </Row>
    </>
    </>
  );
};

export default Notifications;
