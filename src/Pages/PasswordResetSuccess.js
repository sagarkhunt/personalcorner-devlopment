import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// --- images --- //
import logo from "../assets/images/logo.png";
// import authBgImg from "../assets/images/authBgImg.png";
import authBgImg from "../assets/images/bg.png";
import successImg from "../assets/images/successImg.png";
import authFormBg from "../assets/images/authFormBg.png";
import googleIcon from "../assets/images/googleIcon.png";
// ---- icons --- //
import {
  TwitterIcon,
  FacebookIcon,
  PswdViewIcon,
  PswdHideIcon,
} from "../common/Icons";
import AuthFooterMenu from "../common/AuthFooterMenu";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login, socialLogin } from "../store/auth/auth.fetch";

import {
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";


const PasswordResetSuccess = () => {

  return (
    <main
      style={{ backgroundImage: "url(" + authBgImg + ")", display:"flex", alignItems:"center" }}
      className="authPage"
    >
      <div className="py-5 w-100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={7} lg={8} md={11} sm={12}>
              <div className="mb-4 authFormSection">

                <div className="headArea d-flex justify-content-between align-items-center">
                  <div className="">
                    <h1 className="title mb-0">Success Password to Personal Corner</h1>
                    <p className="content mb-0">
                      You have successfully reset password now.
                    </p>
                  </div>
                  <div className="">
                    <NavLink to={"/"} className="p-0 btn btnClose">
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 72 72" width="40" height="40" fill="none">
                        <path d="M25.2422 51L20.9996 46.7573L46.5005 21.2573L50.743 25.5001L25.2422 51Z" fill="#FFEBEE" />
                        <path d="M51.0371 46.416L46.7945 50.6587L21.1569 25.022L25.3994 20.7792L51.0371 46.416Z" fill="#FFEBEE" />
                        </svg>
                    </NavLink>
                  </div>
                </div>
                <Formik>
                  
                    <Form className="authForm p-md-4 p-2">
                      <div className="text-center my-4 w-50 mx-auto"><img src={successImg} className="img-fluid" /></div>
                      <h1 className="text-center">Password Reset Success!</h1>
                      <p className="mb-0 text-center fontBlue20">You have successfully reset password now.</p>
                      <NavLink to="/login" className="w-100 mt-5 btnYellow btnSubmit d-block text-center">Back To Login</NavLink>
                    </Form>
                </Formik>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default PasswordResetSuccess;
