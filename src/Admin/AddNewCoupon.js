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

const AddNewCoupon = () => {
    return (
        <CombinedHeader>
            <main className="adminPageMainCommon">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                    <h2 className="mb-0">Add New Coupons</h2>
                    <button className="btnBlue btnEarnWith">Publish Coupon</button>
                </div>

                {/* ------- */}
                <section className="adminCommanPageSection w-100">
                    <div className="headingBlue">
                        <h3 className="m-0">Coupon Details</h3>
                    </div>

                    <div className="adminCommanPageContent p-4">
                        <Row>
                            <Col lg={12}>
                                <Form.Label className="label">Coupon Code</Form.Label>
                                <InputGroup className="mb-4">
                                    <Form.Control className="InputField" placeholder="NFT2020" aria-label="" aria-describedby="basic-addon2" />
                                    <Button variant="outline-secondary" id="button-addon2" className="btnBlue-sm btnEarnWith" style={{ height: "53px" }}>Generate Coupon Code</Button>
                                </InputGroup>
                            </Col>
                            <Col lg={12}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="label">Description (Optional)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        as="textarea" style={{ height: '180px' }}
                                        className="InputField"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                    </div>


                    <div className="headingBlue">
                        <h3 className="m-0">Coupon Data</h3>
                    </div>

                    <div className="adminCommanPageContent">
                        <div className="couponDataPart">
                            <div className="stripedTable mb-4">
                                <div className="table-responsive">
                                    <Table bordered className="mb-0">
                                        <thead>
                                            <tr>
                                                <th className="bgDark" style={{width:"33.33%"}}>Coupon Information</th>
                                                <th className="bgDark" style={{width:"33.33%"}}>Usage Restriction</th>
                                                <th className="bgDark" style={{width:"33.33%"}}>Usage Limits</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className="label">Discount Type</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Fixed Cart Discount"
                                                            className="InputField"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className="label">Coupon Amount</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="100"
                                                            className="InputField"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className="label">Coupon Start Date</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="22-Sep-2022"
                                                            className="InputField"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className="label">Coupon End Date</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="27-Sep-2022"
                                                            className="InputField"
                                                        />
                                                    </Form.Group>
                                                </td>
                                                <td>
                                                    <Form.Group className="mb-4 text-start">
                                                        <Form.Label className="label">Minimum Spend</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Set Minimum amount to use this coupon"
                                                            className="InputField"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-4 text-start">
                                                        <Form.Label className="label">Maximum Spend</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Set Maximum  amount to use this coupon"
                                                            className="InputField"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-4">
                                                        <Form.Check className="text-start" type="checkbox" label="Check this box if the coupon cannot be used in conjunction with other coupons." />
                                                    </Form.Group>
                                                    <Form.Group className="mb-4">
                                                        <Form.Check className="text-start" type="checkbox" label="Check this box if the coupon should not apply to items on sale. Per-item coupons will only work if the item is not on sale. Per-cart coupons will only work if there are items in the cart that are not on sale." />
                                                    </Form.Group>
                                                </td>
                                                <td>
                                                <Form.Group className="mb-4">
                                                        <Form.Label className="label text-start">Usage limit per coupon</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Only One Time"
                                                            className="InputField"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className="label text-start">Usage limit per user</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Only One Time"
                                                            className="InputField"
                                                        />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>

                        <div className="my-5 d-flex justify-content-center">
                            <button class="btnBlue btnEarnWith">Publish Coupon</button>
                        </div>
                    </div>


                </section>
                {/* -------- */}
            </main>
        </CombinedHeader>
    );
};

export default AddNewCoupon;
