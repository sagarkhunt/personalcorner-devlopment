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
import Header from "../Athlete/common/Header";
// -- images --
import bigNFT from "../assets/images/sauceGardnernft.png";
import ic_sergeant from "../assets/images/ic_sergeant.png";
import infoImage1 from "../assets/images/infoImage1.png";
import crownImage from "../assets/images/crownImage.png";
import starImage from "../assets/images/starImage.png";
import infoImage4 from "../assets/images/infoImage4.png";
import tcList1 from "../assets/images/tcList1.png";
import tcList2 from "../assets/images/tcList2.png";
import tcList3 from "../assets/images/tcList3.png";
import tcList4 from "../assets/images/tcList4.png";
import infoBigImage1 from "../assets/images/infoBigImage1.png";
import infoTextIcon from "../assets/images/infoTextIcon.png";
import collapseImage from "../assets/images/collapse.png";
import { $CombinedState } from "@reduxjs/toolkit";
import { NavLink, useNavigate } from "react-router-dom";
import icArrow from "../assets/images/icArrow.png";
const infoData = [
  { img: tcList4, name: "G.O.A.T", image: infoImage1 },
  { img: tcList4, name: "HALL OF FAME", image: crownImage },
  { img: tcList4, name: "VETERAN", image: starImage },
  { img: tcList4, name: "ROOKIE", image: infoImage4 },
  // { img: tcList1, name: "VON MILLER", image: infoImage1 },
  // { img: tcList2, name: "MAX CROSBY", image: crownImage },
  // { img: tcList3, name: "HOLLYWOOD BROWN", image: starImage },
  // { img: tcList4, name: "TREVON DIGGS", image: infoImage4 },
];

const Info = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalShowPurchaseNFT, setModalShowPurchaseNFT] = React.useState(false);
  const handleClose = () => setModalShowPurchaseNFT(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (open === false) {
      setTimeout(() => {
        setOpen(!open);
      }, 1000);
    }
  }, [open]);

  const getActiveCard = (i) => {
    var header = document.getElementById("infoData");
    var activeCards = header.getElementsByClassName("active");
    activeCards.length > 0 && activeCards[0].classList.remove("active");
    console.log(document.getElementById(i));
    document.getElementById(i).classList.add("active");
  };

  const handleBuyNow = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login", { replace: true });
    } else {
      setModalShowPurchaseNFT(true);
    }
  };
  // Modal PurchaseNFT
  function ModalPurchaseNFT(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        className="modalPurchaseNFT"
      >
        <Modal.Header className="d-flex justify-content-end">
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="networkLabel">
              <div className="circle me-2"></div>
              Ethereum Mainnet
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="p-2 p-md-4 transformPart">
            <Row className="justify-content-between">
              <Col className="col-auto d-flex align-items-center">
                <div className="fromPurchase"></div>
                <p className="mb-0 ms-2">0x872Be...D261</p>
              </Col>
              <Col className="col-auto">
                <img src={icArrow} className="img-fluid icArrow" />
              </Col>
              <Col className="col-auto d-flex align-items-center">
                <div className="toPurchase"></div>
                <p className="mb-0 ms-2">Trevon Diggs</p>
              </Col>
            </Row>
          </div>

          <div className="p-2 p-md-4 purchasePart">
            <p>https://personalcorner.io/marketplace</p>
            <div>
              <Button variant="" className="btnGrayBordered">
                PURCHASE NFT
              </Button>
            </div>
            <p className="font36Dark mt-2 mb-0">0.123 ETH</p>
          </div>

          <div className="p-2 p-md-4 transactionDetailsPart">
            <div className="borderArea">
              <div className="d-flex justify-content-end mb-2">
                <NavLink style={{ fontSize: "20px" }}>Edit</NavLink>
              </div>
              <Row className="justify-content-between mb-2">
                <Col md={"auto"} className="col-6 font24Black">
                  Estimated gas fee
                  <span className="ms-1">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.6238 20.025C15.9599 20.025 20.2857 15.6992 20.2857 10.3631C20.2857 5.02695 15.9599 0.701172 10.6238 0.701172C5.2877 0.701172 0.961914 5.02695 0.961914 10.3631C0.961914 15.6992 5.2877 20.025 10.6238 20.025ZM9.91432 7.19167C10.1153 7.38491 10.351 7.48152 10.6216 7.48152C10.9076 7.48152 11.1472 7.38491 11.3404 7.19167C11.5414 6.9907 11.6419 6.75108 11.6419 6.47282C11.6419 6.19456 11.5414 5.95881 11.3404 5.76557C11.1472 5.5646 10.9076 5.46412 10.6216 5.46412C10.351 5.46412 10.1153 5.5646 9.91432 5.76557C9.71336 5.95881 9.61287 6.19456 9.61287 6.47282C9.61287 6.75108 9.71336 6.9907 9.91432 7.19167ZM9.83316 8.43226V14.2294H11.4216V8.43226H9.83316Z"
                        fill="#BCC0C4"
                      />
                    </svg>
                  </span>
                </Col>
                <Col md={"auto"} className="col-6 font24Black">
                  <span className="font22GrayNormal">$89.65</span> 0.0000647 ETH
                </Col>
              </Row>
              <Row className="justify-content-between mb-2">
                <Col md={"auto"} className="col-6 font22Green">
                  Likely in &#60; 30 seconds
                </Col>
                <Col md={"auto"} className="col-6 font22GraySemi">
                  Max fee:{" "}
                  <span className="font22GrayNormal">0.000108 ETH</span>
                </Col>
              </Row>
              <hr />
              <Row className="justify-content-between mb-2">
                <Col md={"auto"} className="col-6 font24Black">
                  Total
                </Col>
                <Col md={"auto"} className="col-6 font24Black">
                  <span className="font22GrayNormal">$89.65</span> 0.0000647 ETH
                </Col>
              </Row>
              <Row className="justify-content-between">
                <Col md={"auto"} className="col-6 font22GrayNormal">
                  Amount + gas fee
                </Col>
                <Col md={"auto"} className="col-6 font22GraySemi">
                  Max amount:{" "}
                  <span className="font22GrayNormal">0.000108 ETH</span>
                </Col>
              </Row>
            </div>
          </div>

          <div className="text-center mb-3">
            <NavLink style={{ fontSize: "20px" }}>View Data</NavLink>
          </div>
        </Modal.Body>

        <Modal.Footer className="p-3 border-0">
          <Button variant="" className="btnGray" onClick={handleClose}>
            Reject
          </Button>
          <NavLink
            className="btnBlue"
            onClick={handleClose}
            to={"/MarketplaceInProcess"}
          >
            Confirm
          </NavLink>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="LayoutBG athleteSection">
        <Container fluid>
          <Col xxl={7} xl={12}>
            <Header />
          </Col>
          <Row className="mt-4">
            <Col xxl={7} xl={12}>
              <div className="font32white">
                Included: <span className="font32teal">0 Boosts</span>
              </div>
              <div className="d-flex align-items-center mt-3 mb-2">
                <div>
                  <img src={ic_sergeant} />
                </div>
                <div className="font54White ms-4">TREVON DIGGS</div>
              </div>
              <div className="font32light" style={{ fontStyle: "normal" }}>
                <div>Series 1 Collection</div>
                <div className="seriesDetails">
                  <div className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <circle cx="6" cy="6.5" r="6" fill="#C0E3FC" />
                    </svg>
                  </div>
                  <div className="font32Yellow">{infoData[index].name}</div>
                </div>
              </div>
              <div className="d-flex align-items-center socialBtnMain mt-3">
                <Button className="btn socialBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="23"
                    viewBox="0 0 30 23"
                    fill="none"
                  >
                    <path
                      d="M25.6026 3.06267C23.0639 1.02133 19.0479 0.675999 18.8773 0.661332C18.6093 0.638666 18.3546 0.790665 18.2453 1.036C18.2373 1.052 18.1493 1.25333 18.0519 1.56667C19.7306 1.84933 21.7933 2.42 23.6599 3.57867C23.9586 3.764 24.0506 4.15733 23.8653 4.45733C23.7453 4.652 23.5359 4.75866 23.3226 4.75866C23.2079 4.75866 23.0919 4.728 22.9866 4.66267C19.7786 2.67333 15.7706 2.57333 14.9999 2.57333C14.2293 2.57333 10.2199 2.67333 7.01459 4.66267C6.71459 4.84933 6.32259 4.756 6.13592 4.45733C5.94925 4.15733 6.04259 3.76533 6.34125 3.57867C8.20792 2.42133 10.2693 1.84933 11.9493 1.56667C11.8506 1.252 11.7626 1.052 11.7559 1.036C11.6453 0.790665 11.3919 0.635999 11.1226 0.662665C10.9533 0.675999 6.93725 1.02133 4.36392 3.092C3.01992 4.33333 0.333252 11.5973 0.333252 17.8773C0.333252 17.988 0.362585 18.0973 0.417252 18.1933C2.27192 21.4507 7.33059 22.304 8.48392 22.3413C8.49059 22.3413 8.49725 22.3413 8.50392 22.3413C8.70792 22.3413 8.89992 22.244 9.01992 22.0787L10.1866 20.476C7.04125 19.6627 5.43459 18.2827 5.34125 18.2013C5.07725 17.968 5.05192 17.5653 5.28525 17.3013C5.51859 17.0373 5.91992 17.012 6.18392 17.244C6.22259 17.2787 9.18125 19.7893 14.9999 19.7893C20.8293 19.7893 23.7879 17.268 23.8173 17.2427C24.0813 17.0133 24.4839 17.0373 24.7159 17.3027C24.9479 17.5667 24.9226 17.968 24.6599 18.2C24.5666 18.2827 22.9599 19.6613 19.8146 20.4747L20.9813 22.0773C21.1013 22.2427 21.2933 22.34 21.4973 22.34C21.5039 22.34 21.5106 22.34 21.5173 22.34C22.6706 22.304 27.7293 21.4507 29.5839 18.192C29.6373 18.096 29.6666 17.988 29.6666 17.8773C29.6666 11.5973 26.9799 4.33333 25.6026 3.06267ZM10.8546 15.3267C9.62259 15.3267 8.62259 14.184 8.62259 12.776C8.62259 11.368 9.62125 10.2253 10.8546 10.2253C12.0879 10.2253 13.0866 11.368 13.0866 12.776C13.0866 14.184 12.0879 15.3267 10.8546 15.3267ZM19.1453 15.3267C17.9133 15.3267 16.9133 14.184 16.9133 12.776C16.9133 11.368 17.9119 10.2253 19.1453 10.2253C20.3773 10.2253 21.3773 11.368 21.3773 12.776C21.3773 14.184 20.3773 15.3267 19.1453 15.3267Z"
                      fill="white"
                    />
                  </svg>
                </Button>
                <Button className="btn socialBtn ms-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66667 0C2.98533 0 0 2.98533 0 6.66667V17.3333C0 21.0147 2.98533 24 6.66667 24H17.3333C21.0147 24 24 21.0147 24 17.3333V6.66667C24 2.98533 21.0147 0 17.3333 0H6.66667ZM20 2.66667C20.736 2.66667 21.3333 3.264 21.3333 4C21.3333 4.736 20.736 5.33333 20 5.33333C19.264 5.33333 18.6667 4.736 18.6667 4C18.6667 3.264 19.264 2.66667 20 2.66667ZM12 5.33333C15.6813 5.33333 18.6667 8.31867 18.6667 12C18.6667 15.6813 15.6813 18.6667 12 18.6667C8.31867 18.6667 5.33333 15.6813 5.33333 12C5.33333 8.31867 8.31867 5.33333 12 5.33333ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
                      fill="white"
                    />
                  </svg>
                </Button>
                <Button className="btn socialBtn ms-3">
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.8454 0.874666C25.7587 1.388 23.9094 2.35067 22.98 2.53467C22.944 2.544 22.9147 2.556 22.88 2.56533C21.796 1.496 20.3107 0.833333 18.6667 0.833333C15.3534 0.833333 12.6667 3.52 12.6667 6.83333C12.6667 7.008 12.652 7.32933 12.6667 7.5C8.37603 7.5 5.24269 5.26133 2.89736 2.384C2.58403 1.99733 2.25069 2.19867 2.18136 2.47333C2.02536 3.09467 1.97203 4.13333 1.97203 4.87467C1.97203 6.74267 3.43203 8.57733 5.70536 9.71467C5.28669 9.82267 4.82536 9.9 4.34536 9.9C3.78003 9.9 3.12936 9.752 2.56003 9.45333C2.34936 9.34267 1.89469 9.37333 2.02936 9.912C2.56936 12.0707 5.03336 13.5867 7.23469 14.028C6.73469 14.3227 5.66803 14.2627 5.17736 14.2627C4.99603 14.2627 4.36536 14.22 3.95736 14.1693C3.58536 14.124 3.01336 14.22 3.49203 14.9453C4.52003 16.5013 6.84536 17.4787 8.84669 17.516C7.00403 18.9613 3.99069 19.4893 1.10403 19.4893C0.520026 19.476 0.549359 20.1413 1.02003 20.388C3.14936 21.5053 6.63736 22.1667 9.12936 22.1667C19.036 22.1667 24.6667 14.616 24.6667 7.49867C24.6667 7.384 24.664 7.144 24.66 6.90267C24.66 6.87867 24.6667 6.856 24.6667 6.832C24.6667 6.796 24.656 6.76133 24.656 6.72533C24.652 6.544 24.648 6.37467 24.644 6.28667C25.4294 5.72 26.632 4.736 27.24 3.98267C27.4467 3.72667 27.28 3.416 26.9987 3.51333C26.2747 3.76533 25.0227 4.25333 24.2387 4.34667C25.808 3.308 26.584 2.404 27.2507 1.4C27.4787 1.05733 27.1934 0.709333 26.8454 0.874666Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>

              <div className="mt-4">
                <Button className="btn yellowBtn" onClick={handleBuyNow}>
                  <svg
                    width="49"
                    height="50"
                    viewBox="0 0 49 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-3"
                  >
                    <rect y="0.5" width="49" height="49" rx="24" fill="black" />
                    <path
                      d="M24.5001 11.4308C24.3135 11.4308 24.1569 11.5264 24.054 11.6649C24.0455 11.6762 24.031 11.68 24.0231 11.6925L16.1077 24.1309C16.0981 24.1456 16.0968 24.1643 16.0889 24.1795C16.0708 24.2152 16.0588 24.2504 16.0481 24.2889C16.039 24.3222 16.031 24.3549 16.0282 24.3893C16.0253 24.4278 16.0286 24.4646 16.0337 24.5042C16.0365 24.5262 16.0303 24.549 16.0359 24.5704C16.0399 24.5857 16.0507 24.5977 16.0558 24.6124C16.0609 24.6271 16.0589 24.643 16.0657 24.6577C16.0753 24.6797 16.0925 24.6936 16.1044 24.714C16.123 24.7462 16.1424 24.7768 16.1673 24.8045C16.1945 24.8351 16.2245 24.8603 16.2568 24.8841C16.2743 24.8971 16.2856 24.9153 16.3042 24.926L24.2196 29.4491C24.2321 29.4564 24.2464 29.4594 24.2594 29.4657C24.2746 29.473 24.2894 29.4782 24.3058 29.4844C24.3685 29.507 24.434 29.5231 24.5001 29.5231C24.5663 29.5231 24.6317 29.5076 24.6945 29.4844C24.7109 29.4782 24.725 29.4719 24.7408 29.4646C24.7538 29.4583 24.7682 29.4553 24.7806 29.448L32.696 24.9249C32.6994 24.9227 32.7014 24.9189 32.7048 24.9172C32.7625 24.8827 32.8131 24.8384 32.8561 24.7847C32.8663 24.7717 32.873 24.7568 32.8826 24.7427C32.9013 24.715 32.922 24.6893 32.9356 24.6577C32.9418 24.643 32.9394 24.6277 32.9444 24.6124C32.9495 24.5977 32.9604 24.5857 32.9643 24.5704C32.9694 24.549 32.9648 24.5262 32.9676 24.5042C32.9727 24.4646 32.9754 24.4273 32.972 24.3882C32.9692 24.3538 32.9612 24.3211 32.9522 24.2878C32.9414 24.2493 32.93 24.214 32.9113 24.1784C32.9034 24.1632 32.9016 24.1456 32.8925 24.1309L24.9772 11.6925C24.9698 11.6806 24.9547 11.6756 24.9462 11.6649C24.8433 11.5264 24.6867 11.4308 24.5001 11.4308ZM24.5001 12.8796V21.6077L31.15 24.5075L24.5001 28.3923V21.6077L17.4681 24.0459L24.5001 12.8796ZM16.4942 26.7039C16.3696 26.7241 16.2519 26.7866 16.1629 26.8861C15.9854 27.0857 15.9715 27.3824 16.1298 27.5972L24.0452 38.3395C24.0525 38.3492 24.0643 38.3526 24.0717 38.3616C24.1095 38.4074 24.155 38.4426 24.2053 38.4743C24.2245 38.4867 24.2396 38.5022 24.2605 38.5118C24.334 38.5463 24.4136 38.5692 24.5001 38.5692C24.5866 38.5692 24.6662 38.5463 24.7397 38.5118C24.7601 38.5022 24.7757 38.4861 24.7949 38.4743C24.8453 38.4426 24.8907 38.4074 24.9286 38.3616C24.9359 38.3526 24.9483 38.3492 24.9551 38.3395L32.8705 27.5972C33.0288 27.3824 33.0154 27.0857 32.8373 26.8861C32.6598 26.6859 32.3663 26.6389 32.135 26.7712L24.5001 31.1342L16.8652 26.7712C16.7499 26.7057 16.6188 26.6837 16.4942 26.7039ZM18.6265 29.0803L24.5001 32.5267V36.9449L18.6265 29.0803Z"
                      fill="white"
                    />
                  </svg>
                  BUY FOR 0.12 ETH ($201)
                </Button>
                <ModalPurchaseNFT
                  show={modalShowPurchaseNFT}
                  onHide={() => setModalShowPurchaseNFT(false)}
                />
              </div>

              <hr />

              <div className="tierMain">
                <div className="heading">
                  <div className="me-3 image">
                    <svg
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.9888 2.6425C25.8764 1.53 23.8563 0.919998 21.2938 0.919998C17.2589 0.919998 11.3163 2.5475 6.75135 7.1125C-0.0686499 13.935 -0.833649 24.2375 2.27635 27.35C3.39135 28.465 5.41635 29.08 7.97635 29.08C12.0063 29.08 17.9438 27.45 22.5138 22.88C26.6413 18.7525 27.9914 13.94 28.4289 11.44C29.1038 7.575 28.5513 4.205 26.9888 2.6425ZM19.4289 15.64C18.8988 15.64 18.4688 15.21 18.4688 14.68C18.4688 14.6625 18.4739 14.6475 18.4739 14.63L17.1889 13.345L15.5338 15L16.8188 16.285C16.8363 16.285 16.8513 16.28 16.8688 16.28C17.3988 16.28 17.8288 16.71 17.8288 17.24C17.8288 17.77 17.3988 18.2 16.8688 18.2C16.3389 18.2 15.9088 17.77 15.9088 17.24C15.9088 17.2225 15.9138 17.2075 15.9138 17.19L14.6288 15.905L12.9739 17.56L14.2589 18.845C14.2764 18.845 14.2913 18.84 14.3088 18.84C14.8389 18.84 15.2688 19.27 15.2688 19.8C15.2688 20.33 14.8389 20.76 14.3088 20.76C13.7788 20.76 13.3489 20.33 13.3489 19.8C13.3489 19.7825 13.3538 19.7675 13.3538 19.75L12.0688 18.465L10.6013 19.9325C10.4763 20.0575 10.3139 20.12 10.1488 20.12C9.98385 20.12 9.82135 20.0575 9.69635 19.9325C9.44635 19.6825 9.44635 19.2775 9.69635 19.0275L11.1638 17.56L9.87885 16.275C9.86135 16.275 9.84635 16.28 9.82885 16.28C9.29885 16.28 8.86885 15.85 8.86885 15.32C8.86885 14.79 9.29885 14.36 9.82885 14.36C10.3588 14.36 10.7888 14.79 10.7888 15.32C10.7888 15.3375 10.7838 15.3525 10.7838 15.37L12.0688 16.655L13.7239 15L12.4388 13.715C12.4213 13.715 12.4064 13.72 12.3889 13.72C11.8588 13.72 11.4289 13.29 11.4289 12.76C11.4289 12.23 11.8588 11.8 12.3889 11.8C12.9188 11.8 13.3489 12.23 13.3489 12.76C13.3489 12.7775 13.3439 12.7925 13.3439 12.81L14.6288 14.095L16.2838 12.44L14.9988 11.155C14.9813 11.155 14.9663 11.16 14.9488 11.16C14.4188 11.16 13.9888 10.73 13.9888 10.2C13.9888 9.67 14.4188 9.24 14.9488 9.24C15.4788 9.24 15.9088 9.67 15.9088 10.2C15.9088 10.2175 15.9038 10.2325 15.9038 10.25L17.1889 11.535L18.6563 10.0675C18.9063 9.8175 19.3113 9.8175 19.5613 10.0675C19.8113 10.3175 19.8113 10.7225 19.5613 10.9725L18.0938 12.44L19.3788 13.725C19.3963 13.725 19.4114 13.72 19.4289 13.72C19.9588 13.72 20.3888 14.15 20.3888 14.68C20.3888 15.21 19.9588 15.64 19.4289 15.64Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  Choose Athlete Tier
                </div>
                <Row id="infoData" className="mt-4 listingAreaMobile">
                  {infoData.map((item, i) => (
                    <Col
                      xxl={3}
                      xl={4}
                      lg={4}
                      md={6}
                      sm={12}
                      className="mb-3"
                      key={i}
                    >
                      <Card
                        id={i}
                        className="info-card"
                        onClick={() => {
                          setIndex(i);
                          setOpen(!open);
                          getActiveCard(i);
                        }}
                      >
                        <div className="info-img">
                          <img src={item.image} />
                        </div>
                        <div className="info-card-img">
                          <Card.Img className="img-fluid" src={item.img} />
                        </div>
                        <div className="info-card-body">
                          <Card.Body>
                            <Card.Title className="mb-2 info-card-title">
                              {item.name}
                            </Card.Title>
                            <Card.Text className="p-1 m-0 card-textNew">
                              <div className="info-card-body-text">
                                <div className="me-1">
                                  <img src={infoTextIcon} />
                                </div>
                                <div className="inner-text-info">
                                  0.25 ETH ($417)
                                </div>
                              </div>
                            </Card.Text>
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col xxl={5} xl={6}></Col>
          </Row>
          {open === false ? (
            <div className="bigNFT">
              <img src={collapseImage} className="img-fluid" />
            </div>
          ) : (
            <Collapse in={open}>
              <div className="bigNFT">
                <img src={infoBigImage1} className="img-fluid" />
              </div>
            </Collapse>
          )}
        </Container>
      </div>
    </>
  );
};

export default Info;
