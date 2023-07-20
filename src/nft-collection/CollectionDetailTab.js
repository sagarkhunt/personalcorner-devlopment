/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
// -- images --
// import bigNFT from "../assets/images/sauceGardnernft.png";
// import ic_sergeant from "../assets/images/ic_sergeant.png";
// import infoImage1 from "../assets/images/infoImage1.png";
import { getImageByTier } from "../utils/tier";
// import crownImage from "../assets/images/crownImage.png";
// import starImage from "../assets/images/starImage.png";
// import infoImage4 from "../assets/images/infoImage4.png";
// import tcList1 from "../assets/images/tcList1.png";
// import tcList2 from "../assets/images/tcList2.png";
// import tcList3 from "../assets/images/tcList3.png";
// import tcList4 from "../assets/images/tcList4.png";
// import infoBigImage1 from "../assets/images/infoBigImage1.png";
// import infoTextIcon from "../assets/images/infoTextIcon.png";
// import collapseImage from "../assets/images/collapse.png";
// import { $CombinedState } from "@reduxjs/toolkit";
// import infoImage from "../assets/images/infoImage.png";
// import icBall from "../assets/images/icBall.png";
// import NFT_TRANS from "../assets/images/NFT_TRANS.png";
// import playerNotAvailableImg from "../assets/images/playerNotAvailableImg.png";
// import helmateaImg from "../assets/images/diggs helmet2.png";

const CollectionDetailTab = ({ nfts, ethPrice, collectionName }) => {
  const [open, setOpen] = useState(false);
  const [selectedNft, setSelectedNft] = useState();

  useEffect(() => {
    if (nfts?.length > 0) {
      setSelectedNft(nfts[0]);
    }
  }, []);

  useEffect(() => {
    if (open === false) {
      setTimeout(() => {
        setOpen(!open);
      }, 1000);
    }
  }, [open]);

  // const infoData = [
  //   {
  //     name: "G.O.A.T",
  //     image: infoImage1,
  //     mainImg: infoImage,
  //     span1: "0.25 ETH",
  //     span2: "($417)",
  //   },
  //   {
  //     name: "G.O.A.T",
  //     image: infoImage1,
  //     mainImg: infoImage,
  //     span1: "0.25 ETH",
  //     span2: "($417)",
  //   },
  //   {
  //     name: "SIGNED REPLICA HELMET",
  //     image: infoImage1,
  //     mainImg: helmateaImg,
  //     span1: "500 PCC",
  //     span2: "",
  //   },
  //   {
  //     name: "G.O.A.T",
  //     image: infoImage1,
  //     mainImg: infoImage,
  //     span1: "0.25 ETH",
  //     span2: "($417)",
  //   },
  //   {
  //     name: "SIGNED REPLICA HELMET",
  //     image: infoImage1,
  //     mainImg: helmateaImg,
  //     span1: "500 PCC",
  //     span2: "",
  //   },
  //   {
  //     name: "SIGNED REPLICA HELMET",
  //     image: infoImage1,
  //     mainImg: helmateaImg,
  //     span1: "500 PCC",
  //     span2: "",
  //   },
  // ];

  return (
    <>
      <div>
        <Row className="mt-4 lineUpPage">
          <Col xxl={7} xl={12}>
            <div className="w-100 mb-5">
              <Row className="mt-2 listingAreaMobile">
                {nfts.map((item, i) => (
                  <Col xxl={4} xl={4} lg={6} md={6} className="mb-3" key={i}>
                    <Card
                      className="h-100 position-relative justify-content-end info-card"
                      onClick={() => setSelectedNft(item)}
                    >
                      <div className="info-img infoImg">
                        {/* <img src={infoImage1} alt="" /> */}
                        {getImageByTier(item.tier)}
                      </div>
                      {/* <div className="info-Number">99</div> */}
                      <div className="h-100 info-card-img d-flex align-items-center justify-content-center ">
                        <Card.Img
                          className="img-fluid mainImg"
                          src={item.imageUrl}
                        />
                      </div>
                      <div className="info-card-body">
                        <Card.Body className="p-2 d-flex justify-content-between">
                          <div className="ms-1">
                            <Card.Title className="mb-2 info-card-title">
                              <span className="title">{item.name}</span>
                            </Card.Title>
                            <div className="m-0 card-textNew">
                              <div className="info-card-body-text align-items-center">
                                <div className="me-1 svgOuter">
                                  <DiamondIcon className={"DiamondIcon"} />
                                </div>
                                <div className="inner-text-info">
                                  <span className="me-1 eth1">
                                    {item.ethereumPrice} ETH
                                  </span>
                                  <span className="eth2">
                                    (${" "}
                                    {Number(
                                      item.ethereumPrice * ethPrice
                                    ).toFixed(7)}
                                    )
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="playerLabel">CB</div> */}
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col xxl={5} xl={12}>
            <div className="w-100 mt-2 mb-5">
              <Card className={`mb-4 singleSelectedCollectionCard`}>
                <div className="m-auto text-center">
                  <Card.Img
                    variant="top"
                    className="img-fluid imgBig"
                    src={selectedNft?.imageUrl}
                  />
                </div>
                <Card.Body className="body1">
                  <Card.Text className="mb-1">{collectionName}</Card.Text>
                  <Card.Title className="mb-0">{selectedNft?.name}</Card.Title>
                </Card.Body>
                <Card.Body className="d-flex align-items-start justify-content-between body2">
                  <div className="leftTitle text-start mx-1 d-flex flex-column">
                    <span className="mb-2 title">PRICE</span>
                    <span className="detail">
                      <strong>{selectedNft?.ethereumPrice}</strong> ETH
                    </span>
                  </div>
                  <div className="rightTitle text-end mx-1 d-flex flex-column align-items-end">
                    <span className="mb-2 title">USD</span>
                    <span className="detail">
                      ${" "}
                      {Number(selectedNft?.ethereumPrice * ethPrice).toFixed(7)}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

const DiamondIcon = ({ className }) => (
  <svg
    className={className}
    width="11"
    height="16"
    viewBox="0 0 11 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.37701 0.203125C5.27142 0.203125 5.18277 0.257221 5.12453 0.335615C5.11973 0.342014 5.11151 0.344199 5.10703 0.351238L0.627387 7.39069C0.621948 7.399 0.621243 7.40954 0.616763 7.41818C0.606524 7.43834 0.599719 7.4583 0.59364 7.48005C0.58852 7.49893 0.583991 7.51741 0.582391 7.53692C0.580791 7.55868 0.582636 7.57952 0.585515 7.60192C0.587115 7.6144 0.583566 7.62726 0.586765 7.63942C0.589005 7.64806 0.595135 7.65484 0.598014 7.66316C0.600894 7.67148 0.599799 7.68047 0.603639 7.68879C0.609079 7.70127 0.618793 7.70914 0.625512 7.72066C0.636071 7.7389 0.647056 7.75623 0.661135 7.77191C0.676493 7.78918 0.693517 7.80346 0.711756 7.8169C0.721675 7.82426 0.728069 7.83457 0.738628 7.84065L5.21828 10.4004C5.22531 10.4046 5.23341 10.4063 5.24077 10.4098C5.24941 10.414 5.25774 10.4169 5.26702 10.4204C5.30254 10.4332 5.33958 10.4423 5.37701 10.4423C5.41445 10.4423 5.45149 10.4336 5.487 10.4204C5.49628 10.4169 5.50429 10.4134 5.51325 10.4092C5.52061 10.4057 5.52871 10.404 5.53575 10.3998L10.0154 7.84003C10.0173 7.83875 10.0185 7.83661 10.0204 7.83565C10.053 7.81613 10.0817 7.79105 10.106 7.76066C10.1118 7.7533 10.1156 7.74491 10.121 7.73691C10.1316 7.72123 10.1433 7.70671 10.151 7.68879C10.1545 7.68047 10.1531 7.6718 10.156 7.66316C10.1589 7.65484 10.165 7.64806 10.1673 7.63942C10.1701 7.62726 10.1675 7.6144 10.1691 7.60192C10.172 7.57952 10.1736 7.55838 10.1716 7.5363C10.17 7.51678 10.1655 7.49831 10.1604 7.47943C10.1543 7.45767 10.1478 7.43772 10.1373 7.41756C10.1328 7.40892 10.1318 7.399 10.1266 7.39069L5.64699 0.351238C5.64283 0.344519 5.63429 0.341694 5.62949 0.335615C5.57126 0.257221 5.4826 0.203125 5.37701 0.203125ZM5.37701 1.02306V5.96267L9.14047 7.60379L5.37701 9.80237V5.96267L1.39733 7.34256L5.37701 1.02306ZM0.84612 8.84682C0.775605 8.85826 0.709031 8.89362 0.658635 8.94994C0.558163 9.06289 0.550293 9.23082 0.639886 9.35241L5.11953 15.4319C5.12369 15.4374 5.13037 15.4393 5.13453 15.4444C5.15597 15.4703 5.18167 15.4903 5.21015 15.5082C5.22103 15.5152 5.22956 15.524 5.2414 15.5294C5.28299 15.5489 5.32806 15.5619 5.37701 15.5619C5.42597 15.5619 5.47103 15.5489 5.51263 15.5294C5.52415 15.524 5.533 15.5149 5.54387 15.5082C5.57235 15.4903 5.59805 15.4703 5.61949 15.4444C5.62365 15.4393 5.63065 15.4374 5.63449 15.4319L10.1141 9.35241C10.2037 9.23082 10.1962 9.06289 10.0954 8.94994C9.99492 8.83667 9.82879 8.81007 9.69792 8.88494L5.37701 11.3541L1.0561 8.88494C0.990828 8.84783 0.916634 8.83538 0.84612 8.84682ZM2.0529 10.1917L5.37701 12.1422V14.6426L2.0529 10.1917Z"
      fill="white"
    />
  </svg>
);

export default CollectionDetailTab;
