import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const CurrencyTab = () => {
  return (
    <div className="currencyTab">
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="USD" className="me-3" />
        <label htmlFor="USD">USD</label>
      </div>
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Personal Corner Coing" className="me-3" />
        <label htmlFor="Personal Corner Coing">Personal Corner Coing</label>
      </div>
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Etherum" className="me-3" />
        <label htmlFor="Etherum">Etherum</label>
      </div>
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Crypto Curreny" className="me-3" />
        <label htmlFor="Crypto Curreny">Crypto Curreny</label>
      </div>
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Bit Coin" className="me-3" />
        <label htmlFor="Bit Coin">Bit Coin</label>
      </div>
    </div>
  );
};

export default CurrencyTab;
