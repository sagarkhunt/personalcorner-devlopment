import React, { Fragment, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Marketplace/common/Header";

import { useDispatch, useSelector } from "react-redux";
import { getMyCollection } from "../store/collection/collection.fetch";

const Collection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userCollection, userCollectionLoading } = useSelector(
    (_state) => _state.collection
  );

  useEffect(() => {
    dispatch(getMyCollection());
  }, [dispatch]);

  return (
    <>
      <div className="LayoutBG athleteSection nftCollectionPage">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <div className="d-flex align-items-center pageMainTitle">
              <NftCollectionIcon className={"headerTitleIcon"} />
              <div className="font54White ms-4">My NFT Collection</div>
            </div>
            <p className="titleTextMini">MANAGE YOUR ATHLETE AND GEAR ITEMS</p>
            <Header />
          </div>

          <Row className="mt-5">
            <Col xxl={6} xl={12}>
              {userCollectionLoading ? (
                <div className="text-center">
                  <Spinner animation="border" variant="light" />
                </div>
              ) : (
                <Fragment>
                  {userCollection.length > 0 ? (
                    <Row>
                      {userCollection.map((n, i) => (
                        <Col xxl={4} xl={6} lg={6} className="mb-4" key={i}>
                          <Card
                            style={{
                              maxWidth: "500px",
                              // backgroundColor: n.themeColor,
                            }}
                            className="h-100 m-auto nftCards"
                          >
                            <Card.Header
                              className="m-auto"
                              // style={{ backgroundColor: n.themeColor }}
                            >
                              <Card.Img
                                className="img-fluid"
                                variant="top"
                                src={n.imageUrl}
                              />
                            </Card.Header>
                            <Card.Body>
                              <Card.Title>{n.name}</Card.Title>
                              <button
                                type="button"
                                onClick={() =>
                                  navigate("/collection/detail", {
                                    state: { collection: n },
                                  })
                                }
                                // style={{ color: n.themeColor }}
                                className="btnLink"
                              >
                                {n.nft.length} Items
                                <RightArrowIcon
                                  className={"mb-1 ms-2 RightArrowIcon"}
                                  fill="#000000"
                                />
                              </button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <p
                      style={{ color: "white", fontSize: "22px" }}
                      className="d-flex w-100 justify-content-center"
                    >
                      No collection available.
                    </p>
                  )}
                </Fragment>
              )}
            </Col>
            {/* <Col xxl={6} xl={12}>
              <div className="rightSec">
                <div className="mb-3 topAthlete">
                  <div className="heading">TOP ATHLETE</div>
                  <div className="details">
                    <div className="mb-2 d-flex align-items-center">
                      <div className="playerPic">
                        <img className="img-fluid" src={avatarImg} />
                      </div>
                      <div className="ms-2">
                        <h2 className="mb-2">TREVON DIGGS #3142</h2>
                        <p className="mb-0">
                          <span>Position:</span> Cornerback
                        </p>
                      </div>
                    </div>
                    <div className="m-2 playerLabel">
                      <span>90</span>
                    </div>
                  </div>
                  <div className="mt-1 playerItems">
                    <div className="mx-2 d-flex align-items-center">
                      <GymDumbelIcon className={"GymDumbelIcon"} />
                      <span className="ms-3 font34White">02</span>
                    </div>
                    <div className="mx-2 d-flex align-items-center">
                      <JetIcon className={"JetIcon"} />
                      <span className="ms-3 font34White">09</span>
                    </div>
                    <div className="mx-2 d-flex align-items-center">
                      <ShieldIcon className={"ShieldIcon"} />
                      <span className="ms-3 font34White">15</span>
                    </div>
                    <div className="mx-2 d-flex align-items-center">
                      <BallIcon className={"BallIcon"} />
                      <span className="ms-3 font34White">00</span>
                    </div>
                    <div className="mx-2 d-flex align-items-center">
                      <FlashIcon className={"FlashIcon"} />
                      <span className="ms-3 font34White">00</span>
                    </div>
                  </div>
                </div>
                <div className="table-responsive trendingAthleteTable">
                  <Table hover>
                    <thead>
                      <tr>
                        <th colSpan={2}>
                          <div className="heading">TOP ATHLETE</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(7)].map((_, i) => (
                        <tr key={i}>
                          <td>
                            <div className="detailColumn">
                              <div className="me-2 img">
                                <img src={avatarImg} alt="" />
                              </div>
                              <div className="content">
                                <h4 className="title">Dez Bryant</h4>
                                <p className="mb-0">G.O.A.T.</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex flex-column">
                              <span className="title">620.32 ETH</span>
                              <span className="profit">+12.48%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

const NftCollectionIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 54 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9166 0.332031C11.0018 0.332031 8.58325 2.75053 8.58325 5.66536H13.9166H40.5832H45.9166C45.9166 2.75053 43.4981 0.332031 40.5832 0.332031H13.9166ZM11.2499 10.9987C8.33508 10.9987 5.91658 13.4172 5.91658 16.332V34.9987H0.583252V42.9987C0.583252 45.94 2.97525 48.332 5.91658 48.332H48.5832C51.5246 48.332 53.9166 45.94 53.9166 42.9987V34.9987H48.5832V16.332C48.5832 13.4172 46.1647 10.9987 43.2499 10.9987H11.2499ZM33.2343 22.1966L43.2499 34.9987H11.2499L19.1822 25.3997L25.0989 32.0404L33.2343 22.1966Z"
      fill="#B1E0FE"
    />
  </svg>
);
const RightArrowIcon = ({ className, fill }) => (
  <svg
    className={className}
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.417725 8.93337H15.2401L10.4255 13.748L12.0057 15.3281L19.4539 7.87992L12.0057 0.431709L10.4255 2.01188L15.2401 6.82647L0.417725 6.82647L0.417725 8.93337Z"
      fill={fill}
    />
  </svg>
);

// const GymDumbelIcon = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 39 34"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M5.2953 0.207225C4.87435 0.213805 4.4732 0.387128 4.17991 0.689154C3.88661 0.991179 3.72512 1.39723 3.73089 1.81819V4.99668C3.73387 4.78608 3.69496 4.577 3.61643 4.38157C3.5379 4.18615 3.42131 4.00828 3.27344 3.8583C3.12557 3.70832 2.94937 3.58923 2.75507 3.50795C2.56078 3.42666 2.35226 3.3848 2.14165 3.3848C1.93103 3.3848 1.72252 3.42666 1.52822 3.50795C1.33393 3.58923 1.15772 3.70832 1.00985 3.8583C0.861982 4.00828 0.745394 4.18615 0.666864 4.38157C0.588333 4.577 0.549427 4.78608 0.552405 4.99668V20.8891C0.549427 21.0997 0.588333 21.3088 0.666864 21.5042C0.745394 21.6996 0.861982 21.8775 1.00985 22.0275C1.15772 22.1774 1.33393 22.2965 1.52822 22.3778C1.72252 22.4591 1.93103 22.501 2.14165 22.501C2.35226 22.501 2.56078 22.4591 2.75507 22.3778C2.94937 22.2965 3.12557 22.1774 3.27344 22.0275C3.42131 21.8775 3.5379 21.6996 3.61643 21.5042C3.69496 21.3088 3.73387 21.0997 3.73089 20.8891V24.0676C3.72791 24.2782 3.76682 24.4873 3.84535 24.6827C3.92388 24.8781 4.04046 25.056 4.18833 25.206C4.33621 25.3559 4.51241 25.475 4.7067 25.5563C4.901 25.6376 5.10951 25.6794 5.32013 25.6794C5.53074 25.6794 5.73926 25.6376 5.93355 25.5563C6.12785 25.475 6.30405 25.3559 6.45192 25.206C6.59979 25.056 6.71638 24.8781 6.79491 24.6827C6.87344 24.4873 6.91235 24.2782 6.90937 24.0676V14.5321H8.49861V14.6594C8.49861 18.971 12.4153 21.1205 14.5576 21.9755L13.2819 31.8089C13.169 32.6798 13.7798 33.4763 14.6507 33.5875C14.7222 33.597 14.7872 33.5751 14.8587 33.5751L14.8556 33.603H25.9741H25.9772C26.0455 33.603 26.1152 33.597 26.1851 33.5875C27.056 33.4763 27.6684 32.6798 27.554 31.8089L26.2876 22.0438C27.5465 21.4181 28.6135 20.1346 28.9973 18.4338C29.1074 18.2088 29.1627 17.961 29.1587 17.7106V17.0774V14.5321H32.3372V24.0676C32.3343 24.2782 32.3732 24.4873 32.4517 24.6827C32.5302 24.8781 32.6468 25.056 32.7947 25.206C32.9426 25.3559 33.1188 25.475 33.313 25.5563C33.5073 25.6376 33.7159 25.6794 33.9265 25.6794C34.1371 25.6794 34.3456 25.6376 34.5399 25.5563C34.7342 25.475 34.9104 25.3559 35.0583 25.206C35.2061 25.056 35.3227 24.8781 35.4013 24.6827C35.4798 24.4873 35.5187 24.2782 35.5157 24.0676V20.8891C35.5127 21.0997 35.5516 21.3088 35.6302 21.5042C35.7087 21.6996 35.8253 21.8775 35.9732 22.0275C36.121 22.1774 36.2972 22.2965 36.4915 22.3778C36.6858 22.4591 36.8943 22.501 37.105 22.501C37.3156 22.501 37.5241 22.4591 37.7184 22.3778C37.9127 22.2965 38.0889 22.1774 38.2368 22.0275C38.3846 21.8775 38.5012 21.6996 38.5797 21.5042C38.6583 21.3088 38.6972 21.0997 38.6942 20.8891V4.99668C38.6972 4.78608 38.6583 4.577 38.5797 4.38157C38.5012 4.18615 38.3846 4.00828 38.2368 3.8583C38.0889 3.70832 37.9127 3.58923 37.7184 3.50795C37.5241 3.42666 37.3156 3.3848 37.105 3.3848C36.8943 3.3848 36.6858 3.42666 36.4915 3.50795C36.2972 3.58923 36.121 3.70832 35.9732 3.8583C35.8253 4.00828 35.7087 4.18615 35.6302 4.38157C35.5516 4.577 35.5127 4.78608 35.5157 4.99668V1.81819C35.5186 1.60557 35.4788 1.39452 35.3987 1.19755C35.3186 1.00058 35.1998 0.821692 35.0493 0.671475C34.8988 0.521258 34.7196 0.402769 34.5225 0.323025C34.3254 0.243281 34.1143 0.203904 33.9016 0.207225C33.4807 0.213805 33.0796 0.387128 32.7863 0.689154C32.493 0.991179 32.3315 1.39723 32.3372 1.81819V11.3536H29.1587V8.17516V4.99668C29.1617 4.78405 29.1219 4.57301 29.0418 4.37604C28.9616 4.17906 28.8428 4.00017 28.6923 3.84996C28.5418 3.69974 28.3627 3.58125 28.1655 3.50151C27.9684 3.42176 27.7573 3.38239 27.5447 3.38571C27.1237 3.39229 26.7226 3.56561 26.4293 3.86764C26.136 4.16966 25.9745 4.57571 25.9803 4.99668V6.58592H24.391V4.99668C24.3939 4.78405 24.3542 4.57301 24.274 4.37604C24.1939 4.17906 24.0751 4.00017 23.9246 3.84996C23.7741 3.69974 23.5949 3.58125 23.3978 3.50151C23.2007 3.42176 22.9896 3.38239 22.777 3.38571C22.356 3.39229 21.9549 3.56561 21.6616 3.86764C21.3683 4.16966 21.2068 4.57571 21.2125 4.99668V6.58592H19.6233V4.99668C19.6262 4.78405 19.5864 4.57301 19.5063 4.37604C19.4262 4.17906 19.3074 4.00017 19.1568 3.84996C19.0063 3.69974 18.8272 3.58125 18.6301 3.50151C18.433 3.42176 18.2218 3.38239 18.0092 3.38571C17.5883 3.39229 17.1871 3.56561 16.8938 3.86764C16.6005 4.16966 16.4391 4.57571 16.4448 4.99668V6.58592H14.8556V4.99668C14.8585 4.78405 14.8187 4.57301 14.7386 4.37604C14.6585 4.17906 14.5396 4.00017 14.3891 3.84996C14.2386 3.69974 14.0595 3.58125 13.8624 3.50151C13.6652 3.42176 13.4541 3.38239 13.2415 3.38571C12.8206 3.39229 12.4194 3.56561 12.1261 3.86764C11.8328 4.16966 11.6713 4.57571 11.6771 4.99668V11.3536H6.90937V1.81819C6.91228 1.60557 6.8725 1.39452 6.79238 1.19755C6.71225 1.00058 6.59342 0.821692 6.44291 0.671475C6.29241 0.521258 6.11329 0.402769 5.91616 0.323025C5.71904 0.243281 5.50792 0.203904 5.2953 0.207225Z"
//       fill="#C7CBCC"
//       fillOpacity="0.61"
//     />
//   </svg>
// );

// const JetIcon = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 33 34"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M11.1487 0.230469C9.23523 0.230469 7.17557 2.46812 7.17557 7.38205V10.6971L1.2842 16.5885C0.986161 16.8865 0.818685 17.2907 0.818604 17.7121V22.4798H3.99709V18.3702L7.17557 15.1917V20.8906C7.17557 21.7679 7.88596 22.4798 8.76481 22.4798H13.5325C14.4114 22.4798 15.1218 21.7679 15.1218 20.8906V7.38205C15.1218 2.46812 13.0621 0.230469 11.1487 0.230469ZM22.2734 0.230469C20.3599 0.230469 18.3003 2.46812 18.3003 7.38205V20.8906C18.3003 21.7679 19.0107 22.4798 19.8895 22.4798H24.6572C25.5361 22.4798 26.2465 21.7679 26.2465 20.8906V15.1917L29.4249 18.3702V22.4798H32.6034V17.7121C32.6033 17.2907 32.4359 16.8865 32.1378 16.5885L26.2465 10.6971V7.38205C26.2465 2.46812 24.1868 0.230469 22.2734 0.230469ZM11.1487 25.6583C9.83278 25.6583 8.76481 26.7263 8.76481 28.0422C8.76481 29.6314 11.1487 33.6045 11.1487 33.6045C11.1487 33.6045 13.5325 29.6314 13.5325 28.0422C13.5325 26.7263 12.4646 25.6583 11.1487 25.6583ZM22.2734 25.6583C20.9575 25.6583 19.8895 26.7263 19.8895 28.0422C19.8895 29.6314 22.2734 33.6045 22.2734 33.6045C22.2734 33.6045 24.6572 29.6314 24.6572 28.0422C24.6572 26.7263 23.5893 25.6583 22.2734 25.6583Z"
//       fill="#C7CBCC"
//       fillOpacity="0.61"
//     />
//   </svg>
// );
// const ShieldIcon = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 30 36"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M13.5093 1.21555L2.3846 6.15968C1.23558 6.66983 0.496582 7.80772 0.496582 9.06481V16.5342C0.496582 28.978 10.7297 34.7883 14.7998 35.6051C18.8698 34.7883 29.1029 28.978 29.1029 16.5342V9.06481C29.1029 7.80931 28.3639 6.66983 27.2149 6.15968L16.0902 1.21555C15.2686 0.850025 14.3309 0.850025 13.5093 1.21555Z"
//       fill="#C7CBCC"
//       fillOpacity="0.61"
//     />
//   </svg>
// );
// const BallIcon = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 33 33"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M30.6507 2.4232L30.6031 2.37552C26.5346 -1.53401 14.949 -0.167261 7.68619 6.95254C2.33045 12.4195 -1.84925 24.8633 3.15686 29.8535C4.5395 31.252 7.09818 32.0149 10.1654 32.0149C15.1238 32.0149 21.3855 29.9965 26.0737 25.3083C33.2412 18.1408 34.5921 6.53934 30.6507 2.4232ZM23.5786 15.7887L21.3219 18.0454L19.2718 15.9794L16.7449 18.5063L18.8109 20.5564L16.5542 22.8132L14.504 20.7472L11.6593 23.6078L9.40258 21.3511L12.2632 18.5063L10.1972 16.4562L12.4539 14.1995L14.504 16.2655L17.0309 13.7386L14.9649 11.6885L17.2216 9.43176L19.2718 11.4978L22.1165 8.63714L24.3732 10.8939L21.5126 13.7386L23.5786 15.7887Z"
//       fill="#C7CBCC"
//       fillOpacity="0.61"
//     />
//   </svg>
// );
// const FlashIcon = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 32"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M22.1471 14.5338H15.1544L16.7436 1.18418C16.9026 0.389561 15.949 -0.0872113 15.3133 0.548485L1.01014 16.1231C0.53337 16.7587 0.851219 17.7123 1.64584 17.7123H8.79743V31.0619C8.6385 31.8565 9.59205 32.3333 10.2277 31.6976L22.9417 16.1231C23.4184 15.4874 22.9417 14.5338 22.1471 14.5338Z"
//       fill="#C7CBCC"
//       fillOpacity="0.61"
//     />
//   </svg>
// );
export default Collection;
