/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import authBgImg from "../assets/images/bg.png";
import googleIcon from "../assets/images/googleIcon.png";
// ---- icons --- //
import {
  TwitterIcon,
  FacebookIcon,
  PswdViewIcon,
  PswdHideIcon,
} from "../common/Icons";
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

const LoginSchema = Yup.object().shape({
  password: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const google_provider = new GoogleAuthProvider();
google_provider.addScope("email");

const facebook_provider = new FacebookAuthProvider();
facebook_provider.addScope("email");

const twitter_provider = new TwitterAuthProvider();

const Login = () => {
  const [pswdHide, setPswdHide] = useState(true);
  const social_loader = useSelector((state) => state.auth.social_loader);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = new URLSearchParams(useLocation().search).get("redirect");
  const auth = getAuth();

  const GoogleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, google_provider);
      // const credential = GoogleAuthProvider.credentialFromResult(data);
      const idToken = await data.user.getIdToken();
      dispatch(
        socialLogin(
          {
            idToken,
            email: data._tokenResponse.email,
            loginType: "Google",
          },
          navigate
        )
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const FacebookLogin = async () => {
    try {
      const data = await signInWithPopup(auth, facebook_provider);
      // const credential = FacebookAuthProvider.credentialFromResult(data);
      const idToken = await data.user.getIdToken();
      dispatch(
        socialLogin(
          {
            idToken,
            email: data._tokenResponse.email,
            loginType: "FaceBook",
          },
          navigate
        )
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const TwitterLogin = async () => {
    try {
      const data = await signInWithPopup(auth, twitter_provider);
      // const credential = TwitterAuthProvider.credentialFromResult(data);
      const idToken = await data.user.getIdToken();
      dispatch(
        socialLogin(
          {
            idToken,
            email: data._tokenResponse.email,
            loginType: "Twitter",
          },
          navigate
        )
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main
      style={{ backgroundImage: "url(" + authBgImg + ")" }}
      className="authPage"
    >
      {social_loader ? (
        <div className="social-loading">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : null}
      <div className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xl={7} lg={8} md={11} sm={12}>
              {/* <div className="text-center mb-4 logo">
                <img src={logo} alt="" />
              </div> */}
              <div className="mb-4 authFormSection">
                <div className="headArea d-flex justify-content-between align-items-center">
                  <div className="">
                    <h1 className="title mb-0">Login to Personal Corner</h1>
                    <p className="content mb-0">
                      Please login to continue using personal corner.
                    </p>
                  </div>
                  <div className="">
                    <NavLink to={"/"} className="p-0 btn btnClose">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_2"
                        viewBox="0 0 72 72"
                        width="40"
                        height="40"
                        fill="none"
                      >
                        <path
                          d="M25.2422 51L20.9996 46.7573L46.5005 21.2573L50.743 25.5001L25.2422 51Z"
                          fill="#FFEBEE"
                        />
                        <path
                          d="M51.0371 46.416L46.7945 50.6587L21.1569 25.022L25.3994 20.7792L51.0371 46.416Z"
                          fill="#FFEBEE"
                        />
                      </svg>
                    </NavLink>
                  </div>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    dispatch(login(values, setSubmitting, navigate, redirect));
                  }}
                >
                  {({
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form
                      className="authForm p-md-4 p-2"
                      onSubmit={handleSubmit}
                    >
                      <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Enter email"
                          onChange={handleChange}
                        />
                        {errors.email && touched.email ? (
                          <Form.Text className="text-danger">
                            {errors.email}
                          </Form.Text>
                        ) : null}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <div className="customPswdOuter">
                          <Form.Control
                            type={pswdHide ? "password" : "text"}
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                          />
                          <span
                            onClick={() => setPswdHide(!pswdHide)}
                            className="showHideBtn"
                          >
                            {pswdHide ? <PswdHideIcon /> : <PswdViewIcon />}
                          </span>
                          {errors.password && touched.password ? (
                            <Form.Text className="text-danger">
                              {errors.password}
                            </Form.Text>
                          ) : null}
                        </div>
                      </Form.Group>
                      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
                        <Form.Group className="col-12 col-md-auto mb-2 mb-md-0">
                          <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <div className="col-12 col-md-auto">
                          <NavLink className="linkBlue" to={"/ForgotPassword"}>
                            Forgot Password?
                          </NavLink>
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-100 mt-3 btnYellow btnSubmit"
                      >
                        {isSubmitting ? "Please wait..." : "LOGIN"}
                      </button>
                      <div className="d-flex align-items-center justify-content-center gap-3 my-3 partition">
                        <span className="line"></span>
                        <span className="or">Or Login With</span>
                        <span className="line"></span>
                      </div>
                      <div className="mb-4 socialLoginBtns">
                        <button
                          className="btnSocial"
                          type="button"
                          onClick={GoogleLogin}
                        >
                          <img className="iconGoogle" src={googleIcon} alt="" />
                          <span className="d-none d-md-block">Google</span>
                        </button>

                        {/* <LoginSocialFacebook
                          appId={1454396048388308}
                          fieldsProfile={
                            "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                          }
                          onResolve={({ provider, data }) => {
                            console.log(provider, data);
                          }}
                          onReject={(err) => {
                            console.log(err);
                          }}
                        >
                          <button className="btnSocial">
                            <FacebookIcon className="iconFb" />
                            Login With Facebook
                          </button>
                        </LoginSocialFacebook> */}

                        {/* <button
                          className="btnSocial"
                          type="button"
                          onClick={FacebookLogin}
                        >
                          <FacebookIcon className="iconFb" />
                          <span className="d-none d-md-block">Facebook</span>
                        </button> */}

                        {/* <button
                          className="btnSocial"
                          type="button"
                          onClick={TwitterLogin}
                        >
                          <TwitterIcon className="iconTwitter" />
                          <span className="d-none d-md-block">Twitter</span>
                        </button> */}
                      </div>
                      <div className="signupLink">
                        <p className="mb-0 text-center fontBlue20">
                          Don’t have an account?{" "}
                          <NavLink to="/signup" className="linkBlue">
                            Sign Up
                          </NavLink>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              {/* <div className="text-center mb-4 logoBottom">
                <img src={logo} alt="" />
              </div> */}
              {/* <hr /> */}
              {/* ----- */}
              {/* <AuthFooterMenu /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Login;
