/* eslint-disable no-octal-escape */
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Table, Badge } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getGears } from "../store/gear/gear.fetch";
import { UserTypes } from "../types/user.types";
import { checkRole } from "../utils/checkRole";
import Swal from "sweetalert2";
import AxiosRequest from "../AxiosRequest";
import { toast } from "react-toastify";

const AthleteGear = () => {
  const dispatch = useDispatch();
  const { gears } = useSelector((state) => state.gear);
  const [ids, setIds] = useState([]);

  const role = useSelector((state) => state.auth.role);
  const [sort, setSort] = useState("");
  const [filter, setFilters] = useState({
    limit: 10,
    page: 1,
    search: "",
  });

  const deleteRecords = (deleteIds) => {
    Swal.fire({
      icon: "question",
      title: "Are you sure want to delete?",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Please wait...",
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: async () => {
            Swal.showLoading();
            try {
              const { data } = await AxiosRequest.post(
                "/admin/collection/deleteByIds",
                { gear_ids: deleteIds }
              );
              toast.success(data.message);
              setFilters({ ...filter, limit: 10, page: 1 });
              setIds([]);
            } catch (error) {
              toast.error("Something went wrong. Please try again.");
            } finally {
              Swal.close();
            }
          },
        });
      }
    });
  };

  const changeFilter = (name, value) => {
    setFilters({ ...filter, [name]: value });
  };

  const handleSort = (value) => setSort(value);

  const changeLimit = (limit) => {
    setFilters({ ...filter, limit: limit, page: 1 });
  };

  const changeSearch = (search) => {
    setFilters({ ...filter, search: search, page: 1 });
  };

  const selectAll = (checked) => {
    if (checked) {
      const selectedIds = gears.records.map((r) => r._id);
      setIds(selectedIds);
    } else {
      setIds([]);
    }
  };

  const selectOne = (checked, id) => {
    if (checked) {
      ids.push(id);
      setIds([...ids]);
    } else {
      const _ids = ids.filter((_id) => id !== _id);
      setIds([..._ids]);
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

    dispatch(getGears(payload));
  }, [filter, dispatch, sort]);

  return (
    <main className="adminPageMainCommon">
      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
        <h2 className="mb-0">Athlete Gear</h2>
        <div className="d-flex flex-wrap">
          <div className="userDataMain">
            <ul className="h-100">
              <li>
                Total NFT :{" "}
                <span className="fontMidium ms-1">
                  {gears.total + gears.trashCounts}
                </span>
              </li>
              <li>
                Publish NFT :{" "}
                <span className="fontMidium ms-1">{gears.total}</span>
              </li>
              {/* <li>
                Drafts : <span className="fontMidium ms-1">2</span>
              </li> */}
              <li>
                Trash :{" "}
                <span className="fontMidium ms-1">{gears.trashCounts}</span>
              </li>
            </ul>
          </div>
          {checkRole([UserTypes.SuperAdmin], role) ? (
            <NavLink
              className="btnBlue btnEarnWith ms-3"
              to={"/admin/AddNewGear"}
            >
              Add New Gear
            </NavLink>
          ) : (
            <button className="btnBlue btnEarnWith ms-3" disabled>
              Add New Category
            </button>
          )}
        </div>
      </div>

      {ids.length ? (
        <div className="w-100 d-block mb-4">
          <Button
            type="button"
            variant=""
            disabled={!checkRole([UserTypes.SuperAdmin], role)}
            className="btnWhiteBordered me-2"
            onClick={() =>
              checkRole([UserTypes.SuperAdmin], role)
                ? deleteRecords(ids)
                : null
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
        </div>
      ) : null}

      <section className="adminCommanPageSection w-100">
        <div className="headingBlue usersScreenSection border-0">
          <div className="filterPart flex-wrap p-0">
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
                      value="sort"
                      onChange={(e) => handleSort(e.target.value)}
                    >
                      <option>By Name</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="searchPart position-relative mt-lg-3 mt-xl-0">
              <Form.Control
                type="text"
                placeholder="Search..."
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
        </div>

        <div className="adminCommanPageContent">
          <div className="mediaLiabraryContent">
            <div className="stripedTable mb-4">
              <div className="table-responsive">
                <Table bordered className="mb-0">
                  <thead>
                    <tr>
                      <th className="bgDark">
                        <Form.Check
                          checked={
                            gears.records.length &&
                            ids.length === gears.records.length
                          }
                          onChange={(e) => selectAll(e.target.checked)}
                        />
                      </th>
                      <th className="bgDark">Name</th>
                      <th className="bgDark">Categories</th>
                      <th className="bgDark">Stock</th>
                      <th className="bgDark">Price</th>
                      <th className="bgDark">Quantity</th>
                      <th className="bgDark">Date</th>
                      <th className="bgDark">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gears.records.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <Form.Check
                            checked={ids.includes(item._id)}
                            onChange={(e) =>
                              selectOne(e.target.checked, item._id)
                            }
                          />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>
                              <img
                                width={"60px"}
                                src={item.imageUrl}
                                className="img-fluid me-2"
                                alt={item.name}
                              />
                            </span>
                            {item.name}
                          </div>
                        </td>
                        <td>{item.gearCategory.name}</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            In Stock
                          </Badge>
                        </td>
                        <td>{item.pccCoin} PCC</td>
                        <td>{item.stockQuantity}</td>
                        <td>
                          {moment(item.createdAt).format(
                            "YYYY/MM/DD [at] HH:mm a"
                          )}
                        </td>
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
                              disabled={
                                !checkRole([UserTypes.SuperAdmin], role)
                              }
                              className="btnWhiteBordered me-2"
                              onClick={() =>
                                checkRole([UserTypes.SuperAdmin], role)
                                  ? deleteRecords([item._id])
                                  : null
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
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="paginationMain w-100 mb-4">
              <div className="pageEntries">
                Showing {gears.from} to {gears.to} of {gears.total} entries
              </div>
              <div className="d-flex justify-content-center paginationCustom">
                <ReactPaginate
                  breakLabel="..."
                  initialPage={0}
                  forcePage={filter.page - 1}
                  onPageChange={(selected) =>
                    changeFilter("page", selected.selected + 1)
                  }
                  pageCount={gears.pages}
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
        </div>
      </section>
      {/* -------- */}
    </main>
  );
};

export default AthleteGear;
