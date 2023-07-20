import React, { Fragment, useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Collapse,
  Modal,
  Form,
  Spinner,
  Badge,
} from "react-bootstrap";
import starImage from "../assets/images/starImage.png";
import infoTextIcon from "../assets/images/infoTextIcon.png";
import icArrow from "../assets/images/icArrow.png";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import moment from "moment";
import { getEthPrice } from "../utils/etherScan";
import { checkTrade, createTrade } from "../store/trade/trade.fetch";
import { toast } from "react-toastify";
import {
  createTradeInImx,
  getBalances,
  showMagicLinkWallet,
} from "../utils/contract";

const MarketplaceInfo = ({ setNft, nft }) => {
  const [nftSelected, setNftSelected] = useState(false);
  const [ethPrice, setEthPrice] = useState(0);
  const { user } = useSelector((_state) => _state.auth);
  const { nfts } = useSelector((_state) => _state.nft);
  const collectionInfo = useSelector(
    (_state) => _state.collection.collectionInfo
  );
  const navigate = useNavigate();

  useEffect(() => {
    getEthPrice().then((response) => {
      setEthPrice(response.usd);
    });
  }, []);
  useEffect(() => {
    if (nfts.records.length && nftSelected === false) {
      setNft(nfts.records[0]);
      setNftSelected(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nfts, setNft]);

  const handleBuyNow = () => {
    if (!user) {
      navigate(
        `/login?redirect=/marketplace/${collectionInfo?.data?._id}/info`,
        { replace: true }
      );
    } else {
      setModalShowPurchaseNFT(true);
    }
  };

  const buyNft = async (values) => {
    await createTrade(values);
  };

  const [modalShow, setModalShow] = React.useState(false);

  const [modalShowPurchaseNFT, setModalShowPurchaseNFT] = React.useState(false);
  const handleClose = () => setModalShowPurchaseNFT(false);
  // const handleShow = () => setModalShowPurchaseNFT(true);
  // console.log(localStorage.getItem("publicKey"));

  return (
    <div>
      {nft ? (
        <Fragment>
          <Row className="mt-4">
            <Col xxl={7} xl={12}>
              {/* <div className="font32lightNew">
                Sales ends:{" "}
                <span className="font32tealNew ms-2">
                  {nft.endDate
                    ? moment(nft.endDate).format("MMMM DD, YYYY, hh:mm a")
                    : "-"}
                </span>
              </div> */}
              <div className="d-flex align-items-center mt-3 mb-2">
                <div className="nftImg">
                  <img src={nft.imageUrl} alt="" />
                </div>
                <div className="font54White ms-4">{nft.name}</div>
              </div>
              <div className="font32light" style={{ fontStyle: "normal" }}>
                <div>{collectionInfo.data.name}</div>
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
                  <div className="font32Yellow">
                    <span className="font32white">Owned by</span>{" "}
                    {nft.owner
                      ? `${
                          nft.owner.substring(1, 6) +
                          "..." +
                          nft.owner.substring(nft.owner.length - 4)
                        }`
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center socialBtnMain mt-3">
                <Button className="btn socialBtn" disabled>
                  <svg
                    width="28"
                    height="25"
                    viewBox="0 0 28 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6745 0.505714C16.0199 0.655047 13.9999 3.28571 13.9999 3.28571C13.9999 3.28571 11.9799 0.655047 8.32519 0.505714C5.87452 0.405714 3.62786 1.62571 2.14786 3.58171C-3.00148 10.387 6.74786 18.3484 9.04119 20.4857C10.4132 21.7644 12.1065 23.283 13.1172 24.183C13.6225 24.6337 14.3759 24.6337 14.8812 24.183C15.8919 23.283 17.5852 21.7644 18.9572 20.4857C21.2505 18.3484 31.0012 10.387 25.8505 3.58171C24.3719 1.62571 22.1252 0.405714 19.6745 0.505714Z"
                      fill="white"
                    />
                  </svg>
                </Button>
                <Button className="btn socialBtn ms-3" disabled>
                  <svg
                    width="24"
                    height="27"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0.166016C18.9391 0.166016 17.9217 0.587443 17.1716 1.33759C16.4214 2.08773 16 3.10515 16 4.16602C16.0008 4.41688 16.0252 4.66712 16.0729 4.91341L6.58594 10.4473C5.86335 9.83514 4.94701 9.49924 4 9.49935C2.93913 9.49935 1.92172 9.92078 1.17157 10.6709C0.421427 11.4211 0 12.4385 0 13.4993C0 14.5602 0.421427 15.5776 1.17157 16.3278C1.92172 17.0779 2.93913 17.4993 4 17.4993C4.94555 17.4975 5.85987 17.1607 6.58073 16.5488L16.0729 22.0853C16.0252 22.3316 16.0008 22.5818 16 22.8327C16 23.8935 16.4214 24.911 17.1716 25.6611C17.9217 26.4113 18.9391 26.8327 20 26.8327C21.0609 26.8327 22.0783 26.4113 22.8284 25.6611C23.5786 24.911 24 23.8935 24 22.8327C24 21.7718 23.5786 20.7544 22.8284 20.0043C22.0783 19.2541 21.0609 18.8327 20 18.8327C19.0536 18.8339 18.1382 19.1707 17.4167 19.7832L7.92708 14.2467C7.97477 14.0005 7.99919 13.7502 8 13.4993C7.99919 13.2485 7.97477 12.9982 7.92708 12.752L17.4141 7.2181C18.1367 7.83022 19.053 8.16612 20 8.16602C21.0609 8.16602 22.0783 7.74459 22.8284 6.99444C23.5786 6.2443 24 5.22688 24 4.16602C24 3.10515 23.5786 2.08773 22.8284 1.33759C22.0783 0.587443 21.0609 0.166016 20 0.166016Z"
                      fill="white"
                    />
                  </svg>
                </Button>
                <Button className="btn socialBtn ms-3" disabled>
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0001 0.166016C6.63608 0.166016 0.666748 6.13535 0.666748 13.4993C0.666748 20.8633 6.63608 26.8327 14.0001 26.8327C21.3641 26.8327 27.3334 20.8633 27.3334 13.4993C27.3334 6.13535 21.3641 0.166016 14.0001 0.166016ZM14.0001 20.166C13.2641 20.166 12.6667 19.5687 12.6667 18.8327V13.4993C12.6667 12.7633 13.2641 12.166 14.0001 12.166C14.7361 12.166 15.3334 12.7633 15.3334 13.4993V18.8327C15.3334 19.5687 14.7361 20.166 14.0001 20.166ZM14.6667 9.49935H13.3334C12.9654 9.49935 12.6667 9.20068 12.6667 8.83268V7.49935C12.6667 7.13135 12.9654 6.83268 13.3334 6.83268H14.6667C15.0347 6.83268 15.3334 7.13135 15.3334 7.49935V8.83268C15.3334 9.20068 15.0347 9.49935 14.6667 9.49935Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>

              {nft.owner !== localStorage.getItem("publicKey")?.toLowerCase() &&
              nft.owner === collectionInfo.data["owner"] ? (
                <div className="mt-4 d-flex flex-wrap">
                  <Button
                    className="btn yellowBtn mb-3 mb-md-0"
                    onClick={handleBuyNow}
                  >
                    <svg
                      width="49"
                      height="50"
                      viewBox="0 0 49 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="me-3"
                    >
                      <rect
                        y="0.5"
                        width="49"
                        height="49"
                        rx="24"
                        fill="black"
                      />
                      <path
                        d="M24.5001 11.4308C24.3135 11.4308 24.1569 11.5264 24.054 11.6649C24.0455 11.6762 24.031 11.68 24.0231 11.6925L16.1077 24.1309C16.0981 24.1456 16.0968 24.1643 16.0889 24.1795C16.0708 24.2152 16.0588 24.2504 16.0481 24.2889C16.039 24.3222 16.031 24.3549 16.0282 24.3893C16.0253 24.4278 16.0286 24.4646 16.0337 24.5042C16.0365 24.5262 16.0303 24.549 16.0359 24.5704C16.0399 24.5857 16.0507 24.5977 16.0558 24.6124C16.0609 24.6271 16.0589 24.643 16.0657 24.6577C16.0753 24.6797 16.0925 24.6936 16.1044 24.714C16.123 24.7462 16.1424 24.7768 16.1673 24.8045C16.1945 24.8351 16.2245 24.8603 16.2568 24.8841C16.2743 24.8971 16.2856 24.9153 16.3042 24.926L24.2196 29.4491C24.2321 29.4564 24.2464 29.4594 24.2594 29.4657C24.2746 29.473 24.2894 29.4782 24.3058 29.4844C24.3685 29.507 24.434 29.5231 24.5001 29.5231C24.5663 29.5231 24.6317 29.5076 24.6945 29.4844C24.7109 29.4782 24.725 29.4719 24.7408 29.4646C24.7538 29.4583 24.7682 29.4553 24.7806 29.448L32.696 24.9249C32.6994 24.9227 32.7014 24.9189 32.7048 24.9172C32.7625 24.8827 32.8131 24.8384 32.8561 24.7847C32.8663 24.7717 32.873 24.7568 32.8826 24.7427C32.9013 24.715 32.922 24.6893 32.9356 24.6577C32.9418 24.643 32.9394 24.6277 32.9444 24.6124C32.9495 24.5977 32.9604 24.5857 32.9643 24.5704C32.9694 24.549 32.9648 24.5262 32.9676 24.5042C32.9727 24.4646 32.9754 24.4273 32.972 24.3882C32.9692 24.3538 32.9612 24.3211 32.9522 24.2878C32.9414 24.2493 32.93 24.214 32.9113 24.1784C32.9034 24.1632 32.9016 24.1456 32.8925 24.1309L24.9772 11.6925C24.9698 11.6806 24.9547 11.6756 24.9462 11.6649C24.8433 11.5264 24.6867 11.4308 24.5001 11.4308ZM24.5001 12.8796V21.6077L31.15 24.5075L24.5001 28.3923V21.6077L17.4681 24.0459L24.5001 12.8796ZM16.4942 26.7039C16.3696 26.7241 16.2519 26.7866 16.1629 26.8861C15.9854 27.0857 15.9715 27.3824 16.1298 27.5972L24.0452 38.3395C24.0525 38.3492 24.0643 38.3526 24.0717 38.3616C24.1095 38.4074 24.155 38.4426 24.2053 38.4743C24.2245 38.4867 24.2396 38.5022 24.2605 38.5118C24.334 38.5463 24.4136 38.5692 24.5001 38.5692C24.5866 38.5692 24.6662 38.5463 24.7397 38.5118C24.7601 38.5022 24.7757 38.4861 24.7949 38.4743C24.8453 38.4426 24.8907 38.4074 24.9286 38.3616C24.9359 38.3526 24.9483 38.3492 24.9551 38.3395L32.8705 27.5972C33.0288 27.3824 33.0154 27.0857 32.8373 26.8861C32.6598 26.6859 32.3663 26.6389 32.135 26.7712L24.5001 31.1342L16.8652 26.7712C16.7499 26.7057 16.6188 26.6837 16.4942 26.7039ZM18.6265 29.0803L24.5001 32.5267V36.9449L18.6265 29.0803Z"
                        fill="white"
                      />
                    </svg>
                    BUY FOR {nft.ethereumPrice} ETH
                  </Button>

                  <ModalPurchaseNFT
                    show={modalShowPurchaseNFT}
                    onHide={() => setModalShowPurchaseNFT(false)}
                    handleClose={handleClose}
                    nft={nft}
                    ethprice={ethPrice}
                    user={user}
                    buyNft={buyNft}
                  />

                  <Button
                    className="btn skyLightBtn ms-0 ms-md-4"
                    onClick={() => setModalShow(true)}
                    disabled
                  >
                    <svg
                      className="me-3"
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.4598 0.0633057C19.9294 0.0791106 19.426 0.300793 19.0562 0.681388L17.9516 1.78596L9.95243 9.78515L8.84786 10.8897C8.45655 11.2641 8.23 11.7786 8.21803 12.32C8.20607 12.8615 8.40967 13.3855 8.78406 13.7768C9.15844 14.1681 9.67294 14.3946 10.2144 14.4066C10.7558 14.4186 11.2798 14.215 11.6711 13.8406C13.03 16.6599 14.7153 19.1814 16.6875 21.425L0.681192 37.4314C0.485246 37.6195 0.328808 37.8449 0.221039 38.0942C0.11327 38.3435 0.056336 38.6119 0.0535725 38.8835C0.0508089 39.1551 0.102271 39.4246 0.204945 39.6761C0.307618 39.9276 0.459439 40.156 0.651517 40.3481C0.843594 40.5402 1.07207 40.692 1.32355 40.7947C1.57504 40.8974 1.84449 40.9488 2.11611 40.9461C2.38774 40.9433 2.65608 40.8864 2.90542 40.7786C3.15477 40.6708 3.38011 40.5144 3.56824 40.3184L19.5746 24.3121C21.8186 26.2846 24.3391 27.9735 27.1591 29.3325C26.8076 29.7277 26.6232 30.2439 26.6447 30.7724C26.6662 31.3009 26.8919 31.8004 27.2743 32.1658C27.6567 32.5312 28.166 32.7339 28.6949 32.7313C29.2238 32.7287 29.7311 32.5209 30.1099 32.1518L31.2145 31.0472L32.1516 30.1101L39.2137 23.048L40.3182 21.9434C40.6133 21.6567 40.8148 21.2874 40.8964 20.8842C40.9779 20.4809 40.9358 20.0624 40.7754 19.6835C40.6151 19.3046 40.344 18.983 39.9977 18.7608C39.6514 18.5386 39.2461 18.4262 38.8348 18.4383C38.3354 18.4529 37.8588 18.6501 37.495 18.9926C34.1565 12.066 28.9339 6.83886 22.007 3.50064C22.2827 3.20653 22.4651 2.8374 22.5313 2.43979C22.5975 2.04217 22.5446 1.63385 22.3791 1.26628C22.2137 0.898708 21.9431 0.588329 21.6016 0.374254C21.26 0.160178 20.8628 0.0519848 20.4598 0.0633057ZM23.6499 9.18302C26.9625 11.3265 29.6731 14.0371 31.8166 17.3497L25.5161 23.6501C22.2035 21.5066 19.493 18.7961 17.3495 15.4835L23.6499 9.18302Z"
                        fill="white"
                      />
                    </svg>
                    MAKE OFFER
                  </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              ) : (
                <div className="p-2">
                  <h1>
                    <Badge bg="danger">Sold Out</Badge>
                  </h1>
                </div>
              )}

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
                  MORE FROM THIS COLLECTION
                </div>
                <Row id="infoData" className="mt-4 listingAreaMobile">
                  {nfts.records.map((item, index) => {
                    return (
                      <Col
                        xxl={3}
                        xl={4}
                        lg={4}
                        md={6}
                        sm={12}
                        className="mb-3"
                        key={index}
                      >
                        <Card
                          className="info-card"
                          onClick={() => setNft(item)}
                        >
                          <div className="info-img">
                            <img src={starImage} alt="" />
                          </div>
                          <div className="info-card-img">
                            <Card.Img
                              className="img-fluid"
                              alt=""
                              src={item.imageUrl}
                            />
                          </div>
                          <div className="info-card-body">
                            <Card.Body>
                              <Card.Title className="mb-2 info-card-title">
                                {item.name}
                              </Card.Title>
                              <div className="p-1 m-0 card-textNew">
                                <div className="info-card-body-text">
                                  <div className="me-1">
                                    <img src={infoTextIcon} alt="" />
                                  </div>
                                  <div className="inner-text-info">
                                    {nft.ethereumPrice} ETH{"  $"}
                                    {Number(
                                      nft.ethereumPrice * ethPrice
                                    ).toFixed(7)}
                                  </div>
                                </div>
                              </div>
                            </Card.Body>
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
                  {nfts.loading ? (
                    <Col
                      xxl={12}
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      className="mb-3 mt-4 text-center"
                    >
                      <Spinner animation="border" variant="light" />
                    </Col>
                  ) : null}
                </Row>
              </div>
            </Col>
            <Col xxl={5} xl={6}></Col>
          </Row>
          <Collapse in={true}>
            <div className="bigNFT">
              <img src={nft.imageUrl} className="img-fluid" alt="" />
            </div>
          </Collapse>
        </Fragment>
      ) : (
        <Fragment>
          {nfts.loading === false ? (
            <span
              className="w-100 d-flex align-item-center justify-content-center"
              style={{ padding: "25px", color: "white", fontSize: "35px" }}
            >
              All the NFTs for this collection are sold out. Please checkout our
              other NFTs
            </span>
          ) : null}
        </Fragment>
      )}
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      className="modalCustom"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
            <h1 className="title mb-0">Place a bid</h1>
            <p className="content mb-0">
              You are about to place a bid for{" "}
              <span>Trevon Diggs Rookie #1963</span>
            </p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="p-2 p-md-4">
          <Form.Group className="mb-3">
            <Form.Label>Your bidding price</Form.Label>
            <div className="d-flex align-items-center justify-content-between fieldSkyBG">
              <input
                type="text"
                name=""
                placeholder=""
                className="fieldTransparent"
              ></input>
              <div className="d-flex align-items-center justify-content-between">
                <div className="coinIcon d-flex align-items-center justify-content-center">
                  <svg
                    width="18"
                    height="28"
                    viewBox="0 0 18 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99965 0.707031C8.81688 0.707031 8.66343 0.800666 8.56263 0.936358C8.55432 0.947435 8.5401 0.951217 8.53234 0.963401L0.778496 13.148C0.769081 13.1624 0.767861 13.1807 0.760107 13.1956C0.742384 13.2305 0.730606 13.265 0.720083 13.3027C0.711221 13.3354 0.703381 13.3674 0.700612 13.4011C0.697842 13.4388 0.701036 13.4749 0.70602 13.5136C0.708789 13.5352 0.702645 13.5575 0.708184 13.5785C0.712061 13.5935 0.72267 13.6053 0.727655 13.6197C0.732639 13.6341 0.730744 13.6496 0.73739 13.664C0.746806 13.6856 0.76362 13.6992 0.775251 13.7192C0.793528 13.7507 0.81254 13.7807 0.83691 13.8079C0.863494 13.8378 0.892961 13.8625 0.92453 13.8858C0.941699 13.8985 0.952767 13.9163 0.971044 13.9269L8.72489 18.3576C8.73707 18.3648 8.75109 18.3678 8.76383 18.3739C8.77879 18.3811 8.7932 18.3862 8.80927 18.3923C8.87074 18.4144 8.93485 18.4301 8.99965 18.4301C9.06445 18.4301 9.12856 18.415 9.19003 18.3923C9.2061 18.3862 9.21996 18.38 9.23547 18.3728C9.24821 18.3667 9.26223 18.3638 9.27441 18.3566L17.0283 13.9258C17.0316 13.9236 17.0336 13.9199 17.0369 13.9182C17.0934 13.8844 17.143 13.841 17.1851 13.7884C17.1951 13.7757 17.2017 13.7611 17.2111 13.7473C17.2293 13.7202 17.2497 13.695 17.263 13.664C17.2691 13.6496 17.2667 13.6346 17.2716 13.6197C17.2766 13.6053 17.2872 13.5935 17.2911 13.5785C17.2961 13.5575 17.2916 13.5352 17.2944 13.5136C17.2993 13.4749 17.302 13.4383 17.2987 13.4001C17.2959 13.3663 17.2881 13.3343 17.2792 13.3016C17.2687 13.264 17.2575 13.2294 17.2392 13.1945C17.2314 13.1796 17.2297 13.1624 17.2208 13.148L9.46696 0.963401C9.45976 0.951771 9.44498 0.946881 9.43667 0.936358C9.33587 0.800666 9.18242 0.707031 8.99965 0.707031ZM8.99965 2.12626V10.6763L15.5138 13.5169L8.99965 17.3224V10.6763L2.11119 13.0647L8.99965 2.12626ZM1.1571 15.6685C1.03505 15.6883 0.919813 15.7495 0.832583 15.8469C0.658675 16.0424 0.645054 16.3331 0.80013 16.5436L8.55398 27.0667C8.56118 27.0761 8.57274 27.0794 8.57994 27.0883C8.61705 27.1331 8.66154 27.1676 8.71083 27.1986C8.72966 27.2108 8.74442 27.226 8.76491 27.2354C8.83692 27.2692 8.91491 27.2917 8.99965 27.2917C9.08439 27.2917 9.16239 27.2692 9.23439 27.2354C9.25432 27.226 9.26964 27.2103 9.28847 27.1986C9.33776 27.1676 9.38225 27.1331 9.41936 27.0883C9.42656 27.0794 9.43868 27.0761 9.44532 27.0667L17.1992 16.5436C17.3542 16.3331 17.3412 16.0424 17.1667 15.8469C16.9928 15.6509 16.7053 15.6048 16.4787 15.7344L8.99965 20.0084L1.52056 15.7344C1.40758 15.6702 1.27916 15.6487 1.1571 15.6685ZM3.24592 17.9963L8.99965 21.3724V25.7004L3.24592 17.9963Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="font32Blue ms-2">ETH</div>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bid Expires in</Form.Label>
            <div className="d-flex align-items-center justify-content-between fieldSkyBG">
              <div className="formRadio">
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id="radio1"
                    className="radio"
                  />
                  <label for="radio1">7 Days</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="radio"
                    id="radio2"
                    className="radio"
                  />
                  <label for="radio2">14 Days</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="radio"
                    id="radio3"
                    className="radio"
                  />
                  <label for="radio3">30 Days</label>
                </div>

                <div>
                  <input type="radio" name="radio" id="radio4" class="radio" />
                  <label for="radio4">90 Days</label>
                </div>
              </div>
            </div>
          </Form.Group>

          <div className="txnSummary mt-4">
            <div className="font24Blue">Transaction Summary</div>
            <hr />
            <div className="row justify-content-between mb-3">
              <div className="col font24Blue">Bidding Amount:</div>
              <div className="col font24Blue text-end">0.25 ETH ($252.32)</div>
            </div>
            <div className="row justify-content-between">
              <div className="col font24Blue">Transaction Fee:</div>
              <div className="col font24Blue text-end">0.003 ETH ($4.29)</div>
            </div>
            <hr />
            <div className="row justify-content-between">
              <div className="col font24Blue">You will pay</div>
              <div className="col font24BlueBold text-end">
                0.003 ETH <span className="font24Blue">($4.29)</span>
              </div>
            </div>
          </div>
          <Button className="btn yellowBtn mt-4 w-100 justify-content-center">
            Place bid FOR 0.253 ETH
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// Modal PurchaseNFT
function ModalPurchaseNFT({ handleClose, buyNft, ...props }) {
  const { nft, ethprice, user } = props;
  const [publicKey, setPublicKey] = useState(null);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const publickey = localStorage.getItem("publicKey");
    if (publickey) {
      setPublicKey(publickey);
      getBalances(publickey).then((response) => {
        console.log("balance", response);
        setBalance(response);
      });
    }
  }, []);

  const confirm = async () => {
    try {
      setIsLoading(true);
      const publicKey = localStorage.getItem("publicKey");
      console.log("confirm public", publicKey);
      if (publicKey) {
        console.log("check balance", balance);
        const l1Balance = await getBalances(publicKey);
        if (Number(l1Balance) <= Number(nft.ethereumPrice)) {
          await showMagicLinkWallet();
        } else {
          const checkTradeRes = await checkTrade({
            collectionId: nft.collections,
          });

          if (checkTradeRes) {
            const transactionId = await createTradeInImx(
              nft.orderId,
              nft.ethereumPrice,
              publicKey
            );
            if (transactionId) {
              navigate("/MarketplaceInProcess", {
                state: {
                  nft: {
                    ...nft,
                    usdPrice: Number(nft.ethereumPrice * ethprice).toFixed(2),
                  },
                },
              });
              const data = {
                buyer: localStorage.getItem("publicKey")?.toLowerCase(),
                seller: nft.owner,
                nftId: nft._id,
                totalEth: Number(nft.ethereumPrice),
                totalUsd: Number(
                  Number(nft.ethereumPrice * ethprice).toFixed(2)
                ),
                gasEth: 0,
                gasUsd: 0,
                transactionId: String(transactionId),
              };
              buyNft(data);
            }
          } else {
            toast.error("Already purchased same nft");
          }

          handleClose();
        }

        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error("Please connect wallet");
        handleClose();
      }
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };
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
            {process.env.REACT_APP_NETWORK}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="p-2 p-md-4 transformPart">
          <Row className="justify-content-between">
            <Col className="col-auto d-flex align-items-center">
              <div className="fromPurchase"></div>
              <p className="mb-0 ms-2"></p>
              <span
                className="d-inline-block text-truncate"
                style={{ maxWidth: "150px" }}
              >
                {nft.owner}
              </span>
            </Col>
            <Col className="col-auto">
              <img src={icArrow} className="img-fluid icArrow" alt="" />
            </Col>
            <Col className="col-auto d-flex align-items-center">
              <div className="toPurchase"></div>
              <p className="mb-0 ms-2">{user?.fullName}</p>
            </Col>
          </Row>
        </div>

        <div className="p-2 p-md-4 purchasePart">
          <p>{nft.name}</p>
          <div>
            <span variant="" className="btnGrayBordered">
              PURCHASE NFT
            </span>
          </div>
          <p className="font36Dark mt-2 mb-0">{nft.ethereumPrice} ETH</p>
        </div>

        <div className="p-2 p-md-4 transactionDetailsPart">
          <div className="borderArea">
            {/* <div className="d-flex justify-content-end mb-2">
              <NavLink style={{ fontSize: "20px" }}>Edit</NavLink>
            </div> */}
            {/* <Row className="justify-content-between mb-2">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.6238 20.025C15.9599 20.025 20.2857 15.6992 20.2857 10.3631C20.2857 5.02695 15.9599 0.701172 10.6238 0.701172C5.2877 0.701172 0.961914 5.02695 0.961914 10.3631C0.961914 15.6992 5.2877 20.025 10.6238 20.025ZM9.91432 7.19167C10.1153 7.38491 10.351 7.48152 10.6216 7.48152C10.9076 7.48152 11.1472 7.38491 11.3404 7.19167C11.5414 6.9907 11.6419 6.75108 11.6419 6.47282C11.6419 6.19456 11.5414 5.95881 11.3404 5.76557C11.1472 5.5646 10.9076 5.46412 10.6216 5.46412C10.351 5.46412 10.1153 5.5646 9.91432 5.76557C9.71336 5.95881 9.61287 6.19456 9.61287 6.47282C9.61287 6.75108 9.71336 6.9907 9.91432 7.19167ZM9.83316 8.43226V14.2294H11.4216V8.43226H9.83316Z"
                      fill="#BCC0C4"
                    />
                  </svg>
                </span>
              </Col>
              <Col md={"auto"} className="col-6 font24Black">
                <span className="font22GrayNormal">-</span>
              </Col>
            </Row> */}
            {/* <Row className="justify-content-between mb-2">
              <Col md={"auto"} className="col-6 font22Green">
                Likely in &#60; 30 seconds
              </Col>
              <Col md={"auto"} className="col-6 font22GraySemi">
                Max fee: <span className="font22GrayNormal">-</span>
              </Col>
            </Row> */}
            <hr />
            <Row className="justify-content-between mb-2">
              <Col md={"auto"} className="col-6 font24Black">
                Total
              </Col>
              <Col md={"auto"} className="col-6 font24Black">
                <span className="font22GrayNormal">
                  ${Number(nft.ethereumPrice * ethprice).toFixed(2)}
                </span>{" "}
                {nft.ethereumPrice} ETH
              </Col>
            </Row>
            {/* <Row className="justify-content-between">
              <Col md={"auto"} className="col-6 font22GrayNormal">
                Amount
              </Col>
              <Col md={"auto"} className="col-6 font22GraySemi">
                Max amount:{" "}
                <span className="font22GrayNormal">
                  {nft.ethereumPrice} ETH
                </span>
              </Col>
            </Row> */}
          </div>
        </div>

        {/* <div className="text-center mb-3">
          <NavLink style={{ fontSize: "20px" }}>View Data</NavLink>
        </div> */}
      </Modal.Body>

      <Modal.Footer className="p-3 border-0">
        <Button variant="" className="btnGray" onClick={handleClose}>
          Reject
        </Button>
        <Button
          className="btnBlue"
          onClick={confirm}
          disabled={isLoading}
          // state={{
          //   nft: {
          //     ...nft,
          //     usdPrice: Number(nft.ethereumPrice * ethprice).toFixed(2),
          //   },
          // }}
          // to={"/MarketplaceInProcess"}
        >
          {isLoading ? "Please wait.." : "Confirm"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MarketplaceInfo;
