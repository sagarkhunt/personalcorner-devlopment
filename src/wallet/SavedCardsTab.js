import React from "react";
import { Button, Card, Col, Row, Form, Modal } from "react-bootstrap";
import { PlusIcon } from "../common/Icons";
// import visaCardSkinImg from "../assets/images/wallet/visaCardSkin.png";
import NoiseImg from "../assets/images/wallet/Noise.png";
import PatternImg1 from "../assets/images/wallet/Pattern1.png";
import PatternImg2 from "../assets/images/wallet/Pattern2.png";

const SavedCardsTab = () => {
  const savedCardsData = [
    {
      logo: <CardLogoIcon1 className={"CardLogoIcon1"} />,
      visaLogo: <VisaWhiteIcon className={"VisaWhiteIcon"} />,
      skin: [NoiseImg, PatternImg1],
      bgColor: "#8ed071",
    },
    {
      logo: <CardLogoIcon1 className={"CardLogoIcon1"} />,
      visaLogo: <VisaIcon2 className={"VisaIcon2"} />,
      skin: [NoiseImg, PatternImg2],
      bgColor: "#f177b5",
    },
    {
      logo: <CardLogoIcon2 className={"CardLogoIcon2"} />,
      visaLogo: <VisaBlackIcon className={"VisaBlackIcon"} />,
      skin: [NoiseImg, PatternImg2],
      bgColor: "#fce500",
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
  
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <div className="savedCardTab">
      <div className="tabSideBtns text-end">
        <Button className="lightSkyBorderBtn" onClick={() => setModalShow(true)}>
          <div className="d-flex align-items-center">
            <PlusIcon className={"me-2"} />
            <span>Add New Card</span>
          </div>
        </Button>
        <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
      </div>
      <Row className="mt-4">
        {savedCardsData.map((c, i) => (
          <Col xxl={4} xl={6} lg={6} md={12} key={i} className="mb-4">
            <Card className="m-auto savedCards">
              <Card.Header
                className="cardHeader"
                style={{
                  backgroundColor: c.bgColor,
                  backgroundImage: c.skin.map((skin) => `url(${skin})`),
                  backgroundRepeat: c.skin.map(() => `no-repeat`),
                }}
              >
                <div className="cardLogos">
                  {c.logo}
                  {c.visaLogo}
                </div>
              </Card.Header>
              <div className="bodyContent">
                <Card.Title className="cardNumber">
                  6037 9975 9598 3090
                </Card.Title>
                <div className="text-end expDate">
                  <span className="title">Exp</span>
                  <Card.Title>09/24</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export const CardLogoIcon1 = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 23 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.8632 1.09372C14.6394 0.493347 15.7553 0.635854 16.3557 1.41202C24.9184 12.4819 24.8939 26.9636 16.358 38.0475C15.7593 38.8249 14.6437 38.9698 13.8662 38.3711C13.0888 37.7724 12.9439 36.6568 13.5426 35.8793C21.0981 26.0685 21.1136 13.371 13.5449 3.58616C12.9446 2.81 13.0871 1.69409 13.8632 1.09372Z"
      fill="white"
    />
    <path
      d="M6.77205 5.67692C7.5477 5.07589 8.66372 5.21745 9.26475 5.9931C15.6878 14.2823 15.6617 25.1623 9.26791 33.4634C8.66913 34.2408 7.55353 34.3856 6.77613 33.7868C5.99874 33.188 5.85394 32.0724 6.45271 31.295C11.8672 24.2654 11.8811 15.1712 6.45586 8.16962C5.85483 7.39397 5.99639 6.27795 6.77205 5.67692Z"
      fill="white"
    />
    <path
      d="M3.36399 12.3029C2.76551 11.5253 1.64995 11.3801 0.872332 11.9786C0.0947115 12.5771 -0.0505075 13.6926 0.547976 14.4702C3.00087 17.6573 3.0157 21.7505 0.548793 24.9508C-0.0502745 25.728 0.0941043 26.8436 0.871275 27.4427C1.64845 28.0418 2.76411 27.8974 3.36318 27.1202C6.82044 22.6351 6.79525 16.7612 3.36399 12.3029Z"
      fill="white"
    />
  </svg>
);
export const CardLogoIcon2 = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.7699 13.6064L18.2542 25.1221L11.5535 18.4214L29.7699 0.205078L47.9934 18.4262L41.2927 25.1269L29.7699 13.6064ZM6.82153 23.1534L0.12085 29.8541L6.82153 36.5524L13.5222 29.8517L6.82153 23.1534ZM29.7699 46.1018L18.2542 34.5861L11.544 41.2773L11.5535 41.2868L29.7699 59.5031L47.9934 41.282L47.9957 41.2773L41.2903 34.5813L29.7699 46.1018ZM52.7182 23.1558L46.0175 29.8565L52.7182 36.5572L59.4189 29.8565L52.7182 23.1558ZM29.7699 23.0499L36.5679 29.8478H36.5726L36.5702 29.8526L29.7699 36.6529L22.9768 29.8597L22.9673 29.8502L22.9768 29.8407L24.1675 28.65L24.7438 28.0736L29.7699 23.0499Z"
      fill="#111111"
    />
  </svg>
);
export const VisaWhiteIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 116 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.1588 37.7539H40.7917L46.645 1.38867H56.012L50.1588 37.7539Z"
      fill="white"
    />
    <path
      d="M32.9078 1.38867L23.9739 26.4007L22.9149 21.0111L19.7669 4.62827C19.7669 4.62827 19.3818 1.38867 15.3193 1.38867H0.55146L0.378174 2.00157C3.83514 2.87876 7.13977 4.28279 10.1784 6.16538L18.3229 37.7539H28.0846L42.9872 1.38867H32.9078Z"
      fill="white"
    />
    <path
      d="M106.602 37.7569H115.208L107.709 1.39169H100.171C99.2585 1.32084 98.3475 1.54581 97.5702 2.03392C96.7929 2.52202 96.1898 3.24784 95.8485 4.10595L81.8701 37.7569H91.6415L93.5669 32.3576H105.504L106.602 37.7569ZM96.2913 24.8958L101.22 11.2759L103.983 24.8958H96.2913Z"
      fill="white"
    />
    <path
      d="M82.603 10.136L83.9412 2.35322C81.2365 1.3642 78.3927 0.81899 75.5175 0.738281C70.8677 0.738281 59.8256 2.791 59.8256 12.7822C59.8256 22.18 72.7835 22.2967 72.7835 27.2291C72.7835 32.1614 61.1637 31.2761 57.3225 28.2019L55.9266 36.3252C59.2768 37.7475 62.8831 38.4499 66.5163 38.3877C72.9086 38.3877 82.5549 35.0411 82.5549 25.9352C82.5549 16.479 69.4814 15.5937 69.4814 11.4883C69.4814 7.38286 78.5982 7.89848 82.603 10.136Z"
      fill="white"
    />
    <path
      d="M22.9149 21.0208L19.7669 4.62827C19.7669 4.62827 19.3818 1.38867 15.3193 1.38867H0.55146L0.378174 2.00157C5.46404 3.31191 10.2094 5.71793 14.2892 9.05475C18.1618 12.2016 21.1384 16.3309 22.9149 21.0208Z"
      fill="white"
    />
  </svg>
);
export const VisaIcon2 = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 92 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.5" cx="63.6975" cy="28.5613" r="28.237" fill="white" />
    <circle opacity="0.75" cx="29.1853" cy="28.5613" r="28.237" fill="white" />
  </svg>
);
export const VisaBlackIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 115 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.8241 37.7539H40.457L46.3102 1.38867H55.6773L49.8241 37.7539Z"
      fill="#171212"
    />
    <path
      d="M32.5728 1.38867L23.639 26.4007L22.58 21.0111L19.432 4.62827C19.432 4.62827 19.0469 1.38867 14.9843 1.38867H0.216499L0.0432129 2.00157C3.50018 2.87876 6.80481 4.28279 9.84348 6.16538L17.9879 37.7539H27.7497L42.6522 1.38867H32.5728Z"
      fill="#171212"
    />
    <path
      d="M106.267 37.7569H114.874L107.374 1.39169H99.8363C98.9238 1.32084 98.0128 1.54581 97.2355 2.03392C96.4581 2.52202 95.855 3.24784 95.5138 4.10595L81.5354 37.7569H91.3068L93.2322 32.3576H105.17L106.267 37.7569ZM95.9566 24.8958L100.886 11.2759L103.649 24.8958H95.9566Z"
      fill="#171212"
    />
    <path
      d="M82.2682 10.136L83.6063 2.35322C80.9017 1.3642 78.0579 0.81899 75.1827 0.738281C70.5329 0.738281 59.4907 2.791 59.4907 12.7822C59.4907 22.18 72.4486 22.2967 72.4486 27.2291C72.4486 32.1614 60.8289 31.2761 56.9877 28.2019L55.5918 36.3252C58.9419 37.7475 62.5482 38.4499 66.1815 38.3877C72.5738 38.3877 82.22 35.0411 82.22 25.9352C82.22 16.479 69.1466 15.5937 69.1466 11.4883C69.1466 7.38286 78.2633 7.89848 82.2682 10.136Z"
      fill="#171212"
    />
    <path
      d="M22.58 21.0208L19.432 4.62827C19.432 4.62827 19.0469 1.38867 14.9843 1.38867H0.216499L0.0432129 2.00157C5.12908 3.31191 9.87448 5.71793 13.9542 9.05475C17.8268 12.2016 20.8035 16.3309 22.58 21.0208Z"
      fill="#171212"
    />
  </svg>
);
export const MiniIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 0C3.14 0 0 3.14 0 7C0 10.86 3.14 14 7 14C8.48855 14 9.86634 13.5295 11.002 12.7344C12.1374 13.5293 13.5147 14 15 14C18.8541 14 22 10.8541 22 7C22 3.14585 18.8541 0 15 0C13.5147 0 12.1374 0.470709 11.002 1.26562C9.86634 0.470487 8.48855 0 7 0ZM15 2C17.7733 2 20 4.22673 20 7C20 9.77327 17.7733 12 15 12C14.0835 12 13.2384 11.7382 12.502 11.3125C13.4372 10.1223 14 8.62767 14 7C14 5.37233 13.4372 3.87767 12.502 2.6875C13.2384 2.26177 14.0835 2 15 2Z"
      fill="white"
    />
  </svg>
);

export default SavedCardsTab;
