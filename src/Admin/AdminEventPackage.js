import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table,
    Pagination,
    InputGroup
} from "react-bootstrap";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
// -- images --

import IconMetroImage from "../../src/assets/images/IconMetro-image.png";
import AddDescription from "../../src/assets/images/AddDescription.png";
import CombinedHeader from "./common/CombinedHeader";

const AdminEventPackage = () => {
    return (
        <CombinedHeader>
            <main className="adminPageMainCommon">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                    <h2 className="mb-0">Events Package</h2>
                    <button className="btnBlue btnEarnWith">Save Package</button>
                </div>

                {/* ------- */}
                <section className="adminCommanPageSection w-100">
                    <div className="headingBlue">
                        <h3 className="m-0">Commemorative Package</h3>
                    </div>

                    <div className="adminCommanPageContent p-4">
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="label" style={{fontSize:"24px", fontWeight:"500"}}>First Package Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Athlete Series 1 Commemorative NFT"
                                                className="InputField"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <div className="eventPackageHeading">
                                        <h3>Set Price</h3>
                                        <hr />
                                    </div>
                                    <Row className="mt-4">
                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">Ethereum Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="-"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">USD Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="800"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">Personal Corner Points</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="0.25"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Col lg={12}>
                                        <div className="eventPackageHeading mt-4">
                                            <h3>Add Features</h3>
                                            <hr />
                                        </div>
                                        
                                        <div><img src={AddDescription} className="w-100" /></div>
                                        
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="label" style={{fontSize:"24px", fontWeight:"500"}}>Second Package Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="General Admission Commemorative Package"
                                                className="InputField"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <div className="eventPackageHeading">
                                        <h3>Set Price</h3>
                                        <hr />
                                    </div>
                                    <Row className="mt-4">
                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">Ethereum Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="-"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">USD Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="1500"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">Personal Corner Points</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="-"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Col lg={12}>
                                        <div className="eventPackageHeading mt-4">
                                            <h3>Add Features</h3>
                                            <hr />
                                        </div>
                                        
                                        <div><img src={AddDescription} className="w-100" /></div>
                                        
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <div className="my-5 d-flex justify-content-end">
                            <button class="btnWhite">Save Package</button>
                        </div>
                    </div>


                    <div className="headingBlue">
                        <h3 className="m-0">VIP Package</h3>
                    </div>

                    <div className="adminCommanPageContent p-4">
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="label" style={{fontSize:"24px", fontWeight:"500"}}>First Package Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Athlete Series 1 Commemorative NFT (GOAT, HOF, Veteran, Rookie)"
                                                className="InputField"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <div className="eventPackageHeading">
                                        <h3>Set Price</h3>
                                        <hr />
                                    </div>
                                    <Row className="mt-4">
                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">Ethereum Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="-"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">USD Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="400"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">Personal Corner Points</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="0.12"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Col lg={12}>
                                        <div className="eventPackageHeading mt-4">
                                            <h3>Add Features</h3>
                                            <hr />
                                        </div>
                                        
                                        <div><img src={AddDescription} className="w-100" /></div>
                                        
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="label" style={{fontSize:"24px", fontWeight:"500"}}>Second Package Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="General Admission Commemorative Package"
                                                className="InputField"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <div className="eventPackageHeading">
                                        <h3>Set Price</h3>
                                        <hr />
                                    </div>
                                    <Row className="mt-4">
                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">Ethereum Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="-"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">USD Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="500"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="label">Personal Corner Points</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="-"
                                                    className="InputField"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Col lg={12}>
                                        <div className="eventPackageHeading mt-4">
                                            <h3>Add Features</h3>
                                            <hr />
                                        </div>
                                        
                                        <div><img src={AddDescription} className="w-100" /></div>
                                        
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <div className="my-5 d-flex justify-content-end">
                            <button class="btnWhite">Save Package</button>
                        </div>
                    </div>


                </section>
                {/* -------- */}
            </main>
        </CombinedHeader>
    );
};

export default AdminEventPackage;
