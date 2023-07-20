import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Header from "../Marketplace/common/Header";
import CollectionDetailTab from "./CollectionDetailTab";
import { getEthPrice } from "../utils/etherScan";

const CollectionDetail = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("ALL ITEMS");
  const [collection, setCollection] = useState(null);
  const location = useLocation();
  const [ethPrice, setEthPrice] = useState(0);

  useEffect(() => {
    getEthPrice().then((response) => {
      setEthPrice(response.usd);
    });
  }, []);

  useEffect(() => {
    if (location.state) {
      const collectionData = location.state.collection;
      if (collectionData) {
        setCollection(collectionData);
      } else {
        navigate("/my-collections");
      }
    } else {
      navigate("/my-collections");
    }
  }, [location, navigate]);

  return (
    <>
      <div className="LayoutBG athleteSection CollectionDetailPage">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <NavLink to={"/my-collections"} className="mb-3 d-flex">
              <svg
                className="mt-1"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1216 9.22243H4.29924L9.11382 14.037L7.53365 15.6172L0.0854439 8.16898L7.53365 0.720772L9.11382 2.30094L4.29924 7.11553L19.1216 7.11553V9.22243Z"
                  fill="#C0E3FC"
                />
              </svg>
              <p className="ms-3 my-0 titleTextMini">BACK TO COLLECTION</p>
            </NavLink>
            <div className="d-flex align-items-center pageMainTitle">
              <div className="avatarIcon">
                <div className="me-2 imgOuter">
                  <img src={collection?.imageUrl} alt="" />
                </div>
              </div>
              <div className="font54White ms-4">{collection?.name}</div>
            </div>
            {/* <p className="titleTextMini">
              PURCHASE ITEMS WITH PERSONAL CORNER COIN (PCC)
            </p> */}
            <Header />
          </div>

          <Row className="mt-4">
            <Col xxl={12} xl={12}>
              <div className="position-relative tabSideBtnParent">
                <Tabs
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 navCustom"
                  unmountOnExit
                >
                  <Tab
                    eventKey="ALL ITEMS"
                    title={
                      <div className="d-flex align-items-center">
                        ALL ITEMS{" "}
                        <span className="ms-2 textBgBlue">
                          {collection?.nft.length}
                        </span>
                      </div>
                    }
                  >
                    <hr />
                    {collection?.nft.length > 0 && (
                      <CollectionDetailTab
                        nfts={collection?.nft}
                        ethPrice={ethPrice}
                        collectionName={collection?.name}
                      />
                    )}
                  </Tab>
                  <Tab
                    eventKey="ATHLETE NFT"
                    title={
                      <div className="d-flex align-items-center">
                        ATHLETE NFT{" "}
                        <span className="ms-2 textBgBlue">
                          {collection?.nft.length}
                        </span>
                      </div>
                    }
                  >
                    <hr />
                    <CollectionDetailTab
                      nfts={collection?.nft}
                      ethPrice={ethPrice}
                      collectionName={collection?.name}
                    />
                  </Tab>
                  <Tab
                    eventKey="ATHLETE GEAR"
                    disabled
                    title={
                      <div className="d-flex align-items-center">
                        ATHLETE GEAR <span className="ms-2 textBgBlue">0</span>
                      </div>
                    }
                  >
                    <hr />
                    <CollectionDetailTab />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

// const DollerIcon = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 49 49"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M24.3848 0.332031C11.0514 0.332031 0.384766 10.9987 0.384766 24.332C0.384766 37.6654 11.0514 48.332 24.3848 48.332C37.7181 48.332 48.3848 37.6654 48.3848 24.332C48.3848 10.9987 37.7181 0.332031 24.3848 0.332031ZM22.7806 20.0612C23.3223 20.6029 24.1139 21.3945 25.4473 22.1966C28.1139 23.2695 29.9889 24.332 31.0514 25.6654C32.3848 26.9987 32.916 28.8633 32.916 31.2695C32.916 33.3945 32.3848 35.2695 31.0514 36.6029C29.7181 37.9362 28.1139 38.7279 25.9889 38.9987V42.9987H23.0514V38.9987C20.916 38.7279 19.0514 37.9362 17.7181 36.332C16.3848 34.9987 15.5827 32.8633 15.5827 29.9362H20.916C20.916 31.53 21.1868 32.8633 21.9889 33.6654C22.5202 34.4674 23.3223 34.7279 24.3848 34.7279C25.4473 34.7279 25.9889 34.4674 26.5202 33.6654C27.0514 33.1341 27.3223 32.0612 27.3223 30.9987C27.3223 29.9362 27.0514 29.1341 26.5202 28.332C25.9889 27.8008 25.1868 26.9987 24.1139 26.4674C21.4473 25.3945 19.5827 24.332 18.2493 22.9987C16.916 21.6654 16.3848 19.8008 16.3848 17.3945C16.3848 15.2695 16.916 13.3945 18.2493 12.0612C19.5827 10.7279 21.1868 9.9362 23.3223 9.66537V5.66536H26.2493V9.9362C28.3848 10.1966 29.9889 11.2695 31.0514 12.6029C32.1139 13.9362 32.916 16.0612 32.916 18.4674H27.3223C27.3223 17.1341 27.0514 15.8008 26.5202 14.9987C25.9889 14.1966 25.4473 13.9362 24.3848 13.9362C23.5827 13.9362 22.7806 14.1966 22.5202 14.9987C22.2494 15.5299 21.9889 16.6029 21.9889 17.6654C22.2494 18.7279 22.5202 19.53 22.7806 20.0612Z"
//       fill="#B1E0FE"
//     />
//   </svg>
// );

// const GymnisticIcon = ({ className }) => (
//   <svg
//     className={className}
//     fill="currentColor"
//     viewBox="0 0 25 30"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M12.36 0.941406C11.5113 0.941406 10.6974 1.27855 10.0973 1.87866C9.49714 2.47878 9.16 3.29271 9.16 4.14141C9.16 4.9901 9.49714 5.80403 10.0973 6.40415C10.6974 7.00426 11.5113 7.34141 12.36 7.34141C13.2087 7.34141 14.0226 7.00426 14.6227 6.40415C15.2229 5.80403 15.56 4.9901 15.56 4.14141C15.56 3.29271 15.2229 2.47878 14.6227 1.87866C14.0226 1.27855 13.2087 0.941406 12.36 0.941406ZM4.68 3.50141C3.07616 3.50141 0.839996 4.35389 0.839996 5.74141C0.839996 7.12893 3.07616 7.98141 4.68 7.98141C6.28384 7.98141 8.52 7.12893 8.52 5.74141C8.52 4.35389 6.28384 3.50141 4.68 3.50141ZM22.92 3.50141C22.5106 3.50141 22.1011 3.65752 21.7887 3.97016L18.56 7.19891L6.6 10.6539V8.98016C5.94208 9.16704 5.27072 9.26141 4.68 9.26141C4.28064 9.26141 3.84416 9.21903 3.4 9.13391V12.7814C3.4 13.2844 3.63558 13.7581 4.0375 14.0602C4.31846 14.2714 4.65696 14.3814 5 14.3814C5.14848 14.3814 5.29783 14.3611 5.44375 14.3189L10.9262 12.7352C11.0523 13.0014 11.1793 13.2669 11.2887 13.5389C11.8103 14.8317 12.1496 16.1941 12.3 17.5989V17.6002C12.3179 17.7691 12.413 18.1356 12.71 18.5152C13.0601 18.9625 13.4629 19.1933 13.6325 19.2989C15.221 20.3792 16.8165 21.3423 18.405 22.4227L20.805 28.1227C21.0623 28.7345 21.6566 29.1027 22.2812 29.1027C22.488 29.1027 22.6984 29.0615 22.9012 28.9764C23.7153 28.6334 24.098 27.6955 23.755 26.8814L21.195 20.8014C21.1816 20.77 21.1629 20.7409 21.1475 20.7102C21.1309 20.6762 21.1142 20.6428 21.095 20.6102C21.0572 20.5462 21.0136 20.4853 20.9675 20.4264C20.9541 20.4098 20.9447 20.3924 20.9312 20.3764C20.9293 20.3738 20.9276 20.3702 20.925 20.3677L18.0175 17.0452C17.8127 15.0919 17.3589 13.1893 16.6312 11.3839C16.5954 11.2949 16.5496 11.2097 16.5125 11.1214L19.8437 10.1589C20.1036 10.084 20.3399 9.94338 20.5312 9.75266L24.0512 6.23266C24.6765 5.60802 24.6765 4.5948 24.0512 3.97016C23.7386 3.65752 23.3294 3.50141 22.92 3.50141ZM12.075 19.7164L11.7987 22.4664L6.6225 26.2039C5.90634 26.7217 5.74538 27.7221 6.2625 28.4389C6.57546 28.8722 7.06525 29.1014 7.56125 29.1014C7.88573 29.1014 8.21462 29.0031 8.4975 28.7989L14.2575 24.6389C14.6287 24.3707 14.8658 23.9558 14.9112 23.5002L15.0837 21.7802C14.3772 21.3264 13.6543 20.861 12.9362 20.3727L12.9237 20.3652C12.7573 20.2628 12.4251 20.0562 12.075 19.7164Z" />
//   </svg>
// );

export default CollectionDetail;
