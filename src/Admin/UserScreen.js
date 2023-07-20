import React, { useEffect, useState } from "react";
import { Row, Col, Form, Table, Badge } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import userPicTable from "../../src/assets/images/userPicTable.png";
import _ from "lodash";
import { getUsers } from "../store/user/user.fetch";
import { checkRole } from "../utils/checkRole";
import { UserTypes } from "../types/user.types";

const UserScreen = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const role = useSelector((state) => state.auth.role);
  const [sort, setSort] = useState("");
  const [filter, setFilters] = useState({
    limit: 5,
    page: 1,
    search: "",
  });

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

  useEffect(() => {
    const payload = { ...filter };

    switch (sort) {
      case "name_desc":
        payload["sortBy"] = "fullName";
        payload["sort"] = 1;
        break;

      case "date_desc":
        payload["sortBy"] = "createdAt";
        payload["sort"] = -1;
        break;

      default:
        payload["sortBy"] = "fullName";
        payload["sort"] = -1;
        break;
    }

    dispatch(getUsers(payload));
  }, [filter, dispatch, sort]);

  return (
    <main className="adminPageMainCommon">
      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
        <h2 className="mb-0">Users</h2>
        <div className="d-flex flex-wrap">
          <div className="userDataMain">
            <ul className="h-100">
              <li>
                Total User:{" "}
                <span className="fontMidium ms-1">{users.total}</span>
              </li>
              <li>
                Active User:{" "}
                <span className="fontMidium ms-1">{users.activeUsers}</span>
              </li>
              <li>
                Administrator:{" "}
                <span className="fontMidium ms-1">{users.adminUsers}</span>
              </li>
            </ul>
          </div>
          {checkRole([UserTypes.SuperAdmin], role) ? (
            <NavLink
              className="btnBlue btnEarnWith ms-3"
              to={"/admin/users/create"}
            >
              Add New User
            </NavLink>
          ) : (
            <button className="btnBlue btnEarnWith ms-3" disabled>
              Add New User
            </button>
          )}
        </div>
      </div>

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
                    onChange={(e) => handleSort(e.target.value)}
                  >
                    <option value={"name_asc"}>By Name</option>
                    <option value={"name_desc"}>Sort by Name (A-Z)</option>
                    <option value={"date_desc"}>Sort By Date</option>
                  </Form.Select>
                </Col>
                {/* <Col
                  lg={"auto"}
                  md={4}
                  sm={12}
                  className="d-flex align-items-center flex-column flex-xl-row"
                >
                  <Form.Label
                    className="mb-0 me-2 font18White"
                    style={{ minWidth: "100px" }}
                  >
                    Assign Role
                  </Form.Label>
                  <Form.Select defaultValue="">
                    <option>Administrator</option>
                    <option>Manager Admin</option>
                    <option>Editor</option>
                    <option>Subscriber</option>
                  </Form.Select>
                </Col>
                <button className="btnBlack fontBold mt-4 mt-xl-0">
                  Grant Role
                </button> */}
              </Row>
            </Form>
          </div>
          <div className="searchPart position-relative mt-lg-3 mt-xl-0">
            <Form.Control
              type="text"
              placeholder="Search..."
              className="searchField"
              value={filter.search}
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
                  fontFamily="FontAwesome5Free-Solid, 'Font Awesome 35  Free'"
                >
                  <tspan x="0" y="0">
                    
                  </tspan>
                </text>
              </svg>
            </button>
          </div>
        </div>

        <div className="mediaLiabraryContent">
          <div className="stripedTable mb-4">
            <div className="table-responsive">
              <Table bordered className="mb-0">
                <thead>
                  <tr>
                    <th className="bgDark">
                      {/* <Form.Check aria-label="pageTitle" /> */}
                    </th>
                    <th className="bgDark">Name</th>
                    <th className="bgDark">Email</th>
                    <th className="bgDark">Contact No.</th>
                    <th className="bgDark">Last Login</th>
                    <th className="bgDark">Status</th>
                    <th className="bgDark">Role</th>
                    <th className="bgDark">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.records.map((user, index) => (
                    <tr key={index}>
                      <td>{/* <Form.Check aria-label="pageTitle" /> */}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          {user.profileImageUrl ? (
                            <span>
                              <img
                                src={userPicTable}
                                className="img-fluid me-2"
                                alt=""
                              />
                            </span>
                          ) : (
                            <span></span>
                          )}

                          {user.fullName}
                        </div>
                      </td>
                      <td>{user.email ? user.email : "-"}</td>
                      <td>{user.mobileNumber ? user.mobileNumber : "-"}</td>
                      <td>{user.lastLoginAt ? user.lastLoginAt : "-"}</td>
                      <td>
                        <Badge bg="" className="statusActive">
                          Active
                        </Badge>
                      </td>
                      <td>{_.upperFirst(user.type)}</td>
                      <td>
                        <Form.Select defaultValue="">
                          <option>Active</option>
                          {/* <option>Black List</option> */}
                          {/* <option>White List</option> */}
                        </Form.Select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="paginationMain w-100 mb-4">
            <div className="pageEntries">
              Showing {users.from} to {users.to} of {users.total} entries
            </div>
            <div className="d-flex justify-content-center paginationCustom">
              <ReactPaginate
                breakLabel="..."
                initialPage={0}
                forcePage={filter.page - 1}
                onPageChange={(selected) =>
                  changeFilter("page", selected.selected + 1)
                }
                pageCount={users.pages}
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
    </main>
  );
};

export default UserScreen;
