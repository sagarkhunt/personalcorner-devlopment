import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import avatarImg from "../assets/images/wallet/tableItem.png";

const SecurityTab = () => {
  const showHide = (id) => {
    const input = document.getElementById(id);
    if (input.type === "text") {
      return (input.type = "password");
    } else {
      return (input.type = "text");
    }
  };
  return (
    <div className="accountTab">
      <h4 className="mt-5 mainHeading">CHANGE PASSWORD</h4>
      <div className="darkBlueBg">
        <Form>
          <Row className="mt-2">
            {[...Array(2)].map((_, i) => (
              <Col xxl={6} xl={12} key={i}>
                <Form.Group className="mb-3 customInput">
                  <div className="customFormGroup">
                    <Form.Label className="mb-1 customLabel1">
                      Current Password
                    </Form.Label>
                    <Form.Control
                      id={i + 1}
                      // disabled
                      type="password"
                      defaultValue={"12345678910"}
                      placeholder={"Current Password"}
                      className="p-0 btnDisable"
                    />
                  </div>
                  <button type="button" onClick={() => showHide(i + 1)}>
                    <PswdViewIcon
                      id={`view${i + 1}`}
                      className={"PswdViewIcon"}
                    />
                    {/* <PswdHideIcon
                      id={`hide${i + 1}`}
                      className={"PswdHideIcon"}
                    /> */}
                  </button>
                </Form.Group>
              </Col>
            ))}
            <Col xxl={12}>
              <button className="w-100 btnChangePswd">CHANGE PASSWORD</button>
            </Col>
          </Row>
        </Form>
        <div></div>
      </div>
    </div>
  );
};

export const PswdViewIcon = ({ className, id }) => {
  return (
    <svg
      id={id}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 28"
      fill="currentColor"
    >
      <path d="M18.8388 0.998047C7.40883 0.998047 1.98167 10.7958 0.665 13.5924C0.445 14.0591 0.445 14.6004 0.665 15.0671C1.98167 17.8654 7.40883 27.6647 18.8388 27.6647C30.2288 27.6647 35.6596 17.9363 36.9996 15.0996C37.2296 14.6113 37.2296 14.0515 36.9996 13.5632C35.6596 10.7265 30.2288 0.998047 18.8388 0.998047ZM18.8388 5.99805C23.4405 5.99805 27.1722 9.72971 27.1722 14.3314C27.1722 18.933 23.4405 22.6647 18.8388 22.6647C14.2372 22.6647 10.5055 18.933 10.5055 14.3314C10.5055 9.72971 14.2372 5.99805 18.8388 5.99805ZM18.8388 9.33138C17.5127 9.33138 16.241 9.85816 15.3033 10.7958C14.3656 11.7335 13.8388 13.0053 13.8388 14.3314C13.8388 15.6575 14.3656 16.9292 15.3033 17.8669C16.241 18.8046 17.5127 19.3314 18.8388 19.3314C20.1649 19.3314 21.4367 18.8046 22.3744 17.8669C23.312 16.9292 23.8388 15.6575 23.8388 14.3314C23.8388 13.0053 23.312 11.7335 22.3744 10.7958C21.4367 9.85816 20.1649 9.33138 18.8388 9.33138Z" />
    </svg>
  );
};

export const PswdHideIcon = ({ className, id }) => {
  return (
    <svg
      id={id}
      className={className}
      viewBox="0 0 38 28"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.665 13.3503C1.98167 10.5536 7.40883 0.755859 18.8388 0.755859C30.2288 0.755859 35.6596 10.4843 36.9996 13.321C37.2296 13.8093 37.2296 14.3691 36.9996 14.8574C35.6596 17.6941 30.2288 27.4225 18.8388 27.4225C7.40883 27.4225 1.98167 17.6232 0.665 14.8249C0.445 14.3582 0.445 13.8169 0.665 13.3503ZM27.1722 14.0892C27.1722 9.48753 23.4405 5.75586 18.8388 5.75586C16.6209 5.75586 14.6051 6.62276 13.1118 8.03613L9.71621 5.99878C8.53226 5.2884 6.99661 5.67232 6.28624 6.85627C5.57587 8.04022 5.95978 9.57587 7.14373 10.2862L10.6758 12.4055C10.5641 12.9493 10.5055 13.5124 10.5055 14.0892C10.5055 18.6909 14.2372 22.4225 18.8388 22.4225C20.8637 22.4225 22.7202 21.6999 24.1644 20.4986L27.8563 22.7138C29.0402 23.4241 30.5759 23.0402 31.2862 21.8563C31.9966 20.6723 31.6127 19.1367 30.4287 18.4263L26.877 16.2952C27.0694 15.5926 27.1722 14.8529 27.1722 14.0892ZM23.8248 14.4639C23.8341 14.3396 23.8388 14.2147 23.8388 14.0892C23.8388 12.7631 23.312 11.4913 22.3744 10.5537C21.4367 9.61598 20.1649 9.08919 18.8388 9.08919C17.8834 9.08919 16.9562 9.36263 16.1619 9.86617L23.8248 14.4639ZM13.8435 14.3061C13.8976 15.5533 14.4169 16.7383 15.3033 17.6247C16.241 18.5624 17.5127 19.0892 18.8388 19.0892C19.5933 19.0892 20.3303 18.9186 20.9981 18.5989L13.8435 14.3061Z"
      />
    </svg>
  );
};

export default SecurityTab;
