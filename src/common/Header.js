/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import { Container, Nav, Navbar, Dropdown, Button } from "react-bootstrap";
import { RightArrowIcon } from "./Icons";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Metamask from "../assets/images/walletIcon/Metamask.png";
// import CoinbaseWallet from "../assets/images/walletIcon/CoinbaseWallet.png";
// import Imtoken from "../assets/images/walletIcon/Imtoken.png";
// import TrustWallet from "../assets/images/walletIcon/TrustWallet.png";
// import WalletConnect from "../assets/images/walletIcon/WalletConnect.png";

// import EthereumBadge from "../assets/images/EthereumBadge.png";
// import DDTrevonDiggs from "../assets/images/DDTrevonDiggs.png";
import icEth from "../assets/images/icEth.png";
import icDisconnectWallet from "../assets/images/icDisconnectWallet.png";
import {
  connectWalletWithMagicLink,
  disConnectWallet,
} from "../store/auth/auth.fetch";
import { connectUserWallet, getBalances } from "../utils/contract";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { fetchAllCollections } from "../store/collection/collection.fetch";
import Loader from "../Admin/common/Spinner";

const Header = () => {
  const dispatch = useDispatch();
  const { user, public_key } = useSelector((_state) => _state.auth);
  // const [mobileMenu, setMobileMenu] = useState(false);
  // const [publicKey, setPublicKey] = useState(public_key);
  const [balance, setBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [collections, setCollections] = useState([]);
  const allCollections = useSelector((s) => s.collection.allCollections);

  useEffect(() => {
    setCollections(allCollections);
  }, [allCollections]);
  useEffect(() => {
    dispatch(fetchAllCollections());
  }, [dispatch]);

  useEffect(() => {
    if (!!public_key) {
      getBalancesFun(public_key);
    }
  }, [public_key, user]);

  const getBalancesFun = async (public_key) => {
    const balanceEth = await getBalances(public_key);
    setBalance(Number(balanceEth).toFixed(2));
  };
  const connectWalletWithEmail = async () => {
    setIsLoading(true);
    const publicKey = await connectUserWallet(user.email);
    console.log("publicKey", publicKey);
    if (!!publicKey) {
      dispatch(connectWalletWithMagicLink(user._id, publicKey.publickey));
      getBalancesFun(publicKey.publickey);
    }
    setIsLoading(false);
  };

  const disConnectWallets = async () => {
    console.log("disconnect wallet");
    dispatch(disConnectWallet());
  };
  return (
    <header className="customHeader">
      {/* <div className="navTop">
        <Container>
          <div className="d-flex align-items-center justify-content-end basicConnectBtns">
            <div className="d-flex align-items-center py-2 px-4 same">
              <WalletIcon />
              <button>Connect Wallet</button>
            </div>
            <div className="d-flex align-items-center py-2 px-4 same">
              <UserIcon />
              {user ? (
                <Fragment>
                  <span className="px-2 text-white">{user.fullName}</span>
                  <NavLink to={"/logout"} className="px-2 text-white">
                    Logout
                  </NavLink>
                </Fragment>
              ) : (
                <NavLink to={"/login"} className="px-2 text-white">
                  Login
                </NavLink>
              )}
            </div>
            <div className="d-flex align-items-center gap-3 py-2 px-4 same">
              <a target="_BLANK" href="#">
                <DiscordIcon />
              </a>
              <a target="_BLANK" href="#">
                <InstagramIcon />
              </a>
              <a target="_BLANK" href="#">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </Container>
      </div> */}

      <Navbar bg="light" expand="xl" className="navMain">
        <Container>
          <NavLink to={"/"} className="logo navbar-brand">
            <div className="d-flex align-items-center gap-3">
              <img src={logo} alt="" />
            </div>
          </NavLink>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="bgLightBlue"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="menuMobile justify-content-end">
            <Nav className="">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="nav-link" to={"/marketplace"}>
                Marketplace
              </NavLink>
              <Dropdown className="same communityDDMain">
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className="nav-link navLinkDropdown">
                  Collections
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className="mt-2"
                  style={{
                    maxHeight: "280px",
                    overflowY: "scroll",
                  }}>
                  {collections?.records?.map((item, i) => {
                    return (
                      <Dropdown.Item
                        key={i}
                        className="px-3 ddLink d-flex align-items-center"
                        href={`/marketplace/${item._id}/info`}>
                        <div className="me-2 imgBG">
                          <img
                            src={item.imageUrl}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        {item.name}
                        <svg
                          className="ddArrow"
                          width="19"
                          height="15"
                          viewBox="0 0 19 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 8.62451H14.0703L9.5 13.1948L11 14.6948L18.0703 7.62451L11 0.554199L9.5 2.0542L14.0703 6.62451H0L0 8.62451Z"
                            fill="#172B4D"
                          />
                        </svg>
                      </Dropdown.Item>
                    );
                  })}

                  {/* <Dropdown.Item
                    className="px-3 ddLink d-flex align-items-center"
                    href="/MarketplaceMain"
                  >
                    <div className="me-2 imgBG">
                      <img src={EthereumBadge} className="img-fluid" alt="" />
                    </div>
                    MATTHEW JUDON
                    <svg
                      className="ddArrow"
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8.62451H14.0703L9.5 13.1948L11 14.6948L18.0703 7.62451L11 0.554199L9.5 2.0542L14.0703 6.62451H0L0 8.62451Z"
                        fill="#172B4D"
                      />
                    </svg>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="px-3 ddLink d-flex align-items-center"
                    href="/MarketplaceMain"
                  >
                    <div className="me-2 imgBG">
                      <img src={EthereumBadge} className="img-fluid" alt="" />
                    </div>
                    MAXX CROSBY
                    <svg
                      className="ddArrow"
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8.62451H14.0703L9.5 13.1948L11 14.6948L18.0703 7.62451L11 0.554199L9.5 2.0542L14.0703 6.62451H0L0 8.62451Z"
                        fill="#172B4D"
                      />
                    </svg>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="px-3 ddLink d-flex align-items-center"
                    href="/MarketplaceMain"
                  >
                    <div className="me-2 imgBG">
                      <img src={EthereumBadge} className="img-fluid" alt="" />
                    </div>
                    HOLLYWOOD BROWN
                    <svg
                      className="ddArrow"
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8.62451H14.0703L9.5 13.1948L11 14.6948L18.0703 7.62451L11 0.554199L9.5 2.0542L14.0703 6.62451H0L0 8.62451Z"
                        fill="#172B4D"
                      />
                    </svg>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="px-3 ddLink d-flex align-items-center"
                    href="/MarketplaceMain"
                  >
                    <div className="me-2 imgBG">
                      <img src={EthereumBadge} className="img-fluid" alt="" />
                    </div>
                    DEANDRE HOPKINS
                    <svg
                      className="ddArrow"
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8.62451H14.0703L9.5 13.1948L11 14.6948L18.0703 7.62451L11 0.554199L9.5 2.0542L14.0703 6.62451H0L0 8.62451Z"
                        fill="#172B4D"
                      />
                    </svg>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="px-3 ddLink d-flex align-items-center"
                    href="/MarketplaceMain"
                  >
                    <div className="me-2 imgBG">
                      <img src={EthereumBadge} className="img-fluid" alt="" />
                    </div>
                    SAUCE GARDNER
                    <svg
                      className="ddArrow"
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8.62451H14.0703L9.5 13.1948L11 14.6948L18.0703 7.62451L11 0.554199L9.5 2.0542L14.0703 6.62451H0L0 8.62451Z"
                        fill="#172B4D"
                      />
                    </svg>
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>

              {/* <NavLink className="nav-link" to={"/Community"}>
                Community
              </NavLink> */}
              <div className="nav-link">Community</div>

              {/* <NavLink className="nav-link" to={"/Events"}>
                Events
              </NavLink> */}
              <div className="nav-link">Events</div>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <div className="d-flex align-items-center justify-content-start basicConnectBtns">
              <Dropdown className="same walletDDMain">
                {user &&
                  user.email &&
                  (!public_key ? (
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                      className=""
                      onClick={connectWalletWithEmail}>
                      {isLoading ? <Loader /> : "Connect Wallet"}
                    </Dropdown.Toggle>
                  ) : (
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                      className="">
                      <span
                        className="d-inline-block text-truncate"
                        style={{ maxWidth: "150px" }}>
                        {public_key}
                      </span>
                    </Dropdown.Toggle>
                  ))}

                <Dropdown.Menu className="mt-2">
                  <div className="d-flex align-items-center p-3 py-1">
                    <div>Connected:</div>
                    {/* <div className="mx-1">
                    <img src={icMetamask} className="img-fluid" alt="" />
                  </div> */}
                    <span
                      className="d-inline-block text-truncate"
                      style={{ maxWidth: "150px" }}>
                      {public_key}
                    </span>
                    <div
                      className="ms-1"
                      onClick={() => {
                        copy(public_key);
                        toast.success("copied!");
                      }}>
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
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
                  <Dropdown.Item
                    className="px-3 ddLink d-flex align-items-center"
                    onClick={() => {
                      disConnectWallets();
                    }}>
                    <div className="me-2 imgBG">
                      <img
                        src={icDisconnectWallet}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    Disconnect Wallet
                  </Dropdown.Item>
                  {/* <Dropdown.Item className="px-3 ddLink d-flex align-items-center">
                    <div className="me-2 imgBG">
                      <img src={CoinbaseWallet} className="img-fluid" alt="" />
                    </div>
                    Coinbase Wallet
                  </Dropdown.Item>
                  <Dropdown.Item className="px-3 ddLink d-flex align-items-center">
                    <div className="me-2 imgBG">
                      <img src={Imtoken} className="img-fluid" alt="" />
                    </div>
                    Imtoken
                  </Dropdown.Item>
                  <Dropdown.Item className="px-3 ddLink d-flex align-items-center">
                    <div className="me-2 imgBG">
                      <img src={TrustWallet} className="img-fluid" alt="" />
                    </div>
                    Trust Wallet
                  </Dropdown.Item>
                  <Dropdown.Item className="px-3 ddLink d-flex align-items-center">
                    <div className="me-2 imgBG">
                      <img src={WalletConnect} className="img-fluid" alt="" />
                    </div>
                    Wallet Connect
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>

              <div className="d-flex align-items-center py-2 px-2  same">
                {user ? (
                  <Fragment>
                    {/* <NavLink to={"/myProfile"}>
                      <span className="px-2">{user.fullName}</span>
                    </NavLink> */}
                    <Dropdown className="same profileDDMain">
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="nav-link navLinkDropdown">
                        {user.fullName}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="mt-2">
                        <Dropdown.Item
                          className="px-3 ddLink d-flex align-items-center"
                          href={`/MyProfile`}>
                          Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="px-3 ddLink d-flex align-items-center"
                          href={`/my-collections`}>
                          MY COLLECTION
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="px-3 ddLink d-flex align-items-center"
                          href={`/PlayerLineUp`}>
                          PLAYER LINE-UP
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="px-3 ddLink d-flex align-items-center"
                          href={`/Marketplace`}>
                          MARKETPLACE
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="px-3 ddLink d-flex align-items-center"
                          href={`/wallet`}>
                          WALLET
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <NavLink to={"/logout"} className="px-2">
                      Logout
                    </NavLink>
                  </Fragment>
                ) : (
                  <Fragment>
                    <NavLink to={"/login"} className="px-2 ">
                      Login
                    </NavLink>
                    <RightArrowIcon />
                  </Fragment>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
