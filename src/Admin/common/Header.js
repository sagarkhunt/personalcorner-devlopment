/* eslint-disable jsx-a11y/anchor-is-valid */
import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userPic from "../../assets/images/userPic.png";
import { connectWalletWithMagicLink } from "../../store/auth/auth.fetch";
import { authSetState } from "../../store/auth/auth.slice";
import icEth from "../../assets/images/icEth.png";
import {
  connectAdminWallet,
  disconnectMegicWallet,
  getBalances,
} from "../../utils/contract";

const Header = ({ hideSidebar, setOverlay }) => {
  const { public_key, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (public_key) {
      getBalances(public_key).then((res) => {
        console.log("balance response", res);
        setBalance(Number(res).toFixed(7));
      });
    }
  }, [public_key]);

  const logout = () => {
    localStorage.clear();
    dispatch(
      authSetState([
        { key: "authToken", value: null },
        { key: "user", value: null },
        { key: "role", value: null },
        { key: "public_key", value: null },
      ])
    );
    disconnectMegicWallet();
    navigate("/admin/login");
  };

  const connectMagicLink = async () => {
    setIsLoading(true);
    const user = localStorage.getItem("user");
    console.log("user", user);
    const parsedUser = JSON.parse(user);
    if (parsedUser) {
      const connectObj = await connectAdminWallet(
        parsedUser?.email
          ? parsedUser?.email
          : process.env.REACT_APP_MINTING_EMAIL
      );
      if (!!connectObj.publickey && user) {
        console.log("getting public key", connectObj.publickey);
        dispatch(
          connectWalletWithMagicLink(
            JSON.parse(user)?._id,
            connectObj.publickey
          )
        );
      }
    }

    setIsLoading(false);
  };
  return (
    <header className="customHeader">
      <Navbar bg="light" expand="lg" className="navMain">
        <Container fluid>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

          <button
            className="sidebarButton"
            type="button"
            onClick={() => {
              setOverlay();
              hideSidebar();
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Navbar.Collapse id="responsive-navbar-nav" className="d-block">
            <div className="searchMain">
              <div className="">
                <svg
                  id="icon_search"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.804"
                  height="19.804"
                  viewBox="0 0 19.804 19.804"
                >
                  <path
                    id="icon_search-2"
                    data-name="icon_search"
                    d="M15.72,13.9a8.388,8.388,0,0,0,1.733-5.166A8.689,8.689,0,0,0,8.788,0,8.8,8.8,0,0,0,0,8.734a8.8,8.8,0,0,0,8.788,8.734,8.252,8.252,0,0,0,5.2-1.722l3.713,3.69a1.2,1.2,0,0,0,1.733,0,1.184,1.184,0,0,0,0-1.722Zm-6.931.984a6.216,6.216,0,0,1-6.313-6.15,6.313,6.313,0,0,1,12.625,0A6.216,6.216,0,0,1,8.788,14.884Z"
                    transform="translate(0)"
                    fill="#bcbccb"
                  />
                </svg>
              </div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search transactions, invoices or help"
                  className="border-0 search"
                  aria-label="Search"
                />
              </Form>
            </div>

            <Nav className="ms-auto">
              <Nav.Link
                href="#"
                className="d-block d-lg-none"
                onClick={handleShow}
              >
                <svg
                  id="icon_search"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.804"
                  height="19.804"
                  viewBox="0 0 19.804 19.804"
                >
                  <path
                    id="icon_search-2"
                    data-name="icon_search"
                    d="M15.72,13.9a8.388,8.388,0,0,0,1.733-5.166A8.689,8.689,0,0,0,8.788,0,8.8,8.8,0,0,0,0,8.734a8.8,8.8,0,0,0,8.788,8.734,8.252,8.252,0,0,0,5.2-1.722l3.713,3.69a1.2,1.2,0,0,0,1.733,0,1.184,1.184,0,0,0,0-1.722Zm-6.931.984a6.216,6.216,0,0,1-6.313-6.15,6.313,6.313,0,0,1,12.625,0A6.216,6.216,0,0,1,8.788,14.884Z"
                    transform="translate(0)"
                    fill="#bcbccb"
                  />
                </svg>
              </Nav.Link>
              <Nav.Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.804"
                  height="19.804"
                  viewBox="0 0 19.804 19.804"
                >
                  <path
                    id="Support_Iocn"
                    data-name="Support Iocn"
                    d="M9.9,0a9.9,9.9,0,1,0,9.9,9.9A9.931,9.931,0,0,0,9.9,0Zm0,12.378A2.476,2.476,0,1,1,12.378,9.9,2.483,2.483,0,0,1,9.9,12.378Zm0-9.9a7.222,7.222,0,0,1,3.218.743L11.194,5.144a4.445,4.445,0,0,0-2.586,0L6.684,3.218A7.222,7.222,0,0,1,9.9,2.476ZM2.476,9.9a7.222,7.222,0,0,1,.743-3.218L5.144,8.61a4.445,4.445,0,0,0,0,2.586L3.218,13.12A7.222,7.222,0,0,1,2.476,9.9ZM9.9,17.329a7.222,7.222,0,0,1-3.218-.743L8.61,14.66a4.445,4.445,0,0,0,2.586,0l1.925,1.926A7.222,7.222,0,0,1,9.9,17.329Zm6.684-4.208L14.66,11.194a4.445,4.445,0,0,0,0-2.586l1.926-1.925a7.344,7.344,0,0,1,0,6.436Z"
                    transform="translate(0 0)"
                    fill="#bcbccb"
                  />
                </svg>
              </Nav.Link>
              <Nav.Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.142"
                  height="20.142"
                  viewBox="0 0 20.142 20.142"
                >
                  <path
                    id="Chat_Icon"
                    data-name="Chat Icon"
                    d="M14.234,17.486a10,10,0,0,1-1.645.138A9.173,9.173,0,0,1,7.8,16.339c.129,0,.254.026.384.026,5.237,0,9.6-3.339,10.516-7.728a4.768,4.768,0,0,1,1.443,3.322,4.707,4.707,0,0,1-1.273,3.148h.015v5.035ZM1.259,10.6A6.135,6.135,0,0,1,0,6.924C0,3.1,3.663,0,8.183,0s8.183,3.1,8.183,6.924S12.7,13.848,8.183,13.848a9.384,9.384,0,0,1-3.526-.682l-3.4,1.941Z"
                    fill="#bcbccb"
                  />
                </svg>
              </Nav.Link>

              <NavDropdown
                id="collasible-nav-dropdown"
                align="end"
                className="d-flex notificationDropdown"
                disabled
                title={
                  <>
                    <div className="notification"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.142"
                      height="20.142"
                      viewBox="0 0 20.142 20.142"
                    >
                      <path
                        id="Notification_Icon"
                        data-name="Notification Icon"
                        d="M7.553,17.624h5.035a2.518,2.518,0,0,1-5.035,0ZM1.259,16.366a1.259,1.259,0,1,1,0-2.517h.63a5.48,5.48,0,0,0,1.887-3.777V6.295A6.234,6.234,0,0,1,10.071,0a6.233,6.233,0,0,1,6.293,6.295v3.776a5.477,5.477,0,0,0,1.889,3.777h.63a1.259,1.259,0,0,1,0,2.517Z"
                        fill="#bcbccb"
                      />
                    </svg>
                  </>
                }
              >
                <div className="heading">Notifications</div>
                <NavDropdown.Item
                  href="#"
                  className="d-flex align-items-center"
                >
                  <div className="pic">
                    <img src={userPic} className="img-fluid" />
                  </div>
                  <div className="details ms-2">
                    <div>
                      <span className="fontBold">David Lee</span> sent you a
                      message.
                    </div>
                    <p className="mb-0">4 min ago</p>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  className="d-flex align-items-center"
                >
                  <div className="pic">
                    <img src={userPic} className="img-fluid" />
                  </div>
                  <div className="details ms-2">
                    <div>
                      <span className="fontBold">David Lee</span> sent you a
                      message.
                    </div>
                    <p className="mb-0">4 min ago</p>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  className="d-flex align-items-center"
                >
                  <div className="pic">
                    <img src={userPic} className="img-fluid" />
                  </div>
                  <div className="details ms-2">
                    <div>
                      <span className="fontBold">David Lee</span> sent you a
                      message.
                    </div>
                    <p className="mb-0">4 min ago</p>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  className="d-flex align-items-center"
                >
                  <div className="pic">
                    <img src={userPic} className="img-fluid" />
                  </div>
                  <div className="details ms-2">
                    <div>
                      <span className="fontBold">David Lee</span> sent you a
                      message.
                    </div>
                    <p className="mb-0">4 min ago</p>
                  </div>
                </NavDropdown.Item>
                <div className="text-center">
                  <Nav.Link href="#" className="link">
                    View all notifications
                  </Nav.Link>
                </div>
              </NavDropdown>
              <>
                {public_key ? (
                  <NavDropdown
                    id="collasible-nav-dropdown"
                    align="end"
                    className="d-flex divider headerDropdown"
                    title={
                      <>
                        <span
                          className="d-inline-block text-truncate"
                          style={{ maxWidth: "100px" }}
                          data-bs-toggle="tooltip"
                          title={public_key}
                        >
                          {public_key}
                        </span>
                      </>
                    }
                  >
                    <NavDropdown.Item
                      href="#"
                      className="d-flex align-items-center"
                    >
                      <div className="p-3 d-flex flex-column">
                        <div className="d-flex align-items-center p-3 py-1 h5">
                          <span
                            className="d-inline-block text-truncate"
                            data-bs-toggle="tooltip"
                            title={public_key}
                            style={{ maxWidth: "150px" }}
                          >
                            {public_key}
                          </span>
                          <div
                            className="ms-1"
                            onClick={() => {
                              copy(public_key);
                              toast.success("copied!");
                            }}
                          >
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.93207 0.0898438C1.82707 0.0898438 0.932068 0.984844 0.932068 2.08984V16.0898H2.93207V2.08984H16.9321V0.0898438H2.93207ZM6.93207 4.08984C5.82707 4.08984 4.93207 4.98484 4.93207 6.08984V18.0898C4.93207 19.1948 5.82707 20.0898 6.93207 20.0898H18.9321C20.0371 20.0898 20.9321 19.1948 20.9321 18.0898V6.08984C20.9321 4.98484 20.0371 4.08984 18.9321 4.08984H6.93207ZM6.93207 6.08984H18.9321V18.0898H6.93207V6.08984Z"
                                fill="#667085"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="details ms-2 p-2 h5">
                          <div>
                            <span className="fontBold">Balance : </span>{" "}
                            {balance ? balance : 0} ETH
                          </div>
                        </div>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <button
                    className="btnBlue btnEarnWith ms-3"
                    onClick={connectMagicLink}
                  >
                    {isLoading ? "Please wait.." : "Connect"}
                  </button>
                )}
              </>
              <NavDropdown
                id="collasible-nav-dropdown"
                className="d-flex divider headerDropdown"
                title={
                  <>
                    <div className="d-flex align-items-center ms-0 ms-lg-3">
                      <span className="d-none d-xl-block">{user.fullName}</span>
                      <span className="ms-5 me-3 d-none d-xl-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.615"
                          height="8.664"
                          viewBox="0 0 13.615 8.664"
                          className="ddIcon"
                        >
                          <g
                            id="small-down"
                            transform="translate(13.615 8.664) rotate(180)"
                          >
                            <path
                              id="Path_26"
                              data-name="Path 26"
                              d="M6.808,8.664,0,1.784,1.765,0,6.808,5.1,11.85,0l1.765,1.784Z"
                              transform="translate(0 0)"
                              fill="#a4afb7"
                            />
                          </g>
                        </svg>
                      </span>
                      {/* <div className="userPic">
                        <img src={userPic} />
                      </div> */}
                    </div>
                  </>
                }
              >
                <NavDropdown.Item className="d-lg-block d-xl-none">
                  <span className="fontBold">John Doe</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <span className="fontBold">Status :</span> Online
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Account setting</NavDropdown.Item>
                <NavDropdown.Item href="#">Feedback</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <div className="p-4 mobileSearch">
            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  type="text"
                  placeholder="Search transactions, invoices or help"
                  className="searchField"
                />
              </Form.Group>
              <Button className="btn btnBlue-sm rounded-5 w-100" type="submit">
                Search
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
