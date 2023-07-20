import React, { useEffect, useState } from "react";
import { Row, Col, Tabs, Tab, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Gear from "../Athlete/Gear";
import SalesHistory from "../Athlete/SalesHistory";

import MarketplaceInfo from "../Marketplace/MarketplaceInfo";
import { getCollectionInfo } from "../store/collection/collection.fetch";
import { collectionSetState } from "../store/collection/collection.slice";
import { fetchCollectionNftsTiers } from "../store/nft/nft.fetch";
import { nftSetState } from "../store/nft/nft.slice";
import MarketplaceDetails from "./MarketplaceDetails";
import MarketplaceStats from "./MarketplaceStats";
import Offers from "./Offers";

const MarketplaceMain = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [nft, setNft] = useState(null);

  useEffect(() => {
    setNft(null);
    dispatch(getCollectionInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchCollectionNftsTiers(id));

    return () => {
      dispatch(
        collectionSetState({ key: "collectionInfo.loading", value: true })
      );

      dispatch(
        nftSetState([
          { key: "nftsTiers.loading", value: true },
          { key: "nftsTiers.records", value: [] },
        ])
      );
    };
  }, [dispatch, id]);

  const collectionInfo = useSelector(
    (_state) => _state.collection.collectionInfo
  );

  return (
    <Row className="mtSmall">
      <Col xxl={12} xl={12}>
        {collectionInfo.loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <Tabs defaultActiveKey="info" className="mb-3 navCustom">
            <Tab eventKey="info" title="INFO">
              <MarketplaceInfo setNft={setNft} nft={nft} />
            </Tab>
            <Tab eventKey="gear" title="GEAR">
              <Gear playerId={id} />
            </Tab>
            <Tab eventKey="details" title="DETAILS">
              <MarketplaceDetails setNft={setNft} nft={nft} />
            </Tab>
            <Tab eventKey="stats" title="STATS">
              <MarketplaceStats setNft={setNft} nft={nft} />
            </Tab>
            <Tab eventKey="saleshistory" title="SALES HISTORY">
              <SalesHistory />
            </Tab>
            <Tab eventKey="offer" title="OFFER">
              <Offers />
            </Tab>
          </Tabs>
        )}
      </Col>
    </Row>
  );
};

export default MarketplaceMain;
