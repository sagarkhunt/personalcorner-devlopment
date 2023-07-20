import React from "react";
import { Table } from "react-bootstrap";

const EmailTab = () => {
  const tableData = [
    "New order",
    "Cancelled order",
    "Failed order",
    "Processing order",
    "Completed order",
    "Refunded order",
    "Password Reset",
    "New account",
    "Low Product Quantity",
  ];
  return (
    <div className="table-responsive emailTab">
      <Table hover>
        <thead>
          <tr>
            <th>Email List</th>
            <th>Recipient(s)</th>
            <th>Recipient(s)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => (
            <tr key={i}>
              <td>
                <div className="d-flex align-items-center mb-2 generalInputGroup">
                  <input type="checkbox" id={data} className="me-3" />
                  <label htmlFor={data}>{data}</label>
                </div>
              </td>
              <td>admin@personalcorner.io</td>
              <td>Mangage</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="px-4 mb-4 mt-5">
        <button className="btnBlue">Update</button>
      </div>
    </div>
  );
};

export default EmailTab;
