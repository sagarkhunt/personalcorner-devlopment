import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Table, Badge } from "react-bootstrap";
// import Sidebar from "./common/Sidebar";
// import Header from "./common/Header";
// -- images --
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCollection,
  deleteCollectionByIds,
  getCollection,
} from "../../store/collection/collection.fetch";
import ReactPaginate from "react-paginate";
import moment from "moment/moment";
import { checkRole } from "../../utils/checkRole";
import { UserTypes } from "../../types/user.types";

const NFTCollection = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collection.collections);
  const role = useSelector((state) => state.auth.role);
  const [sort, setSort] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState({
    limit: 5,
    page: 1,
    search: "",
  });

  const changeLimit = (limit) => {
    setFilter({ ...filter, limit: limit, page: 1 });
  };

  const changeSearch = (search) => {
    setFilter({ ...filter, search: search, page: 1 });
  };

  const changeFilter = (name, value) => [
    setFilter({ ...filter, [name]: value }),
  ];

  const selectItems = (id) => {
    console.log("id", id);

    if (selectedItems.includes(id)) {
      console.log(
        "selectedItems",
        selectedItems?.filter((item) => item !== id)
      );
      setSelectedItems(selectedItems?.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  useEffect(() => {
    const payload = { ...filter };

    switch (sort) {
      case "name_desc":
        payload["sortBy"] = "name";
        payload["sort"] = 1;
        break;

      case "date_desc":
        payload["sortBy"] = "createdAt";
        payload["sort"] = -1;
        break;

      default:
        payload["sortBy"] = "name";
        payload["sort"] = -1;
        break;
    }

    dispatch(getCollection(payload));
  }, [filter, dispatch, sort]);

  const deleteCollectionById = async (collection_id) => {
    dispatch(deleteCollection(collection_id, collections.records));
  };
  return (
    <main className="adminPageMainCommon">
      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
        <h2 className="mb-0">NFT Collection</h2>
        <div className="d-flex flex-wrap">
          <div className="userDataMain">
            <ul className="h-100">
              <li>
                Total Collection:{" "}
                <span className="fontMidium ms-1">{collections.total}</span>
              </li>
              <li>
                Publish Collection : <span className="fontMidium ms-1">-</span>
              </li>
              <li>
                Drafts : <span className="fontMidium ms-1">-</span>
              </li>
              <li>
                Trash : <span className="fontMidium ms-1">-</span>
              </li>
            </ul>
          </div>
          {checkRole([UserTypes.SuperAdmin], role) ? (
            <NavLink
              className="btnBlue btnEarnWith ms-3"
              to={"/admin/NFTCollection/AddNFTCollection"}
            >
              Add New NFT
            </NavLink>
          ) : (
            <button className="btnBlue btnEarnWith ms-3" disabled>
              Add New NFT
            </button>
          )}
        </div>
      </div>

      {/* ------- */}
      <section className="adminCommanPageSection w-100">
        <section className="usersScreenSection w-100">
          <div className="filterPart flex-wrap">
            <div className="leftPart">
              <Form>
                <Row className="gx-2 gx-lg-5">
                  <Col
                    lg={"auto"}
                    md={2}
                    sm={12}
                    className="d-flex align-items-center flex-column flex-xl-row mb-3 mb-md-0"
                  >
                    <Form.Label className="mb-0 me-2 font18White">
                      Show
                    </Form.Label>
                    <Form.Select
                      value={filter.limit}
                      onChange={(e) => changeLimit(e.target.value)}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                    </Form.Select>
                  </Col>
                  <Col
                    lg={"auto"}
                    md={3}
                    sm={12}
                    className="d-flex align-items-center flex-column flex-xl-row mb-3 mb-md-0"
                  >
                    <Form.Label className="mb-0 me-2 font18White">
                      Filter
                    </Form.Label>
                    <Form.Select
                      value={sort}
                      onChange={(e) => {
                        setSort(e.target.value);
                      }}
                    >
                      <option value={"name_asc"}>By Name</option>
                      <option value={"name_desc"}>Sort by Name (A-Z)</option>
                      <option value={"date_desc"}>Sort By Date</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="searchPart position-relative mt-lg-3 mt-xl-0">
              <Form.Control
                type="text"
                placeholder="Search Products"
                className="searchField"
                onChange={(e) => changeSearch(e.target.value)}
              />
              <button className="searchBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                >
                  <text
                    id="_"
                    data-name=""
                    transform="translate(0 14)"
                    fill="#464646"
                    fontSize="16"
                    fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                  >
                    <tspan x="0" y="0">
                      
                    </tspan>
                  </text>
                </svg>
              </button>
            </div>
          </div>
          {selectedItems.length > 0 && (
            <div className="d-flex justify-content-end p-3">
              <Button
                type="button"
                variant=""
                className="btnWhiteBordered me-2"
                disabled
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                type="button"
                variant=""
                className="btnWhiteBordered me-2"
                onClick={() => {
                  console.log("deleted");
                  dispatch(deleteCollectionByIds(selectedItems));
                  setSelectedItems([]);
                }}
                disabled={!checkRole([UserTypes.SuperAdmin], role)}
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                type="button"
                variant=""
                className="btnWhiteBordered"
                disabled
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          )}
          <div className="mediaLiabraryContent">
            <div className="stripedTable mb-4">
              <div className="table-responsive">
                <Table bordered className="mb-0">
                  <thead>
                    <tr>
                      <th className="bgDark">
                        <Form.Check
                          aria-label="pageTitle"
                          checked={
                            collections.records?.length &&
                            selectedItems.length == collections.records.length
                          }
                          onChange={() => {
                            if (
                              collections.records.length ==
                                selectedItems.length &&
                              selectedItems.length !== 0
                            ) {
                              setSelectedItems([]);
                            } else {
                              setSelectedItems(
                                collections?.records?.map((item) => item._id)
                              );
                            }
                          }}
                        />
                      </th>
                      <th className="bgDark">Name</th>
                      <th className="bgDark">Categories</th>
                      <th className="bgDark">Tier</th>
                      <th className="bgDark">Stock</th>
                      <th className="bgDark">Price</th>
                      <th className="bgDark">Quantity</th>
                      <th className="bgDark">Date</th>
                      <th className="bgDark">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collections?.records?.map((collection, index) => (
                      <tr key={index}>
                        <td>
                          <Form.Check
                            aria-label="pageTitle"
                            checked={selectedItems?.includes(collection._id)}
                            onChange={() => {
                              selectItems(collection._id);
                            }}
                          />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={collection.imageUrl}
                                className="img-fluid me-2"
                                style={{
                                  width: "100px",
                                  height: "100px",
                                }}
                                alt=""
                              />
                            </span>
                            {collection.name}
                          </div>
                        </td>
                        <td>
                          {collection.category ? collection.category : "-"}
                        </td>
                        <td>{collection.tier ? collection.tier : "-"}</td>
                        <td>
                          {collection.remainingQuantity > 0 ? (
                            <Badge bg="" className="statusActive">
                              In Stock
                            </Badge>
                          ) : (
                            <Badge bg="" className="statusInactive">
                              Out Of Stock
                            </Badge>
                          )}
                        </td>
                        <td>
                          {collection?.mintUsdPrice
                            ? Number(collection?.mintUsdPrice).toFixed(4)
                            : "-"}{" "}
                          Ξ USD: {collection?.mintEtherPrice}ETH:{" "}
                          {collection?.mintEtherPrice}
                        </td>
                        <td>
                          {collection?.quantity ? collection?.quantity : "-"}
                        </td>
                        <td>
                          Published{" "}
                          {moment(collection.createdAt).format("YYYY/MM/DD")} at{" "}
                          {moment(collection.createdAt).format("hh:mm A")}
                        </td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                              disabled
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                              onClick={() => {
                                deleteCollectionById(collection._id);
                              }}
                              disabled={
                                !checkRole([UserTypes.SuperAdmin], role)
                              }
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                              disabled
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {/* <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            In Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          {" "}
                          <Badge bg="" className="statusInactive">
                            Out Of Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            In Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          {" "}
                          <Badge bg="" className="statusInactive">
                            Out Of Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            In Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          {" "}
                          <Badge bg="" className="statusInactive">
                            Out Of Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            In Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          {" "}
                          <Badge bg="" className="statusInactive">
                            Out Of Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            In Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                              />
                            </span>
                            Jeffrey Akridge
                          </div>
                        </td>
                        <td>Category Name1, Category Name2</td>
                        <td>
                          {" "}
                          <Badge bg="" className="statusInactive">
                            Out Of Stock
                          </Badge>
                        </td>
                        <td>0.12-.25 Ξ USD: 25.00ETH: 0.45</td>
                        <td>50</td>
                        <td>Published2022/07/20 at 6:17 am</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 10.9957V13.6587H2.663L10.516 5.80571L7.853 3.14271L0 10.9957ZM12.575 3.74671C12.6407 3.68106 12.6928 3.60311 12.7283 3.51732C12.7639 3.43153 12.7822 3.33957 12.7822 3.24671C12.7822 3.15385 12.7639 3.06189 12.7283 2.9761C12.6928 2.89031 12.6407 2.81236 12.575 2.74671L10.913 1.07971C10.8473 1.01404 10.7694 0.96194 10.6836 0.926396C10.5978 0.890853 10.5059 0.872559 10.413 0.872559C10.3201 0.872559 10.2282 0.890853 10.1424 0.926396C10.0566 0.96194 9.97865 1.01404 9.913 1.07971L8.613 2.37971L11.276 5.04271L12.575 3.74671Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered me-2"
                            >
                              <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.7 12.1005C0.70184 12.4712 0.84993 12.8263 1.11208 13.0884C1.37424 13.3506 1.72926 13.4986 2.1 13.5005H7.712C8.08274 13.4986 8.43776 13.3506 8.69992 13.0884C8.96207 12.8263 9.11016 12.4712 9.112 12.1005V3.68149H0.7V12.1005ZM2.426 7.10049L3.415 6.11149L4.909 7.59849L6.4 6.11649L7.389 7.10549L5.9 8.59249L7.387 10.0755L6.398 11.0645L4.911 9.57749L3.424 11.0645L2.434 10.0755L3.921 8.58849L2.426 7.10049ZM7.366 1.57549L6.666 0.875488H3.157L2.457 1.57549H0V2.97549H9.822V1.57549H7.366Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                            <Button
                              type="button"
                              variant=""
                              className="btnWhiteBordered"
                            >
                              <svg
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.238 11.5606V12.5146C8.23072 12.672 8.16183 12.8202 8.0462 12.9273C7.93057 13.0343 7.77748 13.0915 7.62 13.0866H0.62C0.462178 13.0921 0.308578 13.0351 0.192513 12.928C0.0764477 12.8209 0.00727593 12.6724 0 12.5146L0 3.73764C0.00727664 3.58025 0.0761698 3.43204 0.1918 3.32502C0.307431 3.218 0.460518 3.16075 0.618 3.16564H2.471V10.2256C2.48584 10.5938 2.64589 10.941 2.91614 11.1914C3.18639 11.4418 3.54483 11.5749 3.913 11.5616L8.238 11.5606ZM8.238 3.36064V0.875644H3.913C3.75637 0.87208 3.60456 0.929922 3.49001 1.03681C3.37547 1.14369 3.30727 1.29114 3.3 1.44764V10.2246C3.30728 10.382 3.37617 10.5302 3.4918 10.6373C3.60743 10.7443 3.76052 10.8015 3.918 10.7966H10.918C11.0755 10.8015 11.2286 10.7443 11.3442 10.6373C11.4598 10.5302 11.5287 10.382 11.536 10.2246V3.92464H8.856C8.69901 3.92956 8.54636 3.87273 8.43081 3.76634C8.31526 3.65995 8.24604 3.5125 8.238 3.35564V3.36064ZM11.352 2.62064L9.654 1.04364C9.53457 0.934803 9.37858 0.874836 9.217 0.875644H9.061V3.16564H11.532V3.02064C11.5308 2.94514 11.5141 2.87068 11.483 2.80187C11.4518 2.73307 11.4069 2.67139 11.351 2.62064H11.352Z"
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr> */}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="paginationMain w-100 mb-4">
              <div className="pageEntries">
                Showing {collections.from} to {collections.to} of{" "}
                {collections.total} entries
              </div>
              <div className="d-flex justify-content-center paginationCustom">
                <ReactPaginate
                  breakLabel="..."
                  initialPage={0}
                  forcePage={filter.page - 1}
                  onPageChange={(selected) => {
                    changeFilter("page", selected.selected + 1);
                    setSelectedItems([]);
                  }}
                  pageCount={collections.pages}
                  renderOnZeroPageCount={null}
                  activeClassName="active"
                  containerClassName="pagination float-end"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  previousClassName="page-item"
                  nextClassName="page-item"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  disabledClassName="disabled"
                  previousLabel="«"
                  nextLabel="»"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* -------- */}
    </main>
  );
};

export default NFTCollection;
