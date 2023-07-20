import React, { useState } from "react";
import { Nav, Pagination } from "react-bootstrap";
import AvatarImg from "../../assets/images/admin/Screenshot_3.png";

const EmailListing = () => {
  const [key, setKey] = useState(null);

  const toggleFunc = (k) => {
    if (k) {
      const left = document.getElementById("emailListLeft");
      const right = document.getElementById("emailListRight");
      left.style.transition = "all 300ms";
      right.style.transition = "all 300ms";
      left.style.width = "35%";
      right.style.display = "block";
      right.style.width = "65%";
    }
  };

  return (
    <div id="emailListLeft" className="emailList">
      <div className="customNavTabsParent">
        <Nav
          onSelect={(k) => {
            setKey(k);
            toggleFunc(k);
          }}
          defaultActiveKey={key}
        >
          {[...Array(7)].map((_, i) => (
            <Nav.Item key={i}>
              <Nav.Link eventKey={i + 1}>
                <div className="d-flex align-items-center justify-content-between content">
                  <div className="d-flex align-items-center profile">
                    <img src={AvatarImg} alt="" className="me-3" />
                    <div className="d-flex align-items-start flex-column">
                      <h5 className="mb-1 name">Kamil Borger</h5>
                      <p className="mb-2 bio">
                        Lorem ipsum dolor sit amet, consectetu
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center me-4 rightPart">
                    <span className="mb-2 emailCount">2</span>
                    <span className="time">4.11 PM</span>
                  </div>
                  <div className="detailIcon">
                    <svg
                      width="4"
                      height="14"
                      viewBox="0 0 4 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                        fill="#9B9B9B"
                      />
                      <path
                        d="M2 9C3.10457 9 4 8.10457 4 7C4 5.89543 3.10457 5 2 5C0.89543 5 0 5.89543 0 7C0 8.10457 0.89543 9 2 9Z"
                        fill="#9B9B9B"
                      />
                      <path
                        d="M2 14C3.10457 14 4 13.1046 4 12C4 10.8954 3.10457 10 2 10C0.89543 10 0 10.8954 0 12C0 13.1046 0.89543 14 2 14Z"
                        fill="#9B9B9B"
                      />
                    </svg>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      <div className="paginationMain justify-content-center mt-4 w-100 mb-4">
        {/* <div className="pageEntries">
                    Showing 1 to 20 of 12 entries
                  </div> */}
        <div className="d-flex justify-content-center paginationCustom">
          <Pagination>
            <Pagination.First />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default EmailListing;
