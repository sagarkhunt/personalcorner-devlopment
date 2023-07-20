import React, { useState } from "react";
import { Col, Nav, Row, Tabs, Tab } from "react-bootstrap";
import CombinedHeader from "../common/CombinedHeader";
import ActiveTicketTab from "./ActiveTicketTab";

const Support = () => {
  const [key, setKey] = useState(1);
  return (
    <CombinedHeader>
      <main className="adminPageMainCommon supportPage">
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">Users</h2>
        </div>

        {/* ------- */}
        <section className="usersScreenSection w-100">
          <div className="customTabsParent position-relative">
            <div className="position-absolute tabsSideButtons d-flex align-items-center">
              <div className="me-5 d-flex align-items-center">
                <button type="button" className="me-2 btnCloseTicket">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.90027 16.9972L0.34027 9.44022C0.122388 9.22215 0 8.92649 0 8.61822C0 8.30996 0.122388 8.0143 0.34027 7.79622L1.98427 6.15222C2.09218 6.04422 2.22032 5.95854 2.36137 5.90008C2.50241 5.84163 2.65359 5.81154 2.80627 5.81154C2.95895 5.81154 3.11013 5.84163 3.25117 5.90008C3.39221 5.95854 3.52036 6.04422 3.62827 6.15222L8.71827 11.2422L19.6183 0.342223C19.8363 0.124342 20.132 0.00195312 20.4403 0.00195312C20.7485 0.00195312 21.0442 0.124342 21.2623 0.342223L22.9103 1.98422C23.1282 2.2023 23.2505 2.49796 23.2505 2.80622C23.2505 3.11449 23.1282 3.41015 22.9103 3.62822L9.54127 16.9972C9.32332 17.2142 9.0283 17.336 8.72077 17.336C8.41324 17.336 8.11822 17.2142 7.90027 16.9972Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <label htmlFor="">Close Ticket</label>
              </div>
              <div className="d-flex align-items-center">
                <button className="me-2 btnInProgress">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.137 1.97398e-07C8.13227 -0.000395364 6.17243 0.593709 4.50533 1.70718C2.83823 2.82066 1.53876 4.40349 0.771255 6.2555C0.00374901 8.10752 -0.197321 10.1455 0.193472 12.1118C0.584264 14.0781 1.54937 15.8844 2.96673 17.3022C4.3841 18.72 6.19006 19.6856 8.15624 20.077C10.1224 20.4683 12.1605 20.2679 14.0128 19.5009C15.865 18.734 17.4482 17.435 18.5622 15.7682C19.6761 14.1014 20.2708 12.1418 20.271 10.137C20.2714 8.80593 20.0096 7.48782 19.5005 6.25797C18.9914 5.02811 18.245 3.91059 17.3039 2.96924C16.3628 2.02789 15.2455 1.28116 14.0158 0.771692C12.7861 0.262223 11.4681 1.39074e-07 10.137 1.97398e-07ZM4.73703 11.77C4.60723 11.7695 4.48291 11.7177 4.39113 11.6259C4.29935 11.5341 4.24755 11.4098 4.24703 11.28V8.991C4.24755 8.86121 4.29935 8.73688 4.39113 8.6451C4.48291 8.55332 4.60723 8.50153 4.73703 8.501H15.527C15.6568 8.50153 15.7811 8.55332 15.8729 8.6451C15.9647 8.73688 16.0165 8.86121 16.017 8.991V11.28C16.0165 11.4098 15.9647 11.5341 15.8729 11.6259C15.7811 11.7177 15.6568 11.7695 15.527 11.77H4.73703Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <label htmlFor="">In Progress</label>
              </div>
            </div>
            <Tabs
              variant={"pills"}
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              unmountOnExit
            >
              <Tab eventKey={1} title={<span>Active Ticket: 6</span>}>
                <hr className="customTabListHr" />
                <ActiveTicketTab />
              </Tab>
              <Tab eventKey={2} title={<span>Close Ticket: 200</span>}>
                <hr className="customTabListHr" />
                <ActiveTicketTab />
              </Tab>
            </Tabs>
          </div>
        </section>
        {/* -------- */}
      </main>
    </CombinedHeader>
  );
};

export default Support;
