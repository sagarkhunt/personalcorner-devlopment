import React from "react";

const PaymentTab = () => {
  return (
    <div className="currencyTab">
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Paypal" className="me-3" />
        <label htmlFor="Paypal">Paypal</label>
      </div>
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Stripe" className="me-3" />
        <label htmlFor="Stripe">Stripe</label>
      </div>
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Wallet Only" className="me-3" />
        <label htmlFor="Wallet Only">Wallet Only</label>
      </div>
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Direct Bank Transfer" className="me-3" />
        <label htmlFor="Direct Bank Transfer">Direct Bank Transfer</label>
      </div>
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="Credit Card" className="me-3" />
        <label htmlFor="Credit Card">Credit Card</label>
      </div>
    </div>
  );
};

export default PaymentTab;
