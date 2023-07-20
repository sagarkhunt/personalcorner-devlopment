/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import infoTextIcon from "../assets/images/infoTextIcon.png";
import { getImageByTier } from "../utils/tier";

const MarketplaceInProcess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nft, setNft] = useState(null);
  useEffect(() => {
    if (location.state?.nft) {
      setNft(location.state?.nft);
    } else {
      navigate("/marketplace");
    }
  }, [location]);

  useEffect(() => {
    setTimeout(
      () =>
        navigate("/MarketplaceProcessed", {
          state: { nft: location.state?.nft },
        }),
      5000
    );
  }, []);

  return (
    <>
      <div className="LayoutBG athleteSection">
        <div className="d-flex align-items-center flex-column">
          <div className="w-100">
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
              <h2>Your Purchase is being Processed!</h2>
              <p>
                Your payment is processing on the blockchain and will be
                <br />
                confirmed soon.{" "}
                {/* <NavLink className="fontYellow" to="/wallet">
                  View Transaction here
                </NavLink> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketplaceInProcess;
