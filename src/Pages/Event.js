import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Collapse, Nav, Tabs, Tab, Form } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Header from "../Marketplace/common/Header";
import eventImg from "../assets/images/eventImg.png"

const Event = () => {

    return (
        <>
            <div className="LayoutBG athleteSection">
                <Container fluid className="position-relative">
                    <div className="headerParent">
                        <div className="d-flex align-items-center pageMainTitle">
                            <svg width="49" height="54" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.38477 0.101562V5.4349H5.7181C2.78477 5.4349 0.384766 7.8349 0.384766 10.7682V48.1016C0.384766 51.0349 2.78477 53.4349 5.7181 53.4349H43.0514C45.9848 53.4349 48.3848 51.0349 48.3848 48.1016V10.7682C48.3848 7.8349 45.9848 5.4349 43.0514 5.4349H40.3848V0.101562H35.0514V5.4349H13.7181V0.101562H8.38477ZM5.7181 18.7682H43.0514V48.1016H5.7181V18.7682ZM27.0514 32.1016V42.7682H37.7181V32.1016H27.0514Z" fill="#B1E0FE" />
                            </svg>
                            <div className="font54White ms-4">Events</div>
                        </div>
                        <p className="titleTextMini">SEE UPCOMING EVENTS AND PURCHASE TICKETS</p>
                        <Header />
                    </div>

                    <Row className="mt-4 eventPage">
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButton w-100">BUY TICKET</Button>
                            </div>
                        </Col>
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButton w-100">BUY TICKET</Button>
                            </div>
                        </Col>
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButton w-100">BUY TICKET</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Event;
