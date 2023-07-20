import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import infoTextIcon from "../assets/images/infoTextIcon.png";
import radiallines from "../assets/images/radial_lines.png";
import { getImageByTier } from "../utils/tier";

const MarketplaceProcessed = () => {
  const location = useLocation();
  const [nft, setNft] = useState(null);

  useEffect(() => {
    if (location.state?.nft) {
      setNft(location.state?.nft);
    }
  }, [location]);

  return (
    <>
      <div className="LayoutBG athleteSection">
        <div className="d-flex align-items-center flex-column position-relative">
          <div className="radial_lines">
            <img src={radiallines} className="img-fluid" alt="" />
          </div>
          <div className="w-100" style={{ zIndex: "1" }}>
            <Row className="mt-4 listingAreaMobile justify-content-center">
              <Col xxl={3} xl={4} lg={4} md={6} sm={6} className="mb-3">
                <Card className="info-card">
                  <div className="info-img">{getImageByTier(nft?.tier)}</div>
                  <div className="info-card-img">
                    <Card.Img className="img-fluid" src={nft?.imageUrl} />
                  </div>
                  <div className="info-card-body">
                    <Card.Body>
                      <Card.Title className="mb-2 info-card-title">
                        {nft?.name}
                      </Card.Title>
                      <div className="p-1 m-0 card-textNew">
                        <div className="info-card-body-text">
                          <div className="me-1">
                            <img src={infoTextIcon} alt="" />
                          </div>
                          <div className="inner-text-info">
                            {nft?.ethereumPrice} ETH (${nft?.usdPrice})
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>

            <div className="mx-auto col-auto text-center mt-4 MarketplaceInProcess">
              <h2>You successfully purchased NFT</h2>
              <p>
                Congratulations, you successfully purchased {nft?.name}
                <br />
              </p>
              <div className="btnWidthCustom mx-auto my-3">
                <NavLink
                  className="btnYellow w-100 d-block"
                  to={"/my-collections"}
                >
                  VIEW NFT
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketplaceProcessed;
