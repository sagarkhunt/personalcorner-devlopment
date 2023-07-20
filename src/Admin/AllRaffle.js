import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table,
    Pagination,
    Tab,
    Nav,
    Badge,
} from "react-bootstrap";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
import { NavLink } from "react-router-dom";
// -- images --
import userPicTable from "../../src/assets/images/userPicTable.png";
import CombinedHeader from "./common/CombinedHeader";

const AllRaffle = () => {
    return (
        <CombinedHeader>
            <main className="adminPageMainCommon">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                    <h2 className="mb-0">Add Raffle Ticket</h2>
                    <NavLink className="btnBlue btnEarnWith ms-3" to={"/"}>Publsh Raffle Ticket</NavLink>
                </div>

                {/* ------- */}
                <section className="adminCommanPageSection w-100">
                    <div className="headingBlue">
                        <h3 className="m-0">Raffle Ticket Details</h3>
                    </div>

                    <div className="adminCommanPageContent p-4">
                        <Row>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Raffle Ticket Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Raffle Ticket 1"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Start Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="5-Sep-2022"
                                        className="InputField datepickerInput"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">End Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="25-Sep-2022"
                                        className="InputField datepickerInput"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Maximum Tickets</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="300"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Maximum Ticket Per User</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="10"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Number Of Winner</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="1"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Ticket Price Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Personal Corner Coin"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Ticket Generation Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Automatic"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Ticket Number Pattern</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Random"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl={4}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Winner Selection Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Automatic"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="my-5">
                            <button class="btnBlue btnEarnWith">Publsh Raffle Ticket</button>
                        </div>

                    </div>


                </section>
                {/* -------- */}
            </main>
        </CombinedHeader>
    );
};

export default AllRaffle;
