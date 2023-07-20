import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table,
    InputGroup
} from "react-bootstrap";
// import Sidebar from "./common/Sidebar";
// import Header from "./common/Header";
// -- images --

import AddDescription from "../../../src/assets/images/AddDescription.png";
import CombinedHeader from "../common/CombinedHeader";

const AddCategory = () => {
    return (
        <CombinedHeader>
            <main className="adminPageMainCommon">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                    <h2 className="mb-0">Add Category</h2>
                    <button className="btnBlue btnEarnWith">Save Category</button>
                </div>

                {/* ------- */}
                <section className="adminCommanPageSection w-100">
                    <div className="headingBlue">
                        <h3 className="m-0">General</h3>
                    </div>

                    <div className="adminCommanPageContent p-4">
                        <Row className="mt-4">
                            <Col lg={3} md={6} sm={12}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Category Name *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Eg. Category 1"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={6} sm={12}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Visible In Header Menu</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Yes"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>


                    <div className="headingBlue">
                        <h3 className="m-0">Description and Images</h3>
                    </div>

                    <div className="adminCommanPageContent p-4">
                        <Col lg={3} md={6} sm={12}>
                            <Form.Group className="mb-4">
                                <Form.Label className="label">Display Mode</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Products and Description"
                                    className="InputField"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Form.Group className="mb-4">
                                <Form.Label className="label">Add Description</Form.Label>
                                <div><img src={AddDescription} className="w-100" /></div>
                            </Form.Group>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Form.Group className="mb-4">
                                <Form.Label className="label">Add Category Image/Icon</Form.Label>
                                <div className="uploadImg" style={{ height: "200px" }}>
                                    <div className="d-flex align-items-center justify-content-center h-100 flex-column">
                                        <span>Drop Files Here Or Click to Upload</span>
                                        <button class="btnBlue-sm btnEarnWith mt-4">
                                            Upload
                                        </button>
                                    </div>
                                    <input type="file" className="inputFile"></input>
                                </div>
                            </Form.Group>
                        </Col>
                    </div>

                    <div className="headingBlue">
                        <h3 className="m-0">Parent Category</h3>
                    </div>
                    <div className="p-4">
                        <Row className="mt-4">
                            <div className="radioButton">
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    ></input>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Category 1
                                    </label>
                                </div>
                                <div class="form-check ms-4">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    ></input>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Sub Category 1
                                    </label>
                                </div>
                                <div class="form-check ms-4">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    ></input>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Sub Category 2
                                    </label>
                                </div>
                                <div class="form-check ms-4">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    ></input>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Sub Category 3
                                    </label>
                                </div>
                                <div className="w-100 py-2"></div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    ></input>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Category2
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    ></input>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Category3
                                    </label>
                                </div>
                            </div>
                        </Row>
                    </div>


                    <div className="p-4">
                        <button class="btnBlue btnEarnWith">Save Category</button>
                    </div>



                </section>
                {/* -------- */}
            </main>
        </CombinedHeader>
    );
};

export default AddCategory;
