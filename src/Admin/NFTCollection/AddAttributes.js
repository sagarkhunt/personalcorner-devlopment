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

// import IconMetroImage from "../../src/assets/images/IconMetro-image.png";
// import AddDescription from "../../src/assets/images/AddDescription.png";
import CombinedHeader from "../common/CombinedHeader";

const AddAttributes = () => {
    return (
        <CombinedHeader>
            <main className="adminPageMainCommon">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                    <h2 className="mb-0">Add Attributes</h2>
                    <button className="btnBlue btnEarnWith">Save Attributes</button>
                </div>

                {/* ------- */}
                <section className="adminCommanPageSection w-100">
                    <div className="headingBlue">
                        <h3 className="m-0">General</h3>
                    </div>

                    <div className="adminCommanPageContent p-4">
                        <Row className="mt-4">
                            <Col lg={4} md={6} sm={12}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Attribute Name *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tier"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Attribute Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Dropdown"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Is Required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Yes"
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>

                        </Row>
                    </div>

                    <Row>
                        <Col xl={4}>
                            <div className="headingBlue">
                                <h3 className="m-0">Options</h3>
                            </div>

                            <div className="adminCommanPageContent">
                                <div className="couponDataPart attributesTable grayBorder">
                                    <div className="stripedTable">
                                        <div className="table-responsive">
                                            <Table bordered className="mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="bgDark" style={{ width: "40%" }}>Name</th>
                                                        <th className="bgDark" style={{ width: "35%" }}>Position</th>
                                                        <th className="bgDark" style={{ width: "25%" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Form.Group className="p-3">
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Tier1"
                                                                    className="InputField"
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td>
                                                            <Form.Group className="text-start p-3">
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="1"
                                                                    className="InputField"
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td className="text-center">
                                                            <Button variant="">
                                                                <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.866 30.2692C1.8689 31.2584 2.2633 32.2063 2.96299 32.9056C3.66268 33.6049 4.61076 33.9988 5.6 34.0012H20.528C21.5169 33.9983 22.4645 33.6041 23.1637 32.9049C23.863 32.2056 24.2571 31.2581 24.26 30.2692V7.87516H1.866V30.2692ZM6.457 16.9822L9.088 14.3512L13.063 18.3102L17.02 14.3502L19.651 16.9812L15.695 20.9372L19.651 24.8932L17.02 27.5262L13.064 23.5702L9.108 27.5262L6.477 24.8952L10.433 20.9392L6.457 16.9822ZM19.595 2.27616L17.729 0.410156H8.4L6.532 2.27616H0V6.01016H26.127V2.27616H19.595Z" fill="white" />
                                                                </svg>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Form.Group className="p-3">
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Tier2"
                                                                    className="InputField"
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td>
                                                            <Form.Group className="text-start p-3">
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="2"
                                                                    className="InputField"
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td className="text-center">
                                                            <Button variant="">
                                                                <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.866 30.2692C1.8689 31.2584 2.2633 32.2063 2.96299 32.9056C3.66268 33.6049 4.61076 33.9988 5.6 34.0012H20.528C21.5169 33.9983 22.4645 33.6041 23.1637 32.9049C23.863 32.2056 24.2571 31.2581 24.26 30.2692V7.87516H1.866V30.2692ZM6.457 16.9822L9.088 14.3512L13.063 18.3102L17.02 14.3502L19.651 16.9812L15.695 20.9372L19.651 24.8932L17.02 27.5262L13.064 23.5702L9.108 27.5262L6.477 24.8952L10.433 20.9392L6.457 16.9822ZM19.595 2.27616L17.729 0.410156H8.4L6.532 2.27616H0V6.01016H26.127V2.27616H19.595Z" fill="white" />
                                                                </svg>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Form.Group className="p-3">
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Tier3"
                                                                    className="InputField"
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td>
                                                            <Form.Group className="text-start p-3">
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="3"
                                                                    className="InputField"
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td className="text-center">
                                                            <Button variant="">
                                                                <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.866 30.2692C1.8689 31.2584 2.2633 32.2063 2.96299 32.9056C3.66268 33.6049 4.61076 33.9988 5.6 34.0012H20.528C21.5169 33.9983 22.4645 33.6041 23.1637 32.9049C23.863 32.2056 24.2571 31.2581 24.26 30.2692V7.87516H1.866V30.2692ZM6.457 16.9822L9.088 14.3512L13.063 18.3102L17.02 14.3502L19.651 16.9812L15.695 20.9372L19.651 24.8932L17.02 27.5262L13.064 23.5702L9.108 27.5262L6.477 24.8952L10.433 20.9392L6.457 16.9822ZM19.595 2.27616L17.729 0.410156H8.4L6.532 2.27616H0V6.01016H26.127V2.27616H19.595Z" fill="white" />
                                                                </svg>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Form.Group className="p-3">
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Tier4"
                                                                    className="InputField"
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td>
                                                            <Form.Group className="text-start p-3">
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="4"
                                                                    className="InputField"
                                                                />
                                                            </Form.Group>
                                                        </td>
                                                        <td className="text-center">
                                                            <Button variant="">
                                                                <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.866 30.2692C1.8689 31.2584 2.2633 32.2063 2.96299 32.9056C3.66268 33.6049 4.61076 33.9988 5.6 34.0012H20.528C21.5169 33.9983 22.4645 33.6041 23.1637 32.9049C23.863 32.2056 24.2571 31.2581 24.26 30.2692V7.87516H1.866V30.2692ZM6.457 16.9822L9.088 14.3512L13.063 18.3102L17.02 14.3502L19.651 16.9812L15.695 20.9372L19.651 24.8932L17.02 27.5262L13.064 23.5702L9.108 27.5262L6.477 24.8952L10.433 20.9392L6.457 16.9822ZM19.595 2.27616L17.729 0.410156H8.4L6.532 2.27616H0V6.01016H26.127V2.27616H19.595Z" fill="white" />
                                                                </svg>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8}>
                            <div className="headingBlue">
                                <h3 className="m-0">Configuration </h3>
                            </div>

                            <div className="adminCommanPageContent bgGray p-3">
                                <Row>
                                    <Col lg={12}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="label">Use in Layered Navigation</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Yes"
                                                className="InputField"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="label">Use To Create Configurable Productv</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Yes"
                                                className="InputField"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="label">Visible on Product View Page on Front-end</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Yes"
                                                className="InputField"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="label">Attribute is comparable</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Yes"
                                                className="InputField"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <div className="p-5 d-flex justify-content-between">
                        <button class="btnBlue btnEarnWith">Add More Option</button>
                        <button class="btnBlue btnEarnWith">Save Attributes</button>
                    </div>



                </section>
                {/* -------- */}
            </main>
        </CombinedHeader>
    );
};

export default AddAttributes;
