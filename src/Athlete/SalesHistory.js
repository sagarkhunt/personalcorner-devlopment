import React, { Fragment, useEffect, useState } from "react";
import CommonTable from "./common/Table";
// import Hero from "../assets/images/hero.svg";
// import SalesPrice from "../assets/images/salesPrice.svg";
import { getPlayertrade } from "../store/trade/trade.fetch";
import { useSelector } from "react-redux";

const SalesHistory = () => {
  const [trades, setTrades] = useState([]);

  const collectionInfo = useSelector(
    (_state) => _state.collection.collectionInfo
  );

  useEffect(() => {
    getPlayertrade(collectionInfo?.data?.playerId).then((res) => {
      setTrades(res);
    });
  }, [collectionInfo]);

  const TableHeader = [
    { id: 1, name: "ATHLETE NFT" },
    { id: 2, name: "SALES PRICE" },
    { id: 3, name: "USD PRICE" },
    { id: 4, name: "SERIAL" },
    { id: 5, name: "DATE" },
    { id: 6, name: "BUYER" },
    { id: 7, name: "TX" },
  ];

  return (
    <Fragment>
      <div className="mt-5">
        {trades.length > 0 ? (
          <CommonTable headerData={TableHeader} tableContent={trades} />
        ) : (
          <span
            className="w-100 d-flex align-item-center justify-content-center"
            style={{ padding: "25px", color: "white", fontSize: "35px" }}
          >
            No Data Available
          </span>
        )}
      </div>
    </Fragment>
  );
};

export default SalesHistory;
