import moment from "moment";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import ActionTx from "../../assets/images/Action.svg";
import SalesPrice from "../../assets/images/salesPrice.svg";

const CommonTable = (props) => {
  return (
    <>
      <div className="table-responsive">
        <Table hover className="tableArea">
          <thead>
            <tr>
              {props &&
                props.headerData &&
                props.headerData.map((header, index) => {
                  return <th key={index}>{header && header.name}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {props &&
              props.tableContent &&
              props.tableContent.map((content, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Row>
                        <Col xxl={2}>
                          <img
                            src={content && content.imageUrl}
                            alt="nftImage"
                            className="hero-image"
                          />
                        </Col>
                        <Col xxl={10}>
                          <div>{content && content.name}</div>
                          <div
                            style={{
                              fontStyle: "normal",
                              color: "#C0E3FC",
                              fontSize: 16,
                            }}
                          >
                            {content && content.tier}
                            <span className="mx-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 12 13"
                                fill="none"
                              >
                                <circle cx="6" cy="6.5" r="6" fill="#C0E3FC" />
                              </svg>
                            </span>
                            <span>{content && content.category}</span>
                          </div>
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Row>
                        <Col xxl={2}>
                          <img src={SalesPrice} alt="pImage" />
                        </Col>
                        <Col xxl={10} className="mt-1">
                          {content && content.totalEth} ETH
                        </Col>
                      </Row>
                    </td>
                    <td>$ {content && content.totalUsd}</td>
                    <td>{content && content.transactionId}</td>
                    <td>{content && moment(content.date).format("lll")}</td>
                    <td>
                      {/* {content && content.buyer} */}
                      <span
                        className="d-inline-block text-truncate"
                        style={{ maxWidth: "100px" }}
                        data-bs-toggle="tooltip"
                        title={content.buyer}
                      >
                        {content.buyer}
                      </span>
                    </td>
                    <td
                      onClick={() => {
                        window.location.href = `https://api.sandbox.x.immutable.fyi/v1/trades/${content.transactionId}`;
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <img src={ActionTx} alt="actionTx" />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CommonTable;
