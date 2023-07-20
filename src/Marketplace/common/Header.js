/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import {
  Nav,
  Navbar,
  Button,
  Badge,
  Modal,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  CartIcon,
  NotifyIcon,
  NavlineIcon,
  NavProfileIcon,
  NavCollectionIcon,
  NavLineupIcon,
  NavMarketPlaceIcon,
  NavWalletIcon,
  Logout,
} from "../../common/Icons";
import coinsPCC from "../../assets/images/coinsPCC.png";
import coinsETH from "../../assets/images/coinsETH.png";
import userPic from "../../assets/images/userPic2.png";
import MetaMask_Fox from "../../assets/images/MetaMask_Fox.png";
// import icMetamask from "../../assets/images/icMetamask.png";
import icEth from "../../assets/images/icEth.png";
// import icSwitchWallet from "../../assets/images/icSwitchWallet.png";
import icDisconnectWallet from "../../assets/images/icDisconnectWallet.png";
import icConnectMetamask from "../../assets/images/icConnectMetamask.png";
import walletconnect from "../../assets/images/walletconnect.png";
import portis from "../../assets/images/portis.png";
import binance from "../../assets/images/binance.png";
import {
  connectUserWallet,
  getBalances,
  getL2Balance,
} from "../../utils/contract";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import {
  connectWalletWithMagicLink,
  disConnectWallet,
} from "../../store/auth/auth.fetch";
import Loader from "../../Admin/common/Spinner";
import { fomatNumberToStandard } from "../../utils/fomatNumber";
import Web3 from "web3";

const Header = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { user, public_key, Pcc } = useSelector((_state) => _state.auth);

  const [modalShow, setModalShow] = React.useState(false);

  const [modalShowCart, setModalShowCart] = React.useState(false);

  const [modalShowWallet, setModalShowWallet] = React.useState(false);
  const [publicKey, setPublicKey] = useState(public_key);
  const [balance, setBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!!public_key) {
      getBalancesFun(public_key);
      setPublicKey(public_key);
    } else {
      setPublicKey(null);
    }
  }, [public_key, user]);

  const getBalancesFun = async (public_key) => {
    let l2Balance = 0;
    let l1Balance = 0;
    let l2BalanceEth = 0;
    try {
      const _balance = await getL2Balance(public_key);
      if (
        _balance &&
        _balance.result &&
        Array.isArray(_balance.result) &&
        _balance.result.length
      ) {
        l2Balance = _balance.result[0].balance;
        l2BalanceEth = Number(Web3.utils.fromWei(l2Balance, "ether")).toFixed(
          7
        );
      }
    } catch (error) {}
    try {
      const balance = await getBalances(public_key);
      l1Balance = balance;
    } catch (error) {}
    const balance = Number(l1Balance) + Number(l2BalanceEth);
    setBalance(balance.toFixed(4));
  };

  const connectWalletWithEmail = async () => {
    setIsLoading(true);
    const publicKey = await connectUserWallet(user.email);
    if (!!publicKey) {
      dispatch(connectWalletWithMagicLink(user._id, publicKey.publickey));
      getBalancesFun(publicKey.publickey);
      setPublicKey(publicKey.publickey);
    }
    setIsLoading(false);
  };
  const disConnectWallets = async () => {
    dispatch(disConnectWallet());
  };
  return (
    <header className="athleteHeader">
      {user && (
        <Fragment>
          <Button className="PCCBalanceButton d-flex align-items-center me-2 d-none d-xxl-flex">
            <img src={coinsPCC} alt="" />
            <div className="ms-0 ms-xxl-2">
              <div className="d-flex align-items-center d-none d-xxl-block">
                PCC Balance
                <svg
                  className="ms-2"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.00134" cy="4" r="3.5" fill="#C63E72" />
                </svg>
              </div>
              <div className="d-flex align-items-center font24">
                {Pcc ? fomatNumberToStandard(Pcc) : 0} PCC
              </div>
            </div>
          </Button>
          {publicKey ? (
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="EthBalanceButton d-flex align-items-center me-2 d-none d-xxl-flex"
              >
                <img src={coinsETH} alt="" />
                <div className="ms-0 ms-xxl-2">
                  <div className="d-flex align-items-center d-none d-xxl-block">
                    Ethereum Balance
                    <svg
                      className="ms-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4.00134" cy="4" r="3.5" fill="#359924" />
                    </svg>
                  </div>
                  <div className="d-flex align-items-center font24">
                    {balance} ETH
                    <svg
                      className="ms-2"
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.50137 4.57095L2.68037 0.749953C2.26637 0.335953 1.59437 0.335953 1.18037 0.749953C0.766373 1.16395 0.766373 1.83595 1.18037 2.24995L5.79437 6.86395C6.18537 7.25495 6.81837 7.25495 7.20837 6.86395L11.8224 2.24995C12.2364 1.83595 12.2364 1.16395 11.8224 0.749953C11.4084 0.335953 10.7364 0.335953 10.3224 0.749953L6.50137 4.57095Z"
                        fill="#5B5B5B"
                      />
                    </svg>
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="mt-2" style={{ minWidth: "350px" }}>
                <div className="d-flex align-items-center p-3 py-1">
                  <div>Connected:</div>
                  {/* <div className="mx-1">
                    <img src={icMetamask} className="img-fluid" alt="" />
                  </div> */}
                  <span
                    className="d-inline-block text-truncate"
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
                <div className="p-3 py-1">
                  <Button variant="" className="balanceBtn w-100">
                    <img src={icEth} className="img-fluid" alt="" />
                    <div className="ps-3">
                      <div>Balance: {balance} ETH</div>
                      <div className="text-start">Ethereum Network</div>
                    </div>
                  </Button>
                </div>
                {/* <div className="w-100">&nbsp;</div> */}
                {/* <Dropdown.Item
                  className="px-3 ddLink"
                  onClick={() => setModalShowWallet(true)}
                >
                  <img src={icSwitchWallet} className="img-fluid me-2" alt="" />
                  Switch Wallet Provider
                </Dropdown.Item> */}
                {/* <div className="w-100">&nbsp;</div> */}
                <Dropdown.Item
                  href="#/action-1"
                  className="py-2 ddLink"
                  onClick={() => {
                    disConnectWallets();
                  }}
                >
                  <img
                    src={icDisconnectWallet}
                    className="img-fluid me-2"
                    alt=""
                  />
                  Disconnect Wallet
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button
              className="d-flex align-items-center me-2 d-xxl-flex"
              variant="light"
              style={{
                padding: "20px",
              }}
              onClick={() => {
                connectWalletWithEmail();
              }}
            >
              {" "}
              {isLoading ? <Loader variant="white" /> : "Connect"}
            </Button>
          )}

          <ModalWallet
            show={modalShowWallet}
            onHide={() => setModalShowWallet(false)}
          />

          <Button
            className="notifyButton btnSize me-2 d-none d-xxl-flex"
            onClick={() => setModalShow(true)}
            disabled
          >
            <Badge bg="" className="btnBadge">
              9
            </Badge>
            <NotifyIcon />
          </Button>
          <Button
            className="cartButton btnSize me-2"
            onClick={() => setModalShowCart(true)}
            disabled
          >
            <Badge bg="" className="btnBadge">
              9
            </Badge>
            <CartIcon />
          </Button>
        </Fragment>
      )}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />

      <ModalCart show={modalShowCart} onHide={() => setModalShowCart(false)} />

      <Navbar expand="" className="navMain">
        <Navbar.Toggle
          className="navButton btnSize"
          aria-controls={`offcanvasNavbar-expand`}
        >
          <NavlineIcon />
        </Navbar.Toggle>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end"
          className=""
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="h-100 flex-grow-1">
              <div className="d-flex flex-wrap mb-4">
                <Button className="PCCBalanceButton d-flex align-items-center me-2 d-block d-xxl-none mb-3 mb-md-0">
                  {/* <img src={coinsPCC} /> */}
                  <div className="ms-0 ms-xxl-2">
                    <div className="d-flex align-items-center">
                      PCC Balance
                      <svg
                        className="ms-2"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4.00134" cy="4" r="3.5" fill="#C63E72" />
                      </svg>
                    </div>
                    <div className="d-flex align-items-center font24">
                      {Pcc ? fomatNumberToStandard(Pcc) : 0} PCC
                    </div>
                  </div>
                </Button>

                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="EthBalanceButton d-flex align-items-center me-2 d-block d-xxl-none"
                  >
                    <img src={coinsETH} alt="" />
                    <div className="ms-0 ms-xxl-2">
                      <div className="d-flex align-items-center">
                        Ethereum Balance
                        <svg
                          className="ms-2"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4.00134" cy="4" r="3.5" fill="#359924" />
                        </svg>
                      </div>
                      <div className="d-flex align-items-center font24">
                        {balance} ETH
                        <svg
                          className="ms-2"
                          width="13"
                          height="8"
                          viewBox="0 0 13 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.50137 4.57095L2.68037 0.749953C2.26637 0.335953 1.59437 0.335953 1.18037 0.749953C0.766373 1.16395 0.766373 1.83595 1.18037 2.24995L5.79437 6.86395C6.18537 7.25495 6.81837 7.25495 7.20837 6.86395L11.8224 2.24995C12.2364 1.83595 12.2364 1.16395 11.8224 0.749953C11.4084 0.335953 10.7364 0.335953 10.3224 0.749953L6.50137 4.57095Z"
                            fill="#5B5B5B"
                          />
                        </svg>
                      </div>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="mt-2" style={{ minWidth: "350px" }}>
                    <div className="d-flex align-items-center p-3 py-1">
                      <div>Connected:</div>
                      <span
                        className="d-inline-block text-truncate"
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
                    <div className="p-3 py-1">
                      <Button variant="" className="balanceBtn w-100">
                        <img src={icEth} className="img-fluid" alt="" />
                        <div className="ps-3">
                          <div>
                            Balance: <span>{balance} ETH</span>
                          </div>
                          <div className="text-start">Ethereum Network</div>
                        </div>
                      </Button>
                    </div>
                    {/* <div className="w-100">&nbsp;</div> */}
                    {/* <Dropdown.Item
                      className="px-3 ddLink"
                      onClick={() => setModalShowWallet(true)}
                    >
                      <img
                        src={icSwitchWallet}
                        className="img-fluid me-2"
                        alt=""
                      />
                      Switch Wallet Provider
                    </Dropdown.Item> */}
                    {/* <div className="w-100">&nbsp;</div> */}
                    {/* <Dropdown.Item href="#/action-1" className="py-2 ddLink">
                      <img
                        src={icDisconnectWallet}
                        className="img-fluid me-2"
                        alt=""
                      />
                      Disconnect Wallet
                    </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>

                {/* <Button className="EthBalanceButton d-flex align-items-center me-2 d-block d-xxl-none">
                    <img src={coinsETH} />
                    <div className="ms-0 ms-xxl-2">
                      <div className="d-flex align-items-center">
                        Ethereum Balance
                        <svg
                          className="ms-2"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4.00134" cy="4" r="3.5" fill="#359924" />
                        </svg>
                      </div>
                      <div className="d-flex align-items-center font24">
                        0.235 ETH
                        <svg
                          className="ms-2"
                          width="13"
                          height="8"
                          viewBox="0 0 13 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.50137 4.57095L2.68037 0.749953C2.26637 0.335953 1.59437 0.335953 1.18037 0.749953C0.766373 1.16395 0.766373 1.83595 1.18037 2.24995L5.79437 6.86395C6.18537 7.25495 6.81837 7.25495 7.20837 6.86395L11.8224 2.24995C12.2364 1.83595 12.2364 1.16395 11.8224 0.749953C11.4084 0.335953 10.7364 0.335953 10.3224 0.749953L6.50137 4.57095Z"
                            fill="#5B5B5B"
                          />
                        </svg>
                      </div>
                    </div>
                  </Button> */}

                <Button
                  className="notifyButton btnSize me-2 d-block d-xxl-none position-relative"
                  onClick={() => setModalShow(true)}
                >
                  <Badge bg="" className="btnBadge">
                    9
                  </Badge>
                  <NotifyIcon />
                </Button>
              </div>

              <NavLink to={"/MyProfile"}>
                <NavProfileIcon /> Profile
              </NavLink>
              <NavLink to={"/my-collections"}>
                <NavCollectionIcon /> MY COLLECTION
              </NavLink>
              <NavLink to={"/PlayerLineUp"}>
                <NavLineupIcon /> PLAYER LINE-UP
              </NavLink>
              <NavLink to={"/Marketplace"}>
                <NavMarketPlaceIcon /> MARKETPLACE
              </NavLink>
              {/* <NavLink to={"/pcc-store"}>
                <NavPccStoreIcon /> PCC STORE
              </NavLink> */}
              <NavLink to={"/wallet"}>
                <NavWalletIcon /> WALLET
              </NavLink>
              {/* <NavLink to={"/Event"}>
                <NavEventIcon /> EVENT
              </NavLink>
              <NavLink to={"/SupportForm"}>
                <NavSupportIcon /> SUPPORT
              </NavLink>
              <NavLink to={"/review-and-ratings"}>
                <NavReviewIcon /> REVIEW AND RATINGS
              </NavLink>
              <NavLink to={"/Settings"}>
                <NavSettingsIcon /> SETTINGS
              </NavLink> */}
              <NavLink to={user ? "/logout" : "/login?redirect=/Marketplace"}>
                <Logout /> {user ? "LOGOUT" : "LOGIN"}
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </header>
  );
};

// Modal Card
function ModalCart(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      className="modalCart"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="col-12 col-lg-auto">
            <h1 className="title mb-0 d-flex">
              Your Bag <div>4</div>
            </h1>
          </div>
          <div className="me-0 me-lg-5 col-12 col-lg-auto">
            <Button className="cartConnectWalletButton d-flex align-items-center p-0">
              <div className="connectWalletIconBG">
                <img
                  src={MetaMask_Fox}
                  className="img-fluid"
                  alt=""
                  style={{ maxWidth: "50px" }}
                />
              </div>
              <div className="ms-2">
                <div className="d-flex align-items-center">
                  Ethereum
                  <svg
                    className="ms-2"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.00134" cy="4" r="3.5" fill="#359924" />
                  </svg>
                </div>
                <div className="d-flex align-items-center font24">
                  0xc6109...1fa6d
                  <svg
                    className="ms-2"
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.50137 4.57095L2.68037 0.749953C2.26637 0.335953 1.59437 0.335953 1.18037 0.749953C0.766373 1.16395 0.766373 1.83595 1.18037 2.24995L5.79437 6.86395C6.18537 7.25495 6.81837 7.25495 7.20837 6.86395L11.8224 2.24995C12.2364 1.83595 12.2364 1.16395 11.8224 0.749953C11.4084 0.335953 10.7364 0.335953 10.3224 0.749953L6.50137 4.57095Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                </div>
              </div>
            </Button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row p-md-3 px-1 py-3 mx-0">
          <div className="col">
            <div className="row">
              <div className="userPic">
                <img src={userPic} className="img-fluid" alt="" />
              </div>
              <div className="col">
                <div className="title">Trevon Diggs Rookie #4262</div>
                <div className="price">0.123 ETH</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <Button className="btn btnDelete">
              <svg
                width="35"
                height="39"
                viewBox="0 0 35 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2625 0.75C14.2932 0.75 13.367 1.13309 12.6808 1.81934L11.8751 2.625H2.50009C2.25163 2.62149 2.00495 2.66739 1.77439 2.76004C1.54382 2.85269 1.33397 2.99024 1.15703 3.1647C0.980084 3.33916 0.839578 3.54704 0.743676 3.77628C0.647774 4.00551 0.598389 4.25152 0.598389 4.5C0.598389 4.74848 0.647774 4.99449 0.743676 5.22372C0.839578 5.45296 0.980084 5.66084 1.15703 5.8353C1.33397 6.00976 1.54382 6.14731 1.77439 6.23996C2.00495 6.33261 2.25163 6.37851 2.50009 6.375H32.5001C32.7486 6.37851 32.9952 6.33261 33.2258 6.23996C33.4564 6.14731 33.6662 6.00976 33.8432 5.8353C34.0201 5.66084 34.1606 5.45296 34.2565 5.22372C34.3524 4.99449 34.4018 4.74848 34.4018 4.5C34.4018 4.25152 34.3524 4.00551 34.2565 3.77628C34.1606 3.54704 34.0201 3.33916 33.8432 3.1647C33.6662 2.99024 33.4564 2.85269 33.2258 2.76004C32.9952 2.66739 32.7486 2.62149 32.5001 2.625H23.1251L22.3194 1.81934C21.6351 1.13309 20.707 0.75 19.7376 0.75H15.2625ZM3.18491 10.125L6.04868 34.9944C6.29618 36.8506 7.89447 38.25 9.76572 38.25H25.2308C27.1021 38.25 28.7021 36.8529 28.9515 34.9797L31.8153 10.125H3.18491Z"
                  fill="#112E88"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="row p-md-3 px-1 py-3 mx-0">
          <div className="col">
            <div className="row">
              <div className="userPic">
                <img src={userPic} className="img-fluid" alt="" />
              </div>
              <div className="col">
                <div className="title">Trevon Diggs Rookie #4262</div>
                <div className="price">0.123 ETH</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <Button className="btn btnDelete">
              <svg
                width="35"
                height="39"
                viewBox="0 0 35 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2625 0.75C14.2932 0.75 13.367 1.13309 12.6808 1.81934L11.8751 2.625H2.50009C2.25163 2.62149 2.00495 2.66739 1.77439 2.76004C1.54382 2.85269 1.33397 2.99024 1.15703 3.1647C0.980084 3.33916 0.839578 3.54704 0.743676 3.77628C0.647774 4.00551 0.598389 4.25152 0.598389 4.5C0.598389 4.74848 0.647774 4.99449 0.743676 5.22372C0.839578 5.45296 0.980084 5.66084 1.15703 5.8353C1.33397 6.00976 1.54382 6.14731 1.77439 6.23996C2.00495 6.33261 2.25163 6.37851 2.50009 6.375H32.5001C32.7486 6.37851 32.9952 6.33261 33.2258 6.23996C33.4564 6.14731 33.6662 6.00976 33.8432 5.8353C34.0201 5.66084 34.1606 5.45296 34.2565 5.22372C34.3524 4.99449 34.4018 4.74848 34.4018 4.5C34.4018 4.25152 34.3524 4.00551 34.2565 3.77628C34.1606 3.54704 34.0201 3.33916 33.8432 3.1647C33.6662 2.99024 33.4564 2.85269 33.2258 2.76004C32.9952 2.66739 32.7486 2.62149 32.5001 2.625H23.1251L22.3194 1.81934C21.6351 1.13309 20.707 0.75 19.7376 0.75H15.2625ZM3.18491 10.125L6.04868 34.9944C6.29618 36.8506 7.89447 38.25 9.76572 38.25H25.2308C27.1021 38.25 28.7021 36.8529 28.9515 34.9797L31.8153 10.125H3.18491Z"
                  fill="#112E88"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="row p-md-3 px-1 py-3 mx-0">
          <div className="col">
            <div className="row">
              <div className="userPic">
                <img src={userPic} className="img-fluid" alt="" />
              </div>
              <div className="col">
                <div className="title">Trevon Diggs Rookie #4262</div>
                <div className="price">0.123 ETH</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <Button className="btn btnDelete">
              <svg
                width="35"
                height="39"
                viewBox="0 0 35 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2625 0.75C14.2932 0.75 13.367 1.13309 12.6808 1.81934L11.8751 2.625H2.50009C2.25163 2.62149 2.00495 2.66739 1.77439 2.76004C1.54382 2.85269 1.33397 2.99024 1.15703 3.1647C0.980084 3.33916 0.839578 3.54704 0.743676 3.77628C0.647774 4.00551 0.598389 4.25152 0.598389 4.5C0.598389 4.74848 0.647774 4.99449 0.743676 5.22372C0.839578 5.45296 0.980084 5.66084 1.15703 5.8353C1.33397 6.00976 1.54382 6.14731 1.77439 6.23996C2.00495 6.33261 2.25163 6.37851 2.50009 6.375H32.5001C32.7486 6.37851 32.9952 6.33261 33.2258 6.23996C33.4564 6.14731 33.6662 6.00976 33.8432 5.8353C34.0201 5.66084 34.1606 5.45296 34.2565 5.22372C34.3524 4.99449 34.4018 4.74848 34.4018 4.5C34.4018 4.25152 34.3524 4.00551 34.2565 3.77628C34.1606 3.54704 34.0201 3.33916 33.8432 3.1647C33.6662 2.99024 33.4564 2.85269 33.2258 2.76004C32.9952 2.66739 32.7486 2.62149 32.5001 2.625H23.1251L22.3194 1.81934C21.6351 1.13309 20.707 0.75 19.7376 0.75H15.2625ZM3.18491 10.125L6.04868 34.9944C6.29618 36.8506 7.89447 38.25 9.76572 38.25H25.2308C27.1021 38.25 28.7021 36.8529 28.9515 34.9797L31.8153 10.125H3.18491Z"
                  fill="#112E88"
                />
              </svg>
            </Button>
          </div>
        </div>

        <Modal.Footer className="p-3">
          <div className="row w-100 mx-0 justify-content-between mb-3">
            <div className="col-auto p-0 font20Blue">Subtotal</div>
            <div className="col-auto p-0 font24Blue">0.25 ETH ($252.32)</div>
          </div>
          <div className="row w-100 mx-0 justify-content-between mb-3">
            <div className="col-auto p-0 font20Blue">Transaction Fee:</div>
            <div className="col-auto p-0 font24Blue">0.003 ETH ($4.29)</div>
          </div>
          <hr />
          <div className="row w-100 mx-0 justify-content-between my-3">
            <div className="col-auto p-0 font20Blue">You will pay</div>
            <div className="col-auto p-0 font24BlueBold">
              0.253 ETH ($256.61)
            </div>
          </div>

          <Button className="btnYellow w-100 justify-content-center">
            PROCEED TO PAYMENT
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}

// Modal Notification
function MyVerticallyCenteredModal({ setModalShow, ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      className="modalNotify"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
            <h1 className="title mb-0 d-flex">
              Notification Inbox <div>4</div>
            </h1>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row p-md-3 px-1 py-3 mx-0 bodrBotm">
          <div className="col-auto">
            <div className="userPic">
              <img src={userPic} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="title">
              Druids <span>placed a</span> $50 bid <span>for</span> Trevon Diggs
              #15272
            </div>
            <div className="date">Nov 12, 2021 at 04:12 AM</div>
            <div className="row mt-2">
              <div className="col-auto">
                <Button className="btn btnAccept">Accept</Button>
              </div>
              <div className="col-auto">
                <Button className="btn btnDecline">Decline</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-md-3 px-1 py-3 mx-0 bodrBotm">
          <div className="col-auto">
            <div className="userPic">
              <img src={userPic} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="title">
              Druids <span>placed a</span> $50 bid <span>for</span> Trevon Diggs
              #15272
            </div>
            <div className="date">Nov 12, 2021 at 04:12 AM</div>
          </div>
        </div>
        <div className="row p-md-3 px-1 py-3 mx-0 bodrBotm">
          <div className="col-auto">
            <div className="userPic">
              <img src={userPic} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="title">
              Druids <span>placed a</span> $50 bid <span>for</span> Trevon Diggs
              #15272
            </div>
            <div className="date">Nov 12, 2021 at 04:12 AM</div>
            <div className="mt-2 msgDetails">
              Hey Daniel, you’ve been an active contributor to the Personal
              Corner Ecosystem. To reward you for your hardwork, you have won a
              ticket to the Personal corner signing in Las Vegas.....
              <Nav.Link href="/" style={{ display: "inline-block" }}>
                Read More
              </Nav.Link>
            </div>
          </div>
        </div>
        <Modal.Footer className="p-4 justify-content-between">
          <Button
            className="btn btnLinkBlue"
            onClick={() => setModalShow(false)}
          >
            Mark all as read
          </Button>
          <NavLink
            className="btn btnDarkBlue"
            to={"/InboxTab"}
            onClick={() => setModalShow(false)}
          >
            View all inbox
          </NavLink>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}

// Modal Switch Wallet
function ModalWallet(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      className="modalCustom"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
            <h1 className="title mb-0">Connect Wallet</h1>
            <p className="content mb-0">
              Connect with one of our available wallet info providers
            </p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3 p-md-5 walletModal">
          <Row>
            <Col xl={3} md={4} className="mb-4">
              <Button variant="">
                <img src={icConnectMetamask} className="img-fluid" alt="" />
              </Button>
            </Col>
            <Col xl={3} md={4} className="mb-4">
              <Button variant="">
                <img src={walletconnect} className="img-fluid" alt="" />
              </Button>
            </Col>
            <Col xl={3} md={4} className="mb-4">
              <Button variant="">
                <img src={portis} className="img-fluid" alt="" />
              </Button>
            </Col>
            <Col xl={3} md={4} className="mb-4">
              <Button variant="">
                <img src={binance} className="img-fluid" alt="" />
              </Button>
            </Col>
            <Col xl={3} md={4} className="mb-4">
              <Button variant="">
                <img src={icConnectMetamask} className="img-fluid" alt="" />
              </Button>
            </Col>
            <Col xl={3} md={4} className="mb-4">
              <Button variant="">
                <img src={walletconnect} className="img-fluid" alt="" />
              </Button>
            </Col>
            <Col xl={3} md={4} className="mb-4">
              <Button variant="">
                <img src={portis} className="img-fluid" alt="" />
              </Button>
            </Col>
            <Col xl={3} md={4} className="mb-4">
              <Button variant="">
                <img src={binance} className="img-fluid" alt="" />
              </Button>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Header;
