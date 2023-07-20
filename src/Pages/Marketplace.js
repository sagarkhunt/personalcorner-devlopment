import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row, Card, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketplaceCollections } from "../store/collection/collection.fetch";
import AxiosRequest from "../AxiosRequest";

const tcColors = [
  "#EEEAC7",
  "#C7E7EE",
  "#FFDEB5",
  "#D6C7EE",
  "#EEC7EC",
  "#C7EED0",
];

const Marketplace = () => {
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const newCollections = useSelector((s) => s.collection.newCollections);

  useEffect(() => {
    dispatch(fetchMarketplaceCollections({ limit: 10, page: page }));
  }, [dispatch, page]);

  useEffect(() => {
    (async () => {
      try {
        const data = await AxiosRequest.get("/admin/attribute/all");
        const _category = data.data.data.attributes.find(
          (item) => item._id === "Category"
        );
        if (_category) {
          setCategory(_category.attributes);
        }
      } catch (error) {}
    })();
  }, []);
  // const hideShowSide = () => {
  //   const sideBarId = document.getElementById("sideBarId");
  //   if (sideBarId.style.display === "block") {
  //     sideBarId.style.display = "none";
  //   } else {
  //     sideBarId.style.display = "block";
  //   }
  // };

  return (
    <div className="marketplacePageMain">
      <main className="pageMainCommon marketplacePage">
        {/* -------- */}

        <section className="marketplaceListing">
          <Container>
            <div className="listingArea">
              <div className="card-header-text">
                <div>New Collection</div>
                {/* <div>
                  <select
                    className="interval"
                    defaultValue="football"
                    onChange={(e) => setGame(e.target.value)}
                  >
                    {category.map((mitem, index) => {
                      return (
                        <option value={mitem.key} key={index}>
                          {mitem.value}
                        </option>
                      );
                    })}
                  </select>
                </div> */}
              </div>
              <hr className="hrline" />
            </div>
            <Row className="position-relative listingArea listingAreaMobile mt-4">
              <Fragment>
                {newCollections.records.map((item, i) => {
                  return (
                    <Col
                      xl={4}
                      lg={4}
                      md={6}
                      sm={6}
                      xs={12}
                      key={i}
                      className="py-3"
                    >
                      <NavLink
                        className="cardLinkBlk"
                        to={`/marketplace/${item._id}/info`}
                      >
                        <Card
                          style={{
                            backgroundColor: tcColors[i],
                            cursor: "pointer",
                          }}
                        >
                          <Card.Img className="img-fluid" src={item.imageUrl} />
                          <Card.Body>
                            <Card.Text className="mb-2">{item.name}</Card.Text>
                            <Card.Title className="text-truncate">
                              {item.description}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </NavLink>
                    </Col>
                  );
                })}
              </Fragment>
            </Row>
            <Row className="mt-4">
              {newCollections.loading ? (
                <Col className="text-center">
                  <Spinner animation="border" variant="light" />
                </Col>
              ) : (
                <Fragment>
                  {!(newCollections.current >= newCollections.pages) ? (
                    <button
                      type="button"
                      className="btn btn-link"
                      style={{ fontSize: "20px" }}
                      onClick={() => setPage(page + 1)}
                    >
                      See more
                    </button>
                  ) : null}
                </Fragment>
              )}
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Marketplace;
