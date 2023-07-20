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
import pccStoreItemImg from "../assets/images/diggs helmet2.png";
import CollepsSearch from "../inner-pages/common/CollepsSearch";

const gearItems = [
  {
    name: "SIGNED REPLICA HELMET",
    price: "2500 PCC Per Ticket",
  },
  {
    name: "SIGNED REPLICA HELMET",
    price: "2500 PCC Per Ticket",
  },
  {
    name: "SIGNED GAME BALL",
    price: "1000 PCC Per Ticket",
  },
  {
    name: "SIGNED REPLICA JERSEY",
    price: "1500 PCC Per Ticket",
  },
  {
    name: "OFFICIAL DIGGS MERCH",
    price: "1000 PCC Per Ticket",
  },
  {
    name: "SIGNED MINI HELMET",
    price: "750 PCC Per Ticket",
  },
];

const PccStoreTab = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div>
        {/* ----- */}
        <CollepsSearch />
        {/* ------ */}
        <Row className="mt-4 lineUpPage listingAreaMobile">
          {gearItems.map((item, i) => (
            <Col xxl={3} xl={4} lg={4} md={4} sm={6} className="mb-3" key={i}>
              <Card className="position-relative pccStoreCard">
                <Card.Body className="body1">
                  <Card.Text className="mb-1">WALLET BALANCE</Card.Text>
                  <Card.Title className="mb-0">WALLET BALANCE</Card.Title>
                  <div className="iconOuter">
                    <AddCartIcon className={"AddCartIcon"} />
                  </div>
                </Card.Body>
                <Card.Img src={pccStoreItemImg} />
                <Card.Body className="body2 d-flex align-items-center justify-content-between">
                  <Card.Text className="mb-0 me-2 title">IN STOCK:</Card.Text>
                  <Card.Text className="mb-0 content">12/1000</Card.Text>
                </Card.Body>
                <button className="w-100 d-flex align-items-center justify-content-center">
                  <GoldCLetterIcon className={"me-2 GoldCLetterIcon"} />
                  <span>BUY FOR 2500 PCC</span>
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

const GoldCLetterIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.1196 0.550781C8.67717 0.550781 0.0453796 9.03398 0.0453796 19.4766C0.0453796 29.9191 8.67717 38.5508 19.1196 38.5508C29.562 38.5508 38.0454 29.9191 38.0454 19.4766C38.0454 9.03398 29.562 0.550781 19.1196 0.550781Z"
      fill="#FFD400"
    />
    <path
      d="M19.1196 5.00391C11.1484 5.00391 4.4985 11.5054 4.4985 19.4766C4.4985 27.4477 11.1484 34.0977 19.1196 34.0977C27.0908 34.0977 33.5923 27.4477 33.5923 19.4766C33.5923 11.5054 27.0908 5.00391 19.1196 5.00391Z"
      fill="#FF9F00"
    />
    <path
      d="M25.6167 24.7547C25.1983 25.307 24.6878 25.8258 24.0852 26.3112C23.4827 26.7882 22.7965 27.1815 22.0266 27.4911C21.2567 27.7924 20.4157 27.943 19.5035 27.943C18.3738 27.943 17.3696 27.7338 16.4909 27.3154C15.6206 26.8886 14.8884 26.2945 14.2942 25.5329C13.7 24.763 13.2481 23.8634 12.9385 22.8341C12.6289 21.7964 12.4741 20.6709 12.4741 19.4575C12.4741 17.8758 12.7418 16.4616 13.2774 15.2147C13.8214 13.9594 14.608 12.9719 15.6373 12.2522C16.675 11.5242 17.9428 11.1602 19.4408 11.1602C20.6709 11.1602 21.809 11.4238 22.8551 11.951C23.9011 12.4782 24.7129 13.2481 25.2903 14.2607C25.0895 14.4782 24.8259 14.7251 24.4995 15.0013C24.1731 15.2691 23.8384 15.5285 23.4953 15.7795C23.1605 16.0222 22.8718 16.2189 22.6291 16.3695C22.5873 16.2691 22.4952 16.1059 22.353 15.8799C22.2191 15.6456 22.0266 15.4071 21.7756 15.1644C21.5329 14.9134 21.2191 14.7 20.8341 14.5243C20.4575 14.3485 20.0056 14.2607 19.4784 14.2607C19.0265 14.2607 18.6039 14.3694 18.2106 14.587C17.8257 14.8046 17.4867 15.1268 17.1939 15.5536C16.9093 15.9804 16.6834 16.5034 16.516 17.1227C16.357 17.7336 16.2775 18.4365 16.2775 19.2315C16.2775 19.9428 16.3486 20.6123 16.4909 21.2399C16.6332 21.8676 16.8382 22.4199 17.106 22.8969C17.3821 23.3739 17.7169 23.7463 18.1102 24.0141C18.5035 24.2735 18.947 24.4032 19.4408 24.4032C19.9764 24.4032 20.4701 24.2986 20.922 24.0894C21.3739 23.8802 21.7839 23.6166 22.1521 23.2986C22.5204 22.9722 22.8467 22.6375 23.1312 22.2943C23.399 22.4701 23.6961 22.7044 24.0225 22.9973C24.3489 23.2818 24.6543 23.5831 24.9388 23.9011C25.2317 24.2107 25.4577 24.4952 25.6167 24.7547Z"
      fill="#FFD400"
    />
  </svg>
);

const AddCartIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 36 36"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2290_7887)">
      <path d="M17.94 3.51562C17.4678 3.51562 17.0255 3.74832 16.7563 4.13702L10.2246 13.5929H3.50735C3.05675 13.5929 2.63368 13.8024 2.36016 14.1609C2.08951 14.5179 1.99749 14.9816 2.11554 15.4149L5.80173 28.7538C6.14579 29.9976 7.28702 30.8682 8.57691 30.8682H18.3252C18.186 30.4014 18.0793 29.9208 18.0075 29.4286H18.0159C17.9483 28.9579 17.9006 28.4785 17.9006 27.989C17.9006 22.4235 22.4124 17.9117 27.9779 17.9117C29.131 17.9117 30.2341 18.1142 31.2648 18.4713C31.7511 18.6398 32.2239 18.8387 32.6735 19.0758L33.6829 15.4177C33.8024 14.9844 33.7118 14.5179 33.4411 14.1609C33.1676 13.8024 32.7431 13.5929 32.2939 13.5929H25.5879L19.1294 4.14264C18.8616 3.75107 18.4193 3.51706 17.9456 3.51562H17.94ZM17.9344 7.49705L22.0986 13.5929H13.7224L17.9344 7.49705ZM27.9779 20.7909C24.0031 20.7909 20.7799 24.0142 20.7799 27.989C20.7799 31.9638 24.0031 35.187 27.9779 35.187C31.9527 35.187 35.176 31.9638 35.176 27.989C35.176 24.0142 31.9527 20.7909 27.9779 20.7909ZM26.5383 23.6702H29.4175V26.5494H32.2967V29.4286H29.4175V32.3078H26.5383V29.4286H23.6591V26.5494H26.5383V23.6702Z" />
    </g>
    <defs>
      <clipPath id="clip0_2290_7887">
        <rect
          width="34.5506"
          height="34.5506"
          transform="translate(0.625488 0.636719)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default PccStoreTab;
