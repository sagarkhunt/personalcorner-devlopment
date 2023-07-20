/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import logo from "../../assets/images/logoAdmin.png";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  const location = useLocation();
  // const { user } = useSelector((_state) => _state.auth);
  return (
    <>
      <aside className="sidebar" id="sideBarId2">
        <NavLink to={"/admin/dashboard"} className="logo navbar-brand">
          <div className="d-flex align-items-center justify-content-center gap-2">
            <img src={logo} alt="" />
          </div>
        </NavLink>

        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem
              className={
                location.pathname === "/admin/dashboard" ? "active" : ""
              }
            >
              <NavLink className="nav-link" to={"/admin/dashboard"}>
                <span className="me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.789"
                    height="19.789"
                    viewBox="0 0 19.789 19.789"
                  >
                    <path
                      id="Union_8"
                      data-name="Union 8"
                      d="M16.079,19.789a1.169,1.169,0,0,1-1.238-1.237V7.421a1.169,1.169,0,0,1,1.238-1.237h2.473a1.168,1.168,0,0,1,1.237,1.237V18.552a1.168,1.168,0,0,1-1.237,1.237Zm-7.421,0a1.168,1.168,0,0,1-1.237-1.237V1.237A1.168,1.168,0,0,1,8.658,0h2.473a1.168,1.168,0,0,1,1.237,1.237V18.552a1.168,1.168,0,0,1-1.237,1.237Zm-7.421,0A1.169,1.169,0,0,1,0,18.552V13.605a1.169,1.169,0,0,1,1.237-1.238H3.71a1.17,1.17,0,0,1,1.238,1.238v4.947A1.169,1.169,0,0,1,3.71,19.789Z"
                      fill="#a5a4bf"
                    />
                  </svg>
                </span>
                Dashboard
              </NavLink>
            </MenuItem>
            {/* ===== 999 ===== */}
            <SubMenu
              title={
                <>
                  <span className="me-3">
                    <svg
                      id="icon_inbox"
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.804"
                      height="17.329"
                      viewBox="0 0 19.804 17.329"
                    >
                      <path
                        id="Path_358"
                        data-name="Path 358"
                        d="M18.566,1H1.238A1.237,1.237,0,0,0,0,2.238V17.091a1.237,1.237,0,0,0,1.238,1.238H18.566A1.237,1.237,0,0,0,19.8,17.091V2.238A1.237,1.237,0,0,0,18.566,1ZM17.329,15.853H2.476V8.084l6.813,3.893a1.235,1.235,0,0,0,1.228,0l6.813-3.893Zm0-10.62L9.9,9.477,2.476,5.233V3.476H17.329Z"
                        transform="translate(0 -1)"
                        fill="#a5a4bf"
                      />
                    </svg>
                  </span>
                  Inbox
                </>
              }
            >
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/admin/all-notification"}> */}
                <span className="me-3">
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0.443359C13.9998 0.443359 13.0925 0.829155 12.3887 1.44336H2C0.906937 1.44336 0 2.3503 0 3.44336V17.4434C0 18.5364 0.906937 19.4434 2 19.4434H16C17.0931 19.4434 18 18.5364 18 17.4434V7.05469C18.6142 6.35083 19 5.44352 19 4.44336C19 2.24606 17.1973 0.443359 15 0.443359ZM15 2.44336C16.1164 2.44336 17 3.32695 17 4.44336C17 5.55977 16.1164 6.44336 15 6.44336C13.8836 6.44336 13 5.55977 13 4.44336C13 3.32695 13.8836 2.44336 15 2.44336Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                All Notifications
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/admin/send-email"}> */}
                <span className="me-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0.435547L0.992188 5.69141C0.378863 6.04901 0 6.70804 0 7.41797V17.4434C0 18.5364 0.906937 19.4434 2 19.4434H18C19.0931 19.4434 20 18.5364 20 17.4434V7.41797C20 6.70804 19.6211 6.04901 19.0078 5.69141L10 0.435547ZM10 2.75195L18 7.41797V7.4668L10 12.4434L2 7.4668V7.41797L10 2.75195ZM10 4.44336L7 7.44336H9V9.82227L10 10.4434L11 9.82227V7.44336H13L10 4.44336Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Sent Emails
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/admin/draft"}> */}
                <span className="me-3">
                  <svg
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.443359C5.39844 0.443359 4.80469 0.755859 4.40625 1.25586L0 7.44336L4.40625 13.6309C4.80469 14.1309 5.39844 14.4434 6 14.4434H22C23.1016 14.4434 24 13.5449 24 12.4434V2.44336C24 1.3418 23.1016 0.443359 22 0.443359H6ZM13.0938 5.25586H13.9062L15.1875 9.53711H14.3125L14.0938 8.63086H12.9062L12.6875 9.53711H11.8125L13.0938 5.25586ZM4.6875 5.34961H5.8125C7.3125 5.34961 7.40625 6.83008 7.40625 7.13086V7.75586H7.5C7.5 9.1543 6.51172 9.53711 5.8125 9.53711H4.6875V5.34961ZM8.40625 5.34961H9.8125C10.0117 5.34961 11.1875 5.33008 11.1875 6.63086C11.1875 7.43164 10.6953 7.74805 10.5938 7.84961L11.3125 9.53711H10.4062L9.8125 7.94336H9.3125V9.53711H8.40625V5.34961ZM15.9062 5.34961H18.3125V6.03711H16.8125V7.13086H18.0938V7.84961H16.8125V9.53711H15.9062V5.34961ZM19 5.34961H22V6.03711H20.8125V9.53711H20V6.03711H19V5.34961ZM5.59375 6.03711V8.84961H5.90625C6.60547 8.84961 6.6875 8.45508 6.6875 7.75586V7.03711C6.58594 6.33789 6.50781 6.03711 5.90625 6.03711H5.59375ZM9.3125 6.03711V7.34961H9.8125C10.0117 7.34961 10.3125 7.25586 10.3125 6.75586C10.3125 6.55664 10.3125 6.03711 9.8125 6.03711H9.3125ZM13.5 6.44336L13.0938 7.94336H13.9062L13.5 6.44336Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Draft
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/admin/deleted-mails"}> */}
                <span className="me-3">
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.97656 0.443359C0.952562 0.443359 0.117 1.21598 0 2.20898L9.97656 8.44336L19.9512 2.20898C19.8342 1.21598 19.0006 0.443359 17.9766 0.443359H1.97656ZM0 4.19531V6.99609V14.4434C0 15.5484 0.895 16.4434 2 16.4434H11.4219H13H13.7578L14.7578 15.4434L13.3438 14.0293C12.9528 13.6383 12.9528 13.0052 13.3438 12.6152L16.1719 9.78711C16.5629 9.39611 17.1959 9.39611 17.5859 9.78711L19 11.2012L20 10.2012V9.44336V5.63867V4.19531L10 10.4434L0 4.19531ZM16.8789 11.9082L15.4648 13.3223L17.5859 15.4434L15.4648 17.5645L16.8789 18.9785L19 16.8574L21.1211 18.9785L22.5352 17.5645L20.4141 15.4434L22.5352 13.3223L21.1211 11.9082L19 14.0293L16.8789 11.9082Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Deleted
                {/* </NavLink> */}
              </MenuItem>
            </SubMenu>

            {/* ===== 999 ==== */}
            <MenuItem>
              {/* <NavLink className="nav-link" to={"/profile"}> */}
              <span className="me-3">
                <svg
                  id="icon_products"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.789"
                  height="19.789"
                  viewBox="0 0 19.789 19.789"
                >
                  <path
                    id="Union_9"
                    data-name="Union 9"
                    d="M17.315,19.789V0h2.473V19.789ZM0,19.789V0H2.473V19.789Zm13.605-6.184V0h2.473V13.605Zm-6.185,0V0h4.948V13.605Zm-3.71,0V0H6.184V13.605Z"
                    fill="#a5a4bf"
                  />
                </svg>
              </span>
              Profile
              {/* </NavLink> */}
            </MenuItem>

            {/* <SubMenu
              title={
                <>
                  <span className="me-3">
                    <svg
                      id="icon_Invoices"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.329"
                      height="19.804"
                      viewBox="0 0 17.329 19.804"
                    >
                      <path
                        id="Path_102"
                        data-name="Path 102"
                        d="M17.091,0H2.238A1.169,1.169,0,0,0,1,1.238V19.8l3.713-2.476L7.189,19.8l2.476-2.476L12.14,19.8l2.476-2.476L18.329,19.8V1.238A1.169,1.169,0,0,0,17.091,0ZM14.615,12.378h-9.9V9.9h9.9Zm0-4.951h-9.9V4.951h9.9Z"
                        transform="translate(-1 0)"
                        fill="#a5a4bf"
                      />
                    </svg>
                  </span>
                  Pages
                </>
              }
              >
              <MenuItem>
                <NavLink className="nav-link" to={"/Pages"}>
                  <span className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="13"
                      viewBox="0 0 9 13"
                    >
                      <text
                        id="_"
                        data-name=""
                        transform="translate(0 11)"
                        fill="#a5a4bf"
                        fontSize="12"
                        fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                      >
                        <tspan x="0" y="0">
                          
                        </tspan>
                      </text>
                    </svg>
                  </span>
                  All Pages
                </NavLink>
              </MenuItem>

              <SubMenu
                className="subMenu"
                title={
                  <>
                    <span className="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="13"
                        viewBox="0 0 9 13"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 11)"
                          fill="#a5a4bf"
                          fontSize="12"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </span>
                    Content Management
                  </>
                }
              >
                <MenuItem>
                  <NavLink className="nav-link" to={"/ContentManagement"}>
                    <span className="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                      >
                        <circle
                          id="Ellipse_6"
                          data-name="Ellipse 6"
                          cx="2.5"
                          cy="2.5"
                          r="2.5"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    Editor [ Content ]
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink className="nav-link" to={"/ContentManagement"}>
                    <span className="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                      >
                        <circle
                          id="Ellipse_6"
                          data-name="Ellipse 6"
                          cx="2.5"
                          cy="2.5"
                          r="2.5"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    Editor [ Options ]
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink className="nav-link" to={"/ContentManagement"}>
                    <span className="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                      >
                        <circle
                          id="Ellipse_6"
                          data-name="Ellipse 6"
                          cx="2.5"
                          cy="2.5"
                          r="2.5"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    Editor [ Advanced]
                  </NavLink>
                </MenuItem>
              </SubMenu>

              <MenuItem>
                <NavLink className="nav-link" to={"/AdminMenuManagement"}>
                  <span className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="13"
                      viewBox="0 0 11 13"
                    >
                      <text
                        id="_"
                        data-name=""
                        transform="translate(0 11)"
                        fill="#a5a4bf"
                        fontSize="12"
                        fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                      >
                        <tspan x="0" y="0">
                          
                        </tspan>
                      </text>
                    </svg>
                  </span>
                  Menu Management
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink className="nav-link" to={"/MediaLibrary"}>
                  <span className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                    >
                      <text
                        id="_"
                        data-name=""
                        transform="translate(0 11)"
                        fill="#a5a4bf"
                        fontSize="12"
                        fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                      >
                        <tspan x="0" y="0">
                          
                        </tspan>
                      </text>
                    </svg>
                  </span>
                  Media Library
                </NavLink>
              </MenuItem>
            </SubMenu> */}

            <MenuItem
              className={location.pathname === "/admin/users" ? "active" : ""}
            >
              <NavLink className="nav-link" to={"/admin/users"}>
                <span className="me-3">
                  <svg
                    id="icon_customers"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.32"
                    height="19.789"
                    viewBox="0 0 17.32 19.789"
                  >
                    <path
                      id="Union_10"
                      data-name="Union 10"
                      d="M0,19.789a7.444,7.444,0,0,1,7.422-7.421H9.9a7.444,7.444,0,0,1,7.423,7.421Zm3.216-2.474H14.227A4.99,4.99,0,0,0,9.9,14.841H7.546A4.992,4.992,0,0,0,3.216,17.314Zm.5-11.131V4.947a4.949,4.949,0,0,1,9.9,0V6.183a4.949,4.949,0,0,1-9.9,0ZM6.185,4.947V6.183a2.475,2.475,0,0,0,4.949,0V4.947a2.475,2.475,0,0,0-4.949,0Z"
                      fill="#a5a4bf"
                    />
                  </svg>
                </span>
                Users
              </NavLink>
            </MenuItem>

            <SubMenu
              title={
                <>
                  <span className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.891"
                      height="20.892"
                      viewBox="0 0 20.891 20.892"
                    >
                      <g id="package" transform="translate(0 512)">
                        <path
                          id="Path_374"
                          data-name="Path 374"
                          d="M194.665-511.914c-.273.143-.318.294-.318,1.077v.673h-.432c-.371,0-.457.012-.592.09a.71.71,0,0,0-.322.514c0,.159.086.31,1.089,1.918a17.268,17.268,0,0,0,1.13,1.693.545.545,0,0,0,.351.09.545.545,0,0,0,.351-.09,17.261,17.261,0,0,0,1.13-1.693c1-1.608,1.089-1.759,1.089-1.918a.71.71,0,0,0-.322-.514c-.135-.078-.22-.09-.592-.09h-.433v-.673c0-.792-.045-.938-.326-1.081-.143-.073-.237-.082-.906-.082S194.8-511.988,194.665-511.914Z"
                          transform="translate(-185.125)"
                          fill="#a5a4bf"
                        />
                        <path
                          id="Path_375"
                          data-name="Path 375"
                          d="M1.632-330.943a.839.839,0,0,0-.2.131A27.74,27.74,0,0,0,0-327.936a.664.664,0,0,0,.322.535l.163.086h9.96c9.821,0,9.96,0,10.115-.082a.7.7,0,0,0,.331-.543,28.529,28.529,0,0,0-1.432-2.873.827.827,0,0,0-.212-.131C19.092-331,1.779-331,1.632-330.943Z"
                          transform="translate(0 -173.626)"
                          fill="#a5a4bf"
                        />
                        <path
                          id="Path_376"
                          data-name="Path 376"
                          d="M60-206.94c0,3.991,0,4.064.082,4.223a.547.547,0,0,0,.245.245c.159.082.224.082,7.671.082s7.512,0,7.671-.082a.547.547,0,0,0,.245-.245c.082-.159.082-.233.082-4.223V-211H60Zm7.059.959a.644.644,0,0,1,.326.53.644.644,0,0,1-.326.53c-.155.078-.237.082-2.142.082s-1.987,0-2.142-.082a.644.644,0,0,1-.326-.53.654.654,0,0,1,.318-.526c.143-.078.241-.082,2.142-.086C66.826-206.063,66.9-206.059,67.059-205.981Z"
                          transform="translate(-57.552 -288.718)"
                          fill="#a5a4bf"
                        />
                      </g>
                    </svg>
                  </span>
                  NFT Collection
                </>
              }
            >
              <MenuItem
                className={
                  location.pathname === "/admin/NFTCollection/NFTCollection"
                    ? "active"
                    : ""
                }
              >
                <NavLink
                  className="nav-link"
                  to={"/admin/NFTCollection/NFTCollection"}
                >
                  <span className="me-3">
                    <svg
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0.744141H2C0.895 0.744141 0 1.63914 0 2.74414V18.7441C0 19.8491 0.895 20.7441 2 20.7441H14C15.105 20.7441 16 19.8491 16 18.7441V2.74414C16 1.63914 15.105 0.744141 14 0.744141ZM8 4.74414C9.7 4.74414 11 6.04414 11 7.74414C11 9.44414 9.7 10.7441 8 10.7441C6.3 10.7441 5 9.44414 5 7.74414C5 6.04414 6.3 4.74414 8 4.74414ZM13 16.7441H3C3 16.7441 3 16.1591 3 15.7441C3 14.1731 5.512 12.7441 8 12.7441C10.488 12.7441 13 14.1731 13 15.7441C13 16.1591 13 16.7441 13 16.7441Z"
                        fill="#A5A4BF"
                      />
                    </svg>
                  </span>
                  All NFT
                </NavLink>
              </MenuItem>
              <MenuItem
                className={
                  location.pathname === "/admin/NFTCollection/AddNFTCollection"
                    ? "active"
                    : ""
                }
              >
                <NavLink
                  className="nav-link"
                  to={"/admin/NFTCollection/AddNFTCollection"}
                >
                  <span className="me-3">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 0.744141C0.897 0.744141 0 1.64114 0 2.74414V16.7441C0 17.8471 0.897 18.7441 2 18.7441H7.58789C7.21189 17.8171 7 16.8061 7 15.7441C7 13.8511 7.66077 12.1141 8.75977 10.7441H8V8.74414H11.1309C12.2779 8.10814 13.596 7.74414 15 7.74414C16.062 7.74414 17.073 7.95603 18 8.33203V2.74414C18 1.64114 17.103 0.744141 16 0.744141H2ZM4 4.74414H6V6.74414H4V4.74414ZM8 4.74414H14V6.74414H8V4.74414ZM4 8.74414H6V10.7441H4V8.74414ZM15 9.74414C11.7 9.74414 9 12.4441 9 15.7441C9 19.0441 11.7 21.7441 15 21.7441C18.3 21.7441 21 19.0441 21 15.7441C21 12.4441 18.3 9.74414 15 9.74414ZM4 12.7441H6V14.7441H4V12.7441ZM14 12.7441H16V14.7441H18V16.7441H16V18.7441H14V16.7441H12V14.7441H14V12.7441Z"
                        fill="#A5A4BF"
                      />
                    </svg>
                  </span>
                  Add New NFT
                </NavLink>
              </MenuItem>

              <MenuItem>
                {/* <NavLink
                  className="nav-link"
                  to={"/admin/NFTCollection/Orders"}
                > */}
                <span className="me-3">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.41602 0.740234L0.00390625 0.757812L0.0136719 2.75781L2.08398 2.74805L5.37891 10.6523L4.18164 12.5664C3.34329 13.9052 4.36268 15.7441 5.94141 15.7441H18V13.7441H5.94141C5.83013 13.7441 5.8173 13.7222 5.87695 13.627L7.05273 11.7441H14.5215C15.2475 11.7441 15.9175 11.3498 16.2695 10.7148L19.8711 4.22852C20.2421 3.56252 19.76 2.74414 18.998 2.74414H4.25L3.41602 0.740234ZM6 16.7441C5.46957 16.7441 4.96086 16.9549 4.58579 17.3299C4.21071 17.705 4 18.2137 4 18.7441C4 19.2746 4.21071 19.7833 4.58579 20.1584C4.96086 20.5334 5.46957 20.7441 6 20.7441C6.53043 20.7441 7.03914 20.5334 7.41421 20.1584C7.78929 19.7833 8 19.2746 8 18.7441C8 18.2137 7.78929 17.705 7.41421 17.3299C7.03914 16.9549 6.53043 16.7441 6 16.7441ZM16 16.7441C15.4696 16.7441 14.9609 16.9549 14.5858 17.3299C14.2107 17.705 14 18.2137 14 18.7441C14 19.2746 14.2107 19.7833 14.5858 20.1584C14.9609 20.5334 15.4696 20.7441 16 20.7441C16.5304 20.7441 17.0391 20.5334 17.4142 20.1584C17.7893 19.7833 18 19.2746 18 18.7441C18 18.2137 17.7893 17.705 17.4142 17.3299C17.0391 16.9549 16.5304 16.7441 16 16.7441Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Orders
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                {/* <NavLink
                  className="nav-link"
                  to={"/admin/NFTCollection/Categories"}
                > */}
                <span className="me-3">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 0.744141H2C0.897 0.744141 0 1.64114 0 2.74414V16.7441C0 17.8471 0.897 18.7441 2 18.7441H18C19.103 18.7441 20 17.8471 20 16.7441V2.74414C20 1.64114 19.103 0.744141 18 0.744141ZM9 14.7441H3V12.7441H9V14.7441ZM9 10.7441H3V8.74414H9V10.7441ZM9 6.74414H3V4.74414H9V6.74414ZM13 14.7441H11V4.74414H13V14.7441ZM17 14.7441H15V12.7441H17V14.7441ZM17 10.7441H15V8.74414H17V10.7441ZM17 6.74414H15V4.74414H17V6.74414Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Category
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                {/* <NavLink
                  className="nav-link"
                  to={"/admin/NFTCollection/AddAttributes"}
                > */}
                <span className="me-3">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0.151855V1.15186V11.1519V18.1519H2V11.1519H9.38281L10.3828 13.1519H18V2.15186H11.6172L10.6172 0.151855H0Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Add Attributes
                {/* </NavLink> */}
              </MenuItem>
            </SubMenu>

            {/* <MenuItem>
              <NavLink className="nav-link" to={"/admin/support"}>
                <span className="me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.142"
                    height="21.501"
                    viewBox="0 0 19.142 21.501"
                  >
                    <g id="customer-service" transform="translate(-1.525 27.8)">
                      <path
                        id="Path_372"
                        data-name="Path 372"
                        d="M11.234-27.755a6.309,6.309,0,0,0-2.587,1A7.834,7.834,0,0,0,7.1-25.231a6.8,6.8,0,0,0-.76,1.537,5.526,5.526,0,0,0-.256,1.184.576.576,0,0,1-.176.323c-.357.412-.349.349-.361,2.36-.013,1.986,0,2.058.265,2.41a1.136,1.136,0,0,0,.42.328,1.216,1.216,0,0,0,1.478-.273l.16-.185.231.47a4.849,4.849,0,0,0,2.259,2.31l.256.122.176-.2a1.735,1.735,0,0,1,.785-.525,4.78,4.78,0,0,1,1.554-.088c1.516,0,1.617-.017,1.949-.323a3.4,3.4,0,0,0,.386-.47,8.076,8.076,0,0,0,.626-1.222c.025-.092.034-.088.218.109l.193.206-.025.445a3.748,3.748,0,0,1-.088.672,2.265,2.265,0,0,1-1.44,1.47,5.688,5.688,0,0,1-1.7.118c-1.411.025-1.428.025-1.566.122a.759.759,0,0,0-.307.62.759.759,0,0,0,.323.611l.155.1h1.512c1.7,0,1.789-.013,2.452-.319a3.664,3.664,0,0,0,1.974-2.222,3.527,3.527,0,0,0,.176-1.2v-.428l.155-.164a1.5,1.5,0,0,0,.239-.353c.084-.181.088-.252.088-2.058,0-2.117.013-2.033-.349-2.448a.576.576,0,0,1-.176-.323,5.852,5.852,0,0,0-.588-1.982A5.307,5.307,0,0,0,16.2-26.042a5.579,5.579,0,0,0-2.73-1.575,6.211,6.211,0,0,0-2.24-.138ZM12.91-26.21a4.485,4.485,0,0,1,3.49,3.54l.071.361-.185.214-.185.214-.155-.34a4.852,4.852,0,0,0-2.7-2.536,4.308,4.308,0,0,0-2.028-.122,4.649,4.649,0,0,0-3.1,2.562l-.21.428-.181-.206-.181-.21.05-.273a4.491,4.491,0,0,1,3.486-3.628,5.233,5.233,0,0,1,1.828,0Z"
                        transform="translate(-0.911)"
                        fill="#a5a4bf"
                      />
                      <path
                        id="Path_373"
                        data-name="Path 373"
                        d="M6.662-10.754a7.036,7.036,0,0,0-4.233,3.33,6.915,6.915,0,0,0-.9,3.284c-.034.827.021,1.046.315,1.34.374.374-.5.34,9.247.34s8.873.034,9.247-.34c.294-.294.349-.512.315-1.34a7.045,7.045,0,0,0-.5-2.452,7.071,7.071,0,0,0-2.679-3.276l-.311-.206-.147.185a4.749,4.749,0,0,1-2.234,1.524,7.142,7.142,0,0,1-2.457.235c-1.373,0-1.583-.021-1.944-.206a1.947,1.947,0,0,1-.71-.7c-.126-.239-.13-.239-.538-.4a5.875,5.875,0,0,1-1.911-1.23,1.043,1.043,0,0,0-.21-.189C7.01-10.855,6.851-10.808,6.662-10.754Z"
                        transform="translate(0 -3.84)"
                        fill="#a5a4bf"
                      />
                    </g>
                  </svg>
                </span>
                Support
              </NavLink>
            </MenuItem> */}

            <SubMenu
              title={
                <>
                  <span className="me-3">
                    <svg
                      id="icon_calendar"
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.804"
                      height="19.804"
                      viewBox="0 0 19.804 19.804"
                    >
                      <rect
                        id="Rectangle_557"
                        data-name="Rectangle 557"
                        width="19.751"
                        height="19.751"
                        transform="translate(0.035 0.019)"
                        fill="none"
                      />
                      <path
                        id="Path_149"
                        data-name="Path 149"
                        d="M2.476,6.189v11.14H17.329V6.189ZM16.091,2.476h2.476A1.169,1.169,0,0,1,19.8,3.713V18.566A1.169,1.169,0,0,1,18.566,19.8H1.238A1.169,1.169,0,0,1,0,18.566V3.713A1.169,1.169,0,0,1,1.238,2.476H3.713V1.238A1.169,1.169,0,0,1,4.951,0,1.169,1.169,0,0,1,6.189,1.238V2.476h7.427V1.238a1.238,1.238,0,0,1,2.476,0ZM14.853,14.853H12.378V12.378h2.476Zm-3.713,0H8.664V12.378H11.14Zm3.713-3.713H12.378V8.664h2.476Zm-3.713,0H8.664V8.664H11.14ZM7.427,14.853H4.951V12.378H7.427Z"
                        transform="translate(0 0)"
                        fill="#a5a4bf"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  Events
                </>
              }
            >
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/AdminAllEvent"}> */}
                <span className="me-3">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0.605469H2C0.895 0.605469 0 1.50047 0 2.60547V18.6055C0 19.7105 0.895 20.6055 2 20.6055H14C15.105 20.6055 16 19.7105 16 18.6055V2.60547C16 1.50047 15.105 0.605469 14 0.605469ZM8 4.60547C9.7 4.60547 11 5.90547 11 7.60547C11 9.30547 9.7 10.6055 8 10.6055C6.3 10.6055 5 9.30547 5 7.60547C5 5.90547 6.3 4.60547 8 4.60547ZM13 16.6055H3C3 16.6055 3 16.0205 3 15.6055C3 14.0345 5.512 12.6055 8 12.6055C10.488 12.6055 13 14.0345 13 15.6055C13 16.0205 13 16.6055 13 16.6055Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                All Events
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/AdminAddEvent"}> */}
                <span className="me-3">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.605469C0.897 0.605469 0 1.50247 0 2.60547V16.6055C0 17.7085 0.897 18.6055 2 18.6055H7.58789C7.21189 17.6785 7 16.6675 7 15.6055C7 13.7125 7.66077 11.9755 8.75977 10.6055H8V8.60547H11.1309C12.2779 7.96947 13.596 7.60547 15 7.60547C16.062 7.60547 17.073 7.81736 18 8.19336V2.60547C18 1.50247 17.103 0.605469 16 0.605469H2ZM4 4.60547H6V6.60547H4V4.60547ZM8 4.60547H14V6.60547H8V4.60547ZM4 8.60547H6V10.6055H4V8.60547ZM15 9.60547C11.7 9.60547 9 12.3055 9 15.6055C9 18.9055 11.7 21.6055 15 21.6055C18.3 21.6055 21 18.9055 21 15.6055C21 12.3055 18.3 9.60547 15 9.60547ZM4 12.6055H6V14.6055H4V12.6055ZM14 12.6055H16V14.6055H18V16.6055H16V18.6055H14V16.6055H12V14.6055H14V12.6055Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Add New Event
                {/* </NavLink> */}
              </MenuItem>

              <MenuItem>
                {/* <NavLink className="nav-link" to={"/AdminEventPackage"}> */}
                <span className="me-3">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.605469C0.897 0.605469 0 1.50247 0 2.60547V16.6055C0 17.7085 0.897 18.6055 2 18.6055H7.58789C7.21189 17.6785 7 16.6675 7 15.6055C7 13.7125 7.66077 11.9755 8.75977 10.6055H8V8.60547H11.1309C12.2779 7.96947 13.596 7.60547 15 7.60547C16.062 7.60547 17.073 7.81736 18 8.19336V2.60547C18 1.50247 17.103 0.605469 16 0.605469H2ZM4 4.60547H6V6.60547H4V4.60547ZM8 4.60547H14V6.60547H8V4.60547ZM4 8.60547H6V10.6055H4V8.60547ZM15 9.60547C11.7 9.60547 9 12.3055 9 15.6055C9 18.9055 11.7 21.6055 15 21.6055C18.3 21.6055 21 18.9055 21 15.6055C21 12.3055 18.3 9.60547 15 9.60547ZM4 12.6055H6V14.6055H4V12.6055ZM14 12.6055H16V14.6055H18V16.6055H16V18.6055H14V16.6055H12V14.6055H14V12.6055Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Event Package
                {/* </NavLink> */}
              </MenuItem>
            </SubMenu>

            <MenuItem>
              {/* <NavLink className="nav-link" to={"/"}> */}
              <span className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.826"
                  height="20.001"
                  viewBox="0 0 17.826 20.001"
                >
                  <g id="secure" transform="translate(-27.95 511.9)">
                    <path
                      id="Path_377"
                      data-name="Path 377"
                      d="M32.683-510.771c-2.219.621-4.087,1.149-4.153,1.176a.693.693,0,0,0-.34.445c-.051.2-.148,1.207-.2,2.11s-.055,2.915,0,3.692a13.1,13.1,0,0,0,1.735,6.33,12.935,12.935,0,0,0,4.536,4.091,10.243,10.243,0,0,0,2.6,1.028,8.426,8.426,0,0,0,1.856-.652A13.076,13.076,0,0,0,44-497.017a13.1,13.1,0,0,0,1.735-6.33,36.042,36.042,0,0,0-.1-5.021c-.082-.879-.148-1.078-.4-1.207-.164-.086-8.264-2.329-8.393-2.325C36.774-511.9,34.907-511.392,32.683-510.771Zm8.412,4.536a1.7,1.7,0,0,1,.559.438,5.4,5.4,0,0,1,.488.524.736.736,0,0,1,.02.621c-.09.168-5.693,5.747-5.822,5.8a.733.733,0,0,1-.508-.016c-.16-.07-3.681-3.6-3.735-3.747-.121-.316-.008-.559.5-1.055s.731-.59,1.078-.418a13.089,13.089,0,0,1,1.293,1.211l1.133,1.133,2.227-2.223c2.459-2.459,2.361-2.381,2.772-2.268Z"
                      fill="#a5a4bf"
                    />
                  </g>
                </svg>
              </span>
              Authorization and Security
              {/* </NavLink> */}
            </MenuItem>

            <MenuItem>
              {/* <NavLink className="nav-link" to={"/AdminReviewAndRatings"}> */}
              <span className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.436"
                  height="18.422"
                  viewBox="0 0 18.436 18.422"
                >
                  <g id="review" transform="translate(0 511.927)">
                    <path
                      id="Path_378"
                      data-name="Path 378"
                      d="M1.483-511.864a1.892,1.892,0,0,0-.907.536,1.73,1.73,0,0,0-.5.889C0-510.168,0-510.02,0-503.875c0,5.364.007,6.318.054,6.506A1.994,1.994,0,0,0,1.7-495.843c.137.022,1.159.036,2.6.036H6.678l1.044,1.048c.576.576,1.116,1.094,1.2,1.152a.481.481,0,0,0,.518.047c.065-.032.608-.551,1.213-1.152l1.1-1.091,2.52-.011a14.325,14.325,0,0,0,2.718-.079,2.043,2.043,0,0,0,1.2-.979c.259-.493.245-.025.245-7,0-6.153,0-6.29-.072-6.563a1.832,1.832,0,0,0-.536-.922,1.741,1.741,0,0,0-.889-.5c-.274-.072-.421-.072-7.733-.068C1.966-511.932,1.739-511.928,1.483-511.864Zm7.881,2.844a.56.56,0,0,1,.223.137c.05.054.389.7.745,1.422s.655,1.321.662,1.321.67.1,1.469.212a14.322,14.322,0,0,1,1.573.274.6.6,0,0,1,.277.4c.043.23-.061.36-1.156,1.426-.572.558-1.048,1.04-1.055,1.076s.094.68.223,1.44.238,1.433.238,1.5a.534.534,0,0,1-.533.508,5.733,5.733,0,0,1-1.483-.7l-1.328-.7-1.332.7a5.951,5.951,0,0,1-1.487.7.534.534,0,0,1-.533-.508c0-.072.1-.749.238-1.5s.23-1.408.223-1.44-.479-.522-1.055-1.08c-1.094-1.062-1.2-1.192-1.156-1.422a.6.6,0,0,1,.277-.4,10.272,10.272,0,0,1,1.343-.238c.673-.1,1.336-.194,1.469-.216l.241-.04.662-1.336a16,16,0,0,1,.752-1.422.655.655,0,0,1,.335-.148.782.782,0,0,1,.168.035Z"
                      fill="#a5a4bf"
                    />
                    <path
                      id="Path_379"
                      data-name="Path 379"
                      d="M166.319-381.075a10.962,10.962,0,0,1-.547,1.044c-.13.148-.169.158-1.285.317-.5.068-.958.137-1,.148-.076.014,0,.1.709.792.634.616.8.8.835.907a4.349,4.349,0,0,1-.148,1.192c-.1.58-.173,1.066-.162,1.073s.443-.2.965-.479c.806-.425.972-.5,1.109-.5s.3.072,1.109.5c.522.274.954.49.965.479s-.065-.493-.162-1.073a4.348,4.348,0,0,1-.148-1.192c.032-.1.2-.292.835-.907.713-.7.788-.774.709-.792-.047-.011-.536-.086-1.087-.166s-1.033-.162-1.069-.18c-.133-.072-.248-.263-.68-1.163-.248-.508-.461-.925-.472-.925S166.567-381.582,166.319-381.075Z"
                      transform="translate(-157.574 -125.255)"
                      fill="#a5a4bf"
                    />
                  </g>
                </svg>
              </span>
              Review And Ratings
              {/* </NavLink> */}
            </MenuItem>

            <SubMenu
              title={
                <>
                  <span className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.029"
                      height="21.01"
                      viewBox="0 0 21.029 21.01"
                    >
                      <g id="warehouse" transform="translate(-32.118 479.9)">
                        <path
                          id="Path_380"
                          data-name="Path 380"
                          d="M37.468-477.975c-4.438,1.709-5.02,1.939-5.151,2.08a.728.728,0,0,0-.178.672.852.852,0,0,0,.549.554c.085.014,4.616.019,10.068.014l9.913-.014.174-.136a.722.722,0,0,0,.3-.5.722.722,0,0,0-.162-.556c-.136-.164-.38-.268-5.161-2.108-3.174-1.226-5.081-1.935-5.184-1.935S40.624-479.191,37.468-477.975Z"
                          fill="#a5a4bf"
                        />
                        <path
                          id="Path_381"
                          data-name="Path 381"
                          d="M48.009-344.726c.014,7.265.014,7.279.113,7.4a1.28,1.28,0,0,0,.225.225l.127.1H67.061l.127-.1a1.28,1.28,0,0,0,.225-.225c.1-.127.1-.141.113-7.4L67.535-352H48Zm5.142-5.663.859.859v8.049h9.537l.113.117a.345.345,0,0,1,.117.259.345.345,0,0,1-.117.258l-.113.117H53.49l-.113-.117-.117-.113v-8.24l-.751-.756c-.657-.667-.751-.775-.751-.911a.392.392,0,0,1,.385-.38C52.278-351.249,52.391-351.155,53.151-350.389Zm7.274.014a1.279,1.279,0,0,1,.225.225c.094.122.1.188.1,1.531s0,1.409-.1,1.531a1.281,1.281,0,0,1-.225.225c-.122.094-.188.1-1.531.1s-1.409,0-1.531-.1a1.279,1.279,0,0,1-.225-.225c-.094-.122-.1-.2-.113-1.4-.009-.7,0-1.343.014-1.428a.813.813,0,0,1,.423-.512,6.176,6.176,0,0,1,1.489-.052c1.277.006,1.349.011,1.474.1Zm-2.254,4.508a1.278,1.278,0,0,1,.225.225c.094.122.1.188.1,1.531s0,1.409-.1,1.531a1.28,1.28,0,0,1-.225.225c-.122.094-.188.1-1.531.1s-1.409,0-1.531-.1a1.282,1.282,0,0,1-.225-.225c-.094-.122-.1-.2-.113-1.4-.009-.7,0-1.343.014-1.428a.812.812,0,0,1,.423-.512,6.173,6.173,0,0,1,1.489-.052C57.974-345.966,58.049-345.961,58.171-345.867Zm4.508,0a1.282,1.282,0,0,1,.225.225c.094.122.1.188.1,1.531s0,1.409-.1,1.531a1.281,1.281,0,0,1-.225.225c-.122.094-.188.1-1.531.1s-1.409,0-1.531-.1a1.282,1.282,0,0,1-.225-.225c-.094-.122-.1-.2-.113-1.4-.009-.7,0-1.343.014-1.428a.812.812,0,0,1,.423-.512,6.173,6.173,0,0,1,1.489-.052C62.482-345.966,62.557-345.961,62.679-345.867Zm-7.194,5.945a1.244,1.244,0,0,1,.78,1.071,1.183,1.183,0,0,1-1.127,1.127,1.183,1.183,0,0,1-1.127-1.127,1.027,1.027,0,0,1,.352-.775,1.037,1.037,0,0,1,1.122-.3Zm6.762,0a1.244,1.244,0,0,1,.78,1.071,1.183,1.183,0,0,1-1.127,1.127,1.183,1.183,0,0,1-1.127-1.127,1.027,1.027,0,0,1,.352-.775,1.037,1.037,0,0,1,1.122-.3Z"
                          transform="translate(-15.134 -121.894)"
                          fill="#a5a4bf"
                        />
                      </g>
                    </svg>
                  </span>
                  Invenotry Management
                </>
              }
            >
              <MenuItem>
                <NavLink className="nav-link" to={"/admin/AthleteGear"}>
                  <span className="me-3">
                    <svg
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0.744141H2C0.895 0.744141 0 1.63914 0 2.74414V18.7441C0 19.8491 0.895 20.7441 2 20.7441H14C15.105 20.7441 16 19.8491 16 18.7441V2.74414C16 1.63914 15.105 0.744141 14 0.744141ZM8 4.74414C9.7 4.74414 11 6.04414 11 7.74414C11 9.44414 9.7 10.7441 8 10.7441C6.3 10.7441 5 9.44414 5 7.74414C5 6.04414 6.3 4.74414 8 4.74414ZM13 16.7441H3C3 16.7441 3 16.1591 3 15.7441C3 14.1731 5.512 12.7441 8 12.7441C10.488 12.7441 13 14.1731 13 15.7441C13 16.1591 13 16.7441 13 16.7441Z"
                        fill="#A5A4BF"
                      />
                    </svg>
                  </span>
                  All Athlete items
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink className="nav-link" to={"/admin/AddNewGear"}>
                  <span className="me-3">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 0.744141C0.897 0.744141 0 1.64114 0 2.74414V16.7441C0 17.8471 0.897 18.7441 2 18.7441H7.58789C7.21189 17.8171 7 16.8061 7 15.7441C7 13.8511 7.66077 12.1141 8.75977 10.7441H8V8.74414H11.1309C12.2779 8.10814 13.596 7.74414 15 7.74414C16.062 7.74414 17.073 7.95603 18 8.33203V2.74414C18 1.64114 17.103 0.744141 16 0.744141H2ZM4 4.74414H6V6.74414H4V4.74414ZM8 4.74414H14V6.74414H8V4.74414ZM4 8.74414H6V10.7441H4V8.74414ZM15 9.74414C11.7 9.74414 9 12.4441 9 15.7441C9 19.0441 11.7 21.7441 15 21.7441C18.3 21.7441 21 19.0441 21 15.7441C21 12.4441 18.3 9.74414 15 9.74414ZM4 12.7441H6V14.7441H4V12.7441ZM14 12.7441H16V14.7441H18V16.7441H16V18.7441H14V16.7441H12V14.7441H14V12.7441Z"
                        fill="#A5A4BF"
                      />
                    </svg>
                  </span>
                  Add New Item
                </NavLink>
              </MenuItem>

              <MenuItem>
                {/* <NavLink className="nav-link" to={"/GearOrder"}> */}
                <span className="me-3">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.41602 0.740234L0.00390625 0.757812L0.0136719 2.75781L2.08398 2.74805L5.37891 10.6523L4.18164 12.5664C3.34329 13.9052 4.36268 15.7441 5.94141 15.7441H18V13.7441H5.94141C5.83013 13.7441 5.8173 13.7222 5.87695 13.627L7.05273 11.7441H14.5215C15.2475 11.7441 15.9175 11.3498 16.2695 10.7148L19.8711 4.22852C20.2421 3.56252 19.76 2.74414 18.998 2.74414H4.25L3.41602 0.740234ZM6 16.7441C5.46957 16.7441 4.96086 16.9549 4.58579 17.3299C4.21071 17.705 4 18.2137 4 18.7441C4 19.2746 4.21071 19.7833 4.58579 20.1584C4.96086 20.5334 5.46957 20.7441 6 20.7441C6.53043 20.7441 7.03914 20.5334 7.41421 20.1584C7.78929 19.7833 8 19.2746 8 18.7441C8 18.2137 7.78929 17.705 7.41421 17.3299C7.03914 16.9549 6.53043 16.7441 6 16.7441ZM16 16.7441C15.4696 16.7441 14.9609 16.9549 14.5858 17.3299C14.2107 17.705 14 18.2137 14 18.7441C14 19.2746 14.2107 19.7833 14.5858 20.1584C14.9609 20.5334 15.4696 20.7441 16 20.7441C16.5304 20.7441 17.0391 20.5334 17.4142 20.1584C17.7893 19.7833 18 19.2746 18 18.7441C18 18.2137 17.7893 17.705 17.4142 17.3299C17.0391 16.9549 16.5304 16.7441 16 16.7441Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Gear Orders
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                <NavLink className="nav-link" to={"/admin/GearCategory"}>
                  <span className="me-3">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 0.744141H2C0.897 0.744141 0 1.64114 0 2.74414V16.7441C0 17.8471 0.897 18.7441 2 18.7441H18C19.103 18.7441 20 17.8471 20 16.7441V2.74414C20 1.64114 19.103 0.744141 18 0.744141ZM9 14.7441H3V12.7441H9V14.7441ZM9 10.7441H3V8.74414H9V10.7441ZM9 6.74414H3V4.74414H9V6.74414ZM13 14.7441H11V4.74414H13V14.7441ZM17 14.7441H15V12.7441H17V14.7441ZM17 10.7441H15V8.74414H17V10.7441ZM17 6.74414H15V4.74414H17V6.74414Z"
                        fill="#A5A4BF"
                      />
                    </svg>
                  </span>
                  Gear Category
                </NavLink>
              </MenuItem>
            </SubMenu>

            <SubMenu
              title={
                <>
                  <span className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.153"
                      height="21.619"
                      viewBox="0 0 23.153 21.619"
                    >
                      <g id="coupon" transform="translate(-0.134 494.875)">
                        <path
                          id="Path_382"
                          data-name="Path 382"
                          d="M8.683-494.832a2.535,2.535,0,0,0-.525.2,30.518,30.518,0,0,0-3.551,3.122c-1.778,1.633-3.357,3.1-3.515,3.266A3.437,3.437,0,0,0,.3-486.919l-.149.43-.014,5.61c-.009,3.854,0,5.677.036,5.84a2.311,2.311,0,0,0,1.14,1.52c.565.276.122.262,7.84.262,7.777,0,7.3.018,7.858-.28a2.29,2.29,0,0,0,1.122-1.574c.036-.208.045-1.914.036-5.791a51.945,51.945,0,0,0-.1-5.786,4.641,4.641,0,0,0-.6-1.262c-.154-.208-5.424-5.112-6.646-6.184a3.9,3.9,0,0,0-.724-.525,2.292,2.292,0,0,0-1.416-.173Zm.814,3.669a.641.641,0,0,1,.339.579.643.643,0,0,1-.193.473.643.643,0,0,1-.477.183.639.639,0,0,1-.489-.2.639.639,0,0,1-.176-.5.664.664,0,0,1,.346-.553.664.664,0,0,1,.653.01Zm-3.28,4.307a2.27,2.27,0,0,1,1.565,1.565,2.881,2.881,0,0,1,0,1.493,2.372,2.372,0,0,1-1.108,1.389,1.906,1.906,0,0,1-2.339-.394,2.491,2.491,0,0,1,0-3.488,1.922,1.922,0,0,1,1.883-.565Zm4.927.4a.626.626,0,0,1,.33.62c-.023.249-3.334,8.157-3.479,8.31a.732.732,0,0,1-.891.063.791.791,0,0,1-.262-.629c.05-.244,3.384-8.125,3.483-8.234a.634.634,0,0,1,.819-.127Zm1.941,4.985a2.9,2.9,0,0,1,.452.163,3.128,3.128,0,0,1,.9.932,3.133,3.133,0,0,1,.3,1.212,3.133,3.133,0,0,1-.3,1.212,2.843,2.843,0,0,1-.973.955,1.974,1.974,0,0,1-2.3-.425,2.338,2.338,0,0,1-.679-1.742,2.331,2.331,0,0,1,.679-1.742,1.965,1.965,0,0,1,1.921-.562Z"
                          fill="#a5a4bf"
                        />
                        <path
                          id="Path_383"
                          data-name="Path 383"
                          d="M107.687-288.8a1.128,1.128,0,0,0-.484,1.09c.127.923,1.027,1.172,1.411.389a1.147,1.147,0,0,0-.317-1.443A.576.576,0,0,0,107.687-288.8Z"
                          transform="translate(-102.212 -196.688)"
                          fill="#a5a4bf"
                        />
                        <path
                          id="Path_384"
                          data-name="Path 384"
                          d="M259.475-169.722a1,1,0,0,0-.475.946.969.969,0,0,0,.335.814.556.556,0,0,0,.529.176.813.813,0,0,0,.525-.425.884.884,0,0,0,.127-.579.821.821,0,0,0-.136-.584.719.719,0,0,0-.57-.416A.475.475,0,0,0,259.475-169.722Z"
                          transform="translate(-247.15 -310.376)"
                          fill="#a5a4bf"
                        />
                        <path
                          id="Path_385"
                          data-name="Path 385"
                          d="M284.046-475.941c3.379,3.1,5.184,4.777,5.347,4.967a4.973,4.973,0,0,1,1.041,2.076c.1.385.1.4.127,5.117l.023,4.732,1.176-.5c1.552-.67,1.583-.683,1.9-1a2.2,2.2,0,0,0,.642-1.7c-.027-.29-.285-1.081-1.841-5.61-1.176-3.42-1.864-5.356-1.959-5.51a3.7,3.7,0,0,0-.864-.986c-.575-.434-.715-.48-3.257-1.086-1.289-.308-2.361-.561-2.375-.561S284.009-475.973,284.046-475.941Z"
                          transform="translate(-271.02 -18.022)"
                          fill="#a5a4bf"
                        />
                      </g>
                    </svg>
                  </span>
                  Coupons
                </>
              }
            >
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/AllCoupons"}> */}
                <span className="me-3">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.899904 8.31418V1.71418C0.899641 1.51007 0.939616 1.30791 1.01754 1.11926C1.09547 0.93061 1.20982 0.759172 1.35406 0.614751C1.49829 0.470329 1.66958 0.355757 1.85813 0.277587C2.04668 0.199416 2.24879 0.15918 2.4529 0.159181H9.0529C9.25717 0.158954 9.45947 0.199026 9.64823 0.277102C9.83698 0.355178 10.0085 0.469725 10.1529 0.614181L17.0059 7.46718C17.1507 7.61146 17.2655 7.78289 17.3439 7.97166C17.4223 8.16042 17.4626 8.36279 17.4626 8.56718C17.4626 8.77157 17.4223 8.97394 17.3439 9.16271C17.2655 9.35147 17.1507 9.5229 17.0059 9.66718L10.4059 16.2672C10.2616 16.4119 10.0902 16.5268 9.90143 16.6052C9.71267 16.6836 9.51029 16.7239 9.3059 16.7239C9.10152 16.7239 8.89914 16.6836 8.71038 16.6052C8.52162 16.5268 8.35018 16.4119 8.2059 16.2672L1.3549 9.41218C1.06364 9.12099 0.899976 8.72603 0.899904 8.31418ZM4.5229 2.22918C4.21571 2.22898 3.91535 2.3199 3.65983 2.49042C3.40431 2.66095 3.2051 2.90342 3.08741 3.18718C2.96971 3.47094 2.93881 3.78322 2.99862 4.08454C3.05843 4.38586 3.20626 4.66267 3.42341 4.87996C3.64056 5.09725 3.91728 5.24526 4.21856 5.30527C4.51984 5.36527 4.83215 5.33457 5.11598 5.21706C5.39981 5.09955 5.64242 4.9005 5.81311 4.64508C5.9838 4.38967 6.0749 4.08938 6.0749 3.78218C6.0749 3.37047 5.91142 2.97561 5.62039 2.6844C5.32937 2.39318 4.93461 2.22945 4.5229 2.22918Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                All Coupons
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/AddNewCoupon"}> */}
                <span className="me-3">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.77319 3.62548H0.117188V15.2135C0.11745 15.653 0.291878 16.0744 0.602267 16.3856C0.912656 16.6967 1.3337 16.8722 1.77319 16.8735H13.3652V15.2135H1.77319V3.62548ZM15.0172 0.313477H5.08519C4.64639 0.314795 4.22595 0.48969 3.91568 0.799965C3.6054 1.11024 3.43051 1.53068 3.42919 1.96948V11.9055C3.43051 12.3443 3.6054 12.7647 3.91568 13.075C4.22595 13.3853 4.64639 13.5602 5.08519 13.5615H15.0172C15.456 13.5602 15.8764 13.3853 16.1867 13.075C16.497 12.7647 16.6719 12.3443 16.6732 11.9055V1.96948C16.6719 1.53068 16.497 1.11024 16.1867 0.799965C15.8764 0.48969 15.456 0.314795 15.0172 0.313477ZM14.1892 7.76548H10.8812V11.0775H9.22519V7.76548H5.91719V6.11348H9.22919V2.79748H10.8852V6.11348H14.1972L14.1892 7.76548Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Add New Coupon
                {/* </NavLink> */}
              </MenuItem>
            </SubMenu>

            <SubMenu
              title={
                <>
                  <span className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.299"
                      height="10.319"
                      viewBox="0 0 17.299 10.319"
                    >
                      <g id="voucher" transform="translate(0 408.7)">
                        <path
                          id="Path_386"
                          data-name="Path 386"
                          d="M.378-408.676a.516.516,0,0,0-.2.1c-.178.17-.178.194-.178,1.728,0,1.382,0,1.426.071,1.551.1.172.22.233.527.27a2.241,2.241,0,0,1,.378.071,1.539,1.539,0,0,1,.994,1.2,1.524,1.524,0,0,1-.994,1.636,2.238,2.238,0,0,1-.378.071c-.308.037-.429.1-.527.274-.071.125-.074.152-.064,1.6.01,1.423.014,1.47.081,1.561a.922.922,0,0,0,.162.162c.091.071.122.071,2.328.071H4.816l.017-1.342c.017-1.288.02-1.345.088-1.436a.574.574,0,0,1,.4-.213.574.574,0,0,1,.4.213c.068.091.071.149.088,1.436l.017,1.342H16.961l.091-.071a.921.921,0,0,0,.162-.162c.068-.091.071-.139.081-1.561.01-1.446.007-1.473-.064-1.6-.1-.176-.22-.237-.527-.274a2.241,2.241,0,0,1-.378-.071,1.524,1.524,0,0,1-.994-1.636,1.539,1.539,0,0,1,.994-1.2,2.244,2.244,0,0,1,.378-.071c.308-.037.429-.1.527-.274.071-.125.074-.152.064-1.6-.01-1.423-.014-1.47-.081-1.561a.923.923,0,0,0-.162-.162l-.091-.071H5.829l-.017,1.342c-.017,1.288-.02,1.345-.088,1.436a.574.574,0,0,1-.4.213.574.574,0,0,1-.4-.213c-.068-.091-.071-.149-.088-1.436L4.819-408.7,2.653-408.7C1.463-408.7.439-408.69.378-408.676Zm5.191,4.042a.7.7,0,0,1,.159.142c.064.084.068.145.068.953s0,.869-.068.953a.478.478,0,0,1-.416.2.462.462,0,0,1-.429-.274,6.9,6.9,0,0,1,0-1.751.462.462,0,0,1,.429-.274.582.582,0,0,1,.257.05Z"
                          fill="#a5a4bf"
                        />
                      </g>
                    </svg>
                  </span>
                  Raffle Ticket
                </>
              }
            >
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/AllRaffleTickets"}> */}
                <span className="me-3">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.899904 8.31418V1.71418C0.899641 1.51007 0.939616 1.30791 1.01754 1.11926C1.09547 0.93061 1.20982 0.759172 1.35406 0.614751C1.49829 0.470329 1.66958 0.355757 1.85813 0.277587C2.04668 0.199416 2.24879 0.15918 2.4529 0.159181H9.0529C9.25717 0.158954 9.45947 0.199026 9.64823 0.277102C9.83698 0.355178 10.0085 0.469725 10.1529 0.614181L17.0059 7.46718C17.1507 7.61146 17.2655 7.78289 17.3439 7.97166C17.4223 8.16042 17.4626 8.36279 17.4626 8.56718C17.4626 8.77157 17.4223 8.97394 17.3439 9.16271C17.2655 9.35147 17.1507 9.5229 17.0059 9.66718L10.4059 16.2672C10.2616 16.4119 10.0902 16.5268 9.90143 16.6052C9.71267 16.6836 9.51029 16.7239 9.3059 16.7239C9.10152 16.7239 8.89914 16.6836 8.71038 16.6052C8.52162 16.5268 8.35018 16.4119 8.2059 16.2672L1.3549 9.41218C1.06364 9.12099 0.899976 8.72603 0.899904 8.31418ZM4.5229 2.22918C4.21571 2.22898 3.91535 2.3199 3.65983 2.49042C3.40431 2.66095 3.2051 2.90342 3.08741 3.18718C2.96971 3.47094 2.93881 3.78322 2.99862 4.08454C3.05843 4.38586 3.20626 4.66267 3.42341 4.87996C3.64056 5.09725 3.91728 5.24526 4.21856 5.30527C4.51984 5.36527 4.83215 5.33457 5.11598 5.21706C5.39981 5.09955 5.64242 4.9005 5.81311 4.64508C5.9838 4.38967 6.0749 4.08938 6.0749 3.78218C6.0749 3.37047 5.91142 2.97561 5.62039 2.6844C5.32937 2.39318 4.93461 2.22945 4.5229 2.22918Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                All Raffle Tickets
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem>
                {/* <NavLink className="nav-link" to={"/AllRaffle"}> */}
                <span className="me-3">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.77319 3.62548H0.117188V15.2135C0.11745 15.653 0.291878 16.0744 0.602267 16.3856C0.912656 16.6967 1.3337 16.8722 1.77319 16.8735H13.3652V15.2135H1.77319V3.62548ZM15.0172 0.313477H5.08519C4.64639 0.314795 4.22595 0.48969 3.91568 0.799965C3.6054 1.11024 3.43051 1.53068 3.42919 1.96948V11.9055C3.43051 12.3443 3.6054 12.7647 3.91568 13.075C4.22595 13.3853 4.64639 13.5602 5.08519 13.5615H15.0172C15.456 13.5602 15.8764 13.3853 16.1867 13.075C16.497 12.7647 16.6719 12.3443 16.6732 11.9055V1.96948C16.6719 1.53068 16.497 1.11024 16.1867 0.799965C15.8764 0.48969 15.456 0.314795 15.0172 0.313477ZM14.1892 7.76548H10.8812V11.0775H9.22519V7.76548H5.91719V6.11348H9.22919V2.79748H10.8852V6.11348H14.1972L14.1892 7.76548Z"
                      fill="#A5A4BF"
                    />
                  </svg>
                </span>
                Add New Ticket
                {/* </NavLink> */}
              </MenuItem>
            </SubMenu>

            <MenuItem>
              {/* <NavLink className="nav-link" to={"/admin/settings"}> */}
              <span className="me-3">
                <svg
                  id="icon_setting"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.804"
                  height="19.804"
                  viewBox="0 0 19.804 19.804"
                >
                  <path
                    id="Path_108"
                    data-name="Path 108"
                    d="M16.462,6.436l1.362-2.6L16.091,2.1l-2.6,1.362a4.434,4.434,0,0,0-1.362-.5L11.14,0H8.664l-.99,2.847a5.173,5.173,0,0,0-1.238.5L3.837,1.98,1.98,3.837l1.362,2.6a5.173,5.173,0,0,0-.5,1.238L0,8.664V11.14l2.847.99c.124.5.371.866.5,1.362l-1.362,2.6,1.733,1.733,2.6-1.362a4.434,4.434,0,0,0,1.362.5l.99,2.847H11.14l.99-2.847c.5-.124.866-.371,1.362-.5l2.6,1.362,1.733-1.733-1.362-2.6a4.434,4.434,0,0,0,.5-1.362l2.847-.99V8.664l-2.847-.99A5.173,5.173,0,0,0,16.462,6.436ZM9.9,13.615A3.647,3.647,0,0,1,6.189,9.9,3.647,3.647,0,0,1,9.9,6.189,3.647,3.647,0,0,1,13.615,9.9,3.647,3.647,0,0,1,9.9,13.615Z"
                    fill="#a5a4bf"
                  />
                </svg>
              </span>
              Setting
              {/* </NavLink> */}
            </MenuItem>
          </Menu>
        </ProSidebar>
      </aside>
    </>
  );
};

export default Sidebar;
