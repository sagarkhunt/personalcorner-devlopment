import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Row, Modal, Form, Spinner } from "react-bootstrap";
// =====
import diamondImg from "../assets/images/wallet/diamond.png";
import diamondImg2 from "../assets/images/wallet/diamond2.png";
// import diamondImg3 from "../assets/images/wallet/diamond3.png";
// import diamondImg4 from "../assets/images/wallet/diamond4.png";
// import chartImg from "../assets/images/wallet/chart.png";
import { PlusIcon } from "../common/Icons";
import {
  depositAmountInL2,
  getBalances,
  getL2Balance,
  showMagicLinkWallet,
} from "../utils/contract";
import { getEthPrice } from "../utils/etherScan";
import Web3 from "web3";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  amount: Yup.number().lessThan(
    Yup.ref("l1Price"),
    "amount must me less then L1 balance"
  ),
});

const OverviewTab = () => {
  const [overviewData, setOverViewData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ethPrice, setEthPrice] = useState(null);
  const [l1Balance, setL1Balance] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [addBalanceShow, setAddBalanceShow] = useState(false);

  const getBalancesWithPublicKey = async () => {
    setIsLoading(true);
    const public_key = localStorage.getItem("publicKey");
    let l2Balance = 0;
    let l1Balance = 0;
    let usdPrice = 0;
    let l2BalanceEth = 0;
    try {
      const usdResponse = await getEthPrice();
      usdPrice = usdResponse.usd;
      setEthPrice(usdPrice);
    } catch (error) {}

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
      setL1Balance(l1Balance);
    } catch (error) {}

    setOverViewData([
      {
        title: "OVERALL BALANCE",
        balance: `$ ${Number(
          (Number(l1Balance) + Number(l2BalanceEth)) * usdPrice
        ).toFixed(2)}`,
        img: diamondImg,
        isPlusButtonDisabled: false,
      },
      {
        title: "OVERALL BALANCE (L1)",
        balance: `${Number(l1Balance).toFixed(7)} ETH`,
        img: diamondImg2,
        isPlusButtonDisabled: false,
      },
      {
        title: "OVERALL BALANCE (L2)",
        balance: l2Balance ? `${l2BalanceEth} ETH` : "0 ETH",
        img: diamondImg2,
        isPlusButtonDisabled: true,
      },
    ]);
    setIsLoading(false);
  };

  useEffect(() => {
    getBalancesWithPublicKey();
  }, []);

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
              <h1 className="title mb-0">Add New Card</h1>
              <p className="content mb-0">
                Enter the card details to save new card
              </p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-2 p-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Enter Credit Card Number</Form.Label>
              <div className="d-flex align-items-center justify-content-between fieldSkyBG">
                <input
                  type="text"
                  name=""
                  placeholder="0000 0000 0000 0000"
                  className="fieldTransparent"
                ></input>
                <div className="d-flex align-items-center justify-content-between">
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.8333 12.4219C35.6884 12.4219 33.5645 12.8443 31.5828 13.6652C29.6012 14.486 27.8006 15.6891 26.2839 17.2058C24.7672 18.7225 23.5641 20.5231 22.7433 22.5047C21.9225 24.4864 21.5 26.6103 21.5 28.7552C21.5 30.9001 21.9225 33.0241 22.7433 35.0057C23.5641 36.9874 24.7672 38.7879 26.2839 40.3046C27.8006 41.8213 29.6012 43.0244 31.5828 43.8452C33.5645 44.6661 35.6884 45.0885 37.8333 45.0885C39.9783 45.0885 42.1022 44.6661 44.0838 43.8452C46.0655 43.0244 47.8661 41.8213 49.3827 40.3046C50.8994 38.7879 52.1025 36.9874 52.9234 35.0057C53.7442 33.0241 54.1667 30.9001 54.1667 28.7552C54.1667 26.6103 53.7442 24.4864 52.9234 22.5047C52.1025 20.5231 50.8994 18.7225 49.3827 17.2058C47.8661 15.6891 46.0655 14.486 44.0838 13.6652C42.1022 12.8443 39.9783 12.4219 37.8333 12.4219Z"
                      fill="#FF9800"
                    />
                    <path
                      d="M19.1668 12.4219C17.0219 12.4219 14.898 12.8443 12.9163 13.6652C10.9347 14.486 9.13411 15.6891 7.61742 17.2058C6.10073 18.7225 4.89762 20.5231 4.0768 22.5047C3.25597 24.4864 2.8335 26.6103 2.8335 28.7552C2.8335 30.9001 3.25597 33.0241 4.0768 35.0057C4.89762 36.9874 6.10073 38.7879 7.61742 40.3046C9.13411 41.8213 10.9347 43.0244 12.9163 43.8452C14.898 44.6661 17.0219 45.0885 19.1668 45.0885C21.3118 45.0885 23.4357 44.6661 25.4173 43.8452C27.399 43.0244 29.1996 41.8213 30.7162 40.3046C32.2329 38.7879 33.436 36.9874 34.2569 35.0057C35.0777 33.0241 35.5002 30.9001 35.5002 28.7552C35.5002 26.6103 35.0777 24.4864 34.2569 22.5047C33.436 20.5231 32.2329 18.7225 30.7162 17.2058C29.1996 15.6891 27.399 14.486 25.4173 13.6652C23.4357 12.8443 21.3118 12.4219 19.1668 12.4219Z"
                      fill="#D50000"
                    />
                    <path
                      d="M21.5 28.7566C21.5 34.3041 24.272 39.1983 28.5 42.1499C32.728 39.1983 35.5 34.3041 35.5 28.7566C35.5 23.2091 32.728 18.3149 28.5 15.3633C24.272 18.3149 21.5 23.2091 21.5 28.7566Z"
                      fill="#FF3D00"
                    />
                  </svg>
                </div>
              </div>
            </Form.Group>

            <Row>
              <Col xxl={6} xl={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Expiry Date</Form.Label>
                  <div className="d-flex align-items-center justify-content-between fieldSkyBG">
                    <input
                      type="text"
                      name=""
                      placeholder="MM/YY"
                      className="fieldTransparent"
                    ></input>
                    <div className="d-flex align-items-center justify-content-between">
                      <svg
                        width="36"
                        height="33"
                        viewBox="0 0 36 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0.511719V4.51172H4C1.8 4.51172 0 6.31172 0 8.51172V36.5117C0 38.7117 1.8 40.5117 4 40.5117H32C34.2 40.5117 36 38.7117 36 36.5117V8.51172C36 6.31172 34.2 4.51172 32 4.51172H30V0.511719H26V4.51172H10V0.511719H6ZM4 14.5117H32V36.5117H4V14.5117Z"
                          fill="#112E88"
                        />
                      </svg>
                    </div>
                  </div>
                </Form.Group>
              </Col>
              <Col xxl={6} xl={12}>
                <Form.Group className="mb-3">
                  <Form.Label>CVV Number</Form.Label>
                  <div className="d-flex align-items-center justify-content-between fieldSkyBG">
                    <input
                      type="text"
                      name=""
                      placeholder="***"
                      className="fieldTransparent"
                    ></input>
                    <div className="d-flex align-items-center justify-content-between">
                      <svg
                        width="40"
                        height="33"
                        viewBox="0 0 40 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 0.511719C1.79 0.511719 0 2.30172 0 4.51172V6.51172H40V4.51172C40 2.30172 38.21 0.511719 36 0.511719H4ZM0 12.5117V28.5117C0 30.7217 1.79 32.5117 4 32.5117H36C38.21 32.5117 40 30.7217 40 28.5117V12.5117H0Z"
                          fill="#112E88"
                        />
                      </svg>
                    </div>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control
                type="text"
                name=""
                placeholder="Enter Cardholder’s full name"
              />
            </Form.Group>

            <Button className="btn yellowBtn mt-4 w-100 justify-content-center">
              Add NEW CARD
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function AddBalanceModal(props) {
    const formik = useFormik({
      initialValues: {
        l1Price: Number(l1Balance).toFixed(7),
        amount: "",
      },
      validationSchema,
      onSubmit: async (values, { setSubmitting }) => {
        setSubmitting(true);
        const deposit = await depositAmountInL2(values.amount);
        await deposit.wait();
        setSubmitting(false);
        setAddBalanceShow(false);
        getBalancesWithPublicKey();
      },
    });
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
              <h1 className="title mb-0">Add Balance In L2</h1>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-2 p-md-4" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>L1 Balance</Form.Label>
              <Form.Control
                type="text"
                name="l1price"
                className="fieldTransparent w-100"
                value={formik.values.l1Price}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              {/* <div className="d-flex align-items-center justify-content-between fieldSkyBG"> */}
              <Form.Control
                type="text"
                name="amount"
                placeholder="amount"
                className="fieldTransparent w-100"
                onChange={formik.handleChange}
                value={formik.values.amount}
              />
              {formik.errors.amount && formik.touched.amount ? (
                <Form.Text className="text-danger">
                  {formik.errors.amount}
                </Form.Text>
              ) : null}
              {/* </div> */}
            </Form.Group>

            <Button
              className="btn yellowBtn mt-4 w-100 justify-content-center"
              type="submit"
              disabled={formik.isSubmitting || formik.values.amount == 0}
            >
              {formik.isSubmitting ? (
                <Fragment>
                  <Spinner animation="border" size="sm" className="me-2" />{" "}
                  Please wait...
                </Fragment>
              ) : (
                "Add Balance"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="overviewTab">
      <Row className="mt-4">
        <Col xxl={5} xl={12}>
          <div>
            <div className="tabSideBtns text-end">
              <Button
                className="lightSkyBorderBtn mb-0 mb-md-0"
                onClick={() => setModalShow(true)}
                disabled
              >
                <div className="d-flex align-items-center">
                  <PlusIcon className={"me-2"} />
                  <span>Add New Wallet</span>
                </div>
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="tabSideBtns text-end">
              <Button
                className="lightSkyBorderBtn mb-0 mb-md-0"
                onClick={() => setAddBalanceShow(true)}
              >
                <div className="d-flex align-items-center">
                  <PlusIcon className={"me-2"} />
                  <span>Add Balance In L2</span>
                </div>
              </Button>
              <AddBalanceModal
                show={addBalanceShow}
                onHide={() => setAddBalanceShow(false)}
              />
            </div>
            <div
              className="w-100"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {isLoading && (
                <p
                  className="title"
                  style={{ color: "white", fontSize: "24px" }}
                >
                  Please wait...
                </p>
              )}
            </div>
            <Row className="mt-4">
              {overviewData.map((d, i) => (
                <Col xxl={6} xl={4} lg={6} md={12} key={i}>
                  <Card className={`mb-4 overviewCard`}>
                    <div className="m-auto py-4">
                      <Card.Img
                        variant="top"
                        className="img-fluid"
                        src={d.img}
                      />
                    </div>
                    <Card.Body className="body1">
                      <Card.Text className="mb-1">WALLET BALANCE</Card.Text>
                      <Card.Title className="mb-0">{d.title}</Card.Title>
                    </Card.Body>
                    <Card.Body className="d-flex align-items-center justify-content-between body2">
                      <Card.Title className="mb-0">{d.balance}</Card.Title>
                      {!d.isPlusButtonDisabled && (
                        <button
                          className="plusYellowBtn"
                          onClick={async () => {
                            showMagicLinkWallet();
                          }}
                        >
                          <svg
                            height="20"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.055 0.710938C11.3146 0.710938 10.8242 1.20132 10.8242 1.94171V10.5571H2.2088C1.46841 10.5571 0.978027 11.0475 0.978027 11.7879V14.2494C0.978027 14.9898 1.46841 15.4802 2.2088 15.4802H10.8242V24.0956C10.8242 24.8359 11.3146 25.3263 12.055 25.3263H14.5165C15.2569 25.3263 15.7473 24.8359 15.7473 24.0956V15.4802H24.3626C25.103 15.4802 25.5934 14.9898 25.5934 14.2494V11.7879C25.5934 11.0475 25.103 10.5571 24.3626 10.5571H15.7473V1.94171C15.7473 1.20132 15.2569 0.710938 14.5165 0.710938H12.055Z"
                              fill="#395106"
                            />
                          </svg>
                        </button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        {/* <Col xxl={7} xl={12}>
          <div className="mt-4 chartSec">
            <img className="img-fluid" src={chartImg} alt="chart" />
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default OverviewTab;
