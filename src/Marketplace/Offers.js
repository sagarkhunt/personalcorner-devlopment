import React, { Fragment } from "react";
import Table from "./common/Table";
import Hero from "../assets/images/hero.svg";
import SalesPrice from "../assets/images/salesPrice.svg";

const Offers = () => {
  const TableHeader = [
    { id: 1, name: "ATHLETE NFT" },
    { id: 2, name: "SALES PRICE" },
    { id: 3, name: "USD PRICE" },
    { id: 4, name: "SERIAL" },
    { id: 5, name: "DATE" },
    { id: 6, name: "BUYER" },
    { id: 7, name: "TX" },
  ];

  const TableContent = [
    {
      id: 1,
      nftHeroImage: Hero,
      name: "Sauce Gardner",
      frame: "Hall of Frame",
      series: "Series 1",
      pImage: SalesPrice,
      salesPrice: "0.252 WETH",
      usdPrice: "$382.87",
      serialNo: "#1920",
      date: "Sep 24, 22 12:28AM",
      buyer: "3DF3892",
    },
    {
      id: 2,
      nftHeroImage: Hero,
      name: "Sauce Gardner",
      frame: "Hall of Frame",
      series: "Series 1",
      pImage: SalesPrice,
      salesPrice: "0.252 WETH",
      usdPrice: "$382.87",
      serialNo: "#1920",
      date: "Sep 24, 22 12:28AM",
      buyer: "3DF3892",
    },
    {
      id: 3,
      nftHeroImage: Hero,
      name: "Sauce Gardner",
      frame: "Hall of Frame",
      series: "Series 1",
      pImage: SalesPrice,
      salesPrice: "0.252 WETH",
      usdPrice: "$382.87",
      serialNo: "#1920",
      date: "Sep 24, 22 12:28AM",
      buyer: "3DF3892",
    },
    {
      id: 4,
      nftHeroImage: Hero,
      name: "Sauce Gardner",
      frame: "Hall of Frame",
      series: "Series 1",
      pImage: SalesPrice,
      salesPrice: "0.252 WETH",
      usdPrice: "$382.87",
      serialNo: "#1920",
      date: "Sep 24, 22 12:28AM",
      buyer: "3DF3892",
    },
    {
      id: 5,
      nftHeroImage: Hero,
      name: "Sauce Gardner",
      frame: "Hall of Frame",
      series: "Series 1",
      pImage: SalesPrice,
      salesPrice: "0.252 WETH",
      usdPrice: "$382.87",
      serialNo: "#1920",
      date: "Sep 24, 22 12:28AM",
      buyer: "3DF3892",
    },
    {
      id: 6,
      nftHeroImage: Hero,
      name: "Sauce Gardner",
      frame: "Hall of Frame",
      series: "Series 1",
      pImage: SalesPrice,
      salesPrice: "0.252 WETH",
      usdPrice: "$382.87",
      serialNo: "#1920",
      date: "Sep 24, 22 12:28AM",
      buyer: "3DF3892",
    },
  ];

  return (
    <Fragment>
      <div className="mt-5">
        <Table headerData={TableHeader} tableContent={TableContent} />
      </div>
    </Fragment>
  );
};

export default Offers;
