import React from "react";
import { Col, Form, Row, Modal, Button } from "react-bootstrap";
import avatarImg from "../assets/images/wallet/tableItem.png";

const AccountTab = () => {
  // Modal Edit Bio
  function ModalBio(props) {
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
              <h1 className="title mb-0">Update Bio</h1>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-2 p-md-4">
            <Form.Group className="mb-3">
              <Form.Label>About Me</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="Trevon De'Sean Diggs is an American football cornerback for the Dallas Cowboys of the National Football League. He played college football at Alabama and was drafted by the Cowboys in the second round of the 2020 NFL Draft."
              />
              {/* <Form.Control type="text" name="" placeholder="Enter Cardholder’s full name" /> */}
            </Form.Group>

            <Button className="btn yellowBtn mt-4 w-100 justify-content-center">
              Save changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  const [modalBio, setModalEditBio] = React.useState(false);

  // Modal Persona lInfo
  function ModalPersonalInfo(props) {
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
              <h1 className="title mb-0">Update Personal Information</h1>
              <p className="content mb-0">Make changes to your personal info</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-2 p-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Display Name</Form.Label>
              <Form.Control type="text" name="" placeholder="DANIEL VLOSKY" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                name=""
                placeholder="DANIELVLOSKY@GMAIL.COM"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="" placeholder="+16282900101" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name=""
                placeholder="23 HAYHURST STREET, MCALLEN, NEW YORK, U.S.A"
              />
            </Form.Group>

            <Button className="btn yellowBtn mt-4 w-100 justify-content-center">
              Save changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  const [modalPersonalInfo, setModalPersonalInfo] = React.useState(false);

  // Modal Persona lInfo
  function ModalSocialInfo(props) {
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
              <h1 className="title mb-0">Update Social Information</h1>
              <p className="content mb-0">Make changes to your social info</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-2 p-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Discord</Form.Label>
              <Form.Control
                type="text"
                name=""
                placeholder="DANIELVLOSKY#9726"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Facebook</Form.Label>
              <Form.Control type="text" name="" placeholder="DANIEL VLOSKY" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Twitter</Form.Label>
              <Form.Control type="text" name="" placeholder="GEAUXEDITS" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Instagram</Form.Label>
              <Form.Control type="text" name="" placeholder="GEAUXEDITS" />
            </Form.Group>

            <Button className="btn yellowBtn mt-4 w-100 justify-content-center">
              Save changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  const [modalSocialInfo, setModalSocialInfo] = React.useState(false);

  const inputsData = [
    {
      id: "displayName",
      label: "DISPLAY NAME",
      value: "DANIEL VLOSKY",
      type: "text",
    },
    {
      id: "email",
      label: "EMAIL ADDRESS",
      value: "DANIELVLOSKY@GMAIL.COM",
      type: "email",
    },
    {
      id: "phone",
      label: "PHONE NUMBER",
      value: "+16282900101",
      type: "text",
    },
    {
      id: "address",
      label: "ADDRESS",
      value: "23 HAYHURST STREET, MCALLEN, NEW YORK, U.S.A",
      type: "text",
    },
    {
      id: "discord",
      label: "DISCORD",
      value: "DANIELVLOSKY#9726",
      type: "text",
    },
    {
      id: "facebook",
      label: "FACEBOOK",
      value: "DANIELVLOSKY",
      type: "text",
    },
    {
      id: "twitter",
      label: "TWITTER",
      value: "GEAUXEDITS",
      type: "text",
    },
    {
      id: "instagram",
      label: "INSTAGRAM",
      value: "GEAUXEDITS",
      type: "text",
    },
  ];
  const editUnEdit = (id) => {
    const input = document.getElementById(id);
    if (input.disabled) {
      return (input.disabled = false);
    } else {
      return (input.disabled = true);
    }
  };
  return (
    <>
      <div className="accountTab">
        <h4 className="mt-5 mainHeading">MY ACCOUNT</h4>
        <div className="darkBlueBg">
          <div className="row bioArea">
            <div className="mb-4 col-xxl-1 col-xl-1 col-lg-1">
              <div className="profile">
                <img src={avatarImg} alt="" />
              </div>
            </div>
            <div className="mb-4 col-xxl-9 col-xl-9 col-lg-9">
              <h5 className="mb-2 name">DANIEL VLOSKY</h5>
              <p className="mb-0 bio">
                Trevon De'Sean Diggs is an American football cornerback for the
                Dallas Cowboys of the National Football League. He played
                college football at Alabama and was drafted by the Cowboys in
                the second round of the 2020 NFL Draft.
              </p>
            </div>
            <div className="mb-4 col-xxl-2 col-xl-2 col-lg-2 text-end">
              <button className="btnGlow" onClick={() => setModalEditBio(true)}>
                EDIT BIO
              </button>
            </div>
          </div>
          <Form>
            <Row className="mt-2">
              {inputsData.map((input, i) => (
                <Col xxl={6} xl={12} key={i}>
                  <Form.Group className="mb-3 customInput">
                    <div className="customFormGroup">
                      <Form.Label className="mb-1 customLabel1">
                        {input.label}
                      </Form.Label>
                      <Form.Control
                        id={input.id}
                        disabled
                        type={input.type}
                        defaultValue={input.value}
                        placeholder={input.label}
                        className="p-0 btnDisable"
                      />
                    </div>
                    {i <= 3 ? (
                      <button
                        type="button"
                        onClick={() => {
                          editUnEdit(input.id);
                          setModalPersonalInfo(true);
                        }}
                        className="ms-4 btnLightBlue"
                      >
                        EDIT
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          editUnEdit(input.id);
                          setModalSocialInfo(true);
                        }}
                        className="ms-4 btnLightBlue"
                      >
                        EDIT
                      </button>
                    )}
                  </Form.Group>
                </Col>
              ))}
            </Row>
          </Form>
          <div></div>
        </div>
      </div>
      {/* ======= */}
      <ModalPersonalInfo
        show={modalPersonalInfo}
        onHide={() => setModalPersonalInfo(false)}
      />
      <ModalBio show={modalBio} onHide={() => setModalEditBio(false)} />

      <ModalSocialInfo
        show={modalSocialInfo}
        onHide={() => setModalSocialInfo(false)}
      />
    </>
  );
};

export default AccountTab;
