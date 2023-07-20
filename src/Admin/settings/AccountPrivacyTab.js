import React from "react";

const AccountPrivacyTab = () => {
  return (
    <div className="currencyTab">
      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="1" className="me-3" />
        <label htmlFor="1">
          Allow customers to place orders without an account{" "}
        </label>
      </div>

      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="2" className="me-3" />
        <label htmlFor="2">
          Allow customers to log into an existing account during checkout{" "}
        </label>
      </div>

      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="3" className="me-3" />
        <label htmlFor="3">
          Allow customers to create an account during checkout
        </label>
      </div>

      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="4" className="me-3" />
        <label htmlFor="4">
          Allow customers to create an account on the "My account" page
        </label>
      </div>

      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="5" className="me-3" />
        <label htmlFor="5">
          When creating an account, automatically generate an account username
          for the customer based on their name, surname or email
        </label>
      </div>

      <div className="d-flex align-items-center mb-4 generalInputGroup">
        <input type="checkbox" id="6" className="me-3" />
        <label htmlFor="6">
          When creating an account, send the new user a link to set their
          password
        </label>
      </div>
    </div>
  );
};

export default AccountPrivacyTab;
