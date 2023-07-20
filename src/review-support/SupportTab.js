import React from "react";
import { Button, Col, Row, Table, Modal, Form } from "react-bootstrap";
import { ExternalLinkIcon, PlusIcon } from "../common/Icons";
import crownImg from "../assets/images/wallet/tablePrice.png";
import avatarImg from "../assets/images/wallet/tableItem.png";

const SupportTab = () => {
  const supportTicketData = [
    {
      statusClass: "onHold",
      statusTitle: "On Hold",
    },
    {
      statusClass: "onHold",
      statusTitle: "On Hold",
    },
    {
      statusClass: "onHold",
      statusTitle: "On Hold",
    },
    {
      statusClass: "inProgress",
      statusTitle: "In Progress",
    },
    {
      statusClass: "inProgress",
      statusTitle: "In Progress",
    },
    {
      statusClass: "completed",
      statusTitle: "Completed",
    },
    {
      statusClass: "completed",
      statusTitle: "Completed",
    },
    {
      statusClass: "completed",
      statusTitle: "Completed",
    },
  ];

  function MyVerticallyCenteredModal(props) {
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
              <h1 className="title mb-0">Support Form</h1>
              <p className="content mb-0">Hi, how can we help you?</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-2 p-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" name="" placeholder="DANIEL VLOSKY" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" name="" placeholder="DANIELVLOSKY@GMAIL.COM" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mail Subject</Form.Label>
              <Form.Control type="text" name="" placeholder="GAMEPLAY NOT WORKING WELL" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" name="" as="textarea" placeholder="Write your support message here" style={{ height: '185px' }}/>
            </Form.Group>
            <Button className="skyLightBorderedBtn mt-4 w-100 justify-content-center" variant="">SEND MESSAGE</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);


  return (
    <React.Fragment>
      <div className="tabSideBtns text-end">
        <Button className="mb-3 lightSkyBorderBtn" onClick={() => setModalShow(true)}>
          <div className="d-flex align-items-center">
            <PlusIcon className={"me-2"} />
            <span>Add New Ticket</span>
          </div>
        </Button>
        <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
      </div>
      <div className="table-responsive reviewRatingTable">
        <Table hover>
          <thead>
            <tr>
              <th style={{ minWidth: "150px" }}>TICKET ID</th>
              <th style={{ width: "550px", minWidth: "300px" }}>MESSAGE</th>
              <th style={{ minWidth: "150px" }}>STATUS</th>
              <th style={{ minWidth: "150px" }}>LAST UPDATE</th>
              <th style={{ minWidth: "100px" }}>SUPPORT</th>
              <th style={{ minWidth: "150px" }} className="text-center">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {supportTicketData.map((s, i) => (
              <tr key={i}>
                <td>
                  <span className="title">3829</span>
                </td>
                <td>
                  <p className="mb-1 review">
                    Thank you for the response, I'm attaching a ledger pdf file
                    to this message so feel free to review that and let me know
                    what you think.
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span
                      className={`me-2 mb-1 statusDot ${s.statusClass}`}
                    ></span>
                    <span className="title">{s.statusTitle}</span>
                  </div>
                </td>
                <td>
                  <span className="title">25 Aug 2022</span>
                </td>
                <td>
                  <span className="title">Admin</span>
                </td>
                <td className="text-center">
                  <span className="title">
                    <DownArrowIcon />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};

export const DownArrowIcon = ({ className }) => (
  <svg
    width="22"
    height="10"
    viewBox="0 0 24 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.222 8.75235L19.9058 1.06857C20.7383 0.236044 22.0897 0.236044 22.9222 1.06857C23.7547 1.9011 23.7547 3.25244 22.9222 4.08497L13.6438 13.3634C12.8575 14.1497 11.5846 14.1497 10.8003 13.3634L1.52186 4.08497C0.689329 3.25244 0.689329 1.9011 1.52186 1.06857C2.35438 0.236044 3.70573 0.236044 4.53826 1.06857L12.222 8.75235Z"
      fill="white"
    />
  </svg>
);

export default SupportTab;
