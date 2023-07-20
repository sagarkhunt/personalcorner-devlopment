import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import authBgImg from "../assets/images/bg.png";
import { Formik } from "formik";
import { reSendOtp, verifyOtp } from "../store/auth/auth.fetch";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  
  useEffect(()=>{
    setEmail(location.state?.email)
  },[location]);

  const jumpNext = (input) => {
    console.log(input);
    document.getElementById("num" + input)?.focus();
  }
  const reSendOtpWithEmail = (email) => {
    reSendOtp({
      email: email
    })
  }
  return (
    <main
      style={{ backgroundImage: "url(" + authBgImg + ")", display: "flex", alignItems: "center" }}
      className="authPage"
    >
      <div className="py-5 w-100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={7} lg={8} md={11} sm={12}>
              <div className="mb-4 authFormSection">

                <div className="headArea d-flex justify-content-between align-items-center">
                  <div className="">
                    <h1 className="title mb-0">Verify Email to Personal Corner</h1>
                    <p className="content mb-0">
                      Please Enter the 4 digit code sent to {email}
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
                <Formik
                  initialValues={{
                    num1: "",
                    num2: "",
                    num3: "",
                    num4: ""
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log("values", values, "email : ", location.state.email);
                    if (!location.state.email) {
                      navigate("/ForgotPassword");
                    }
                    verifyOtp({
                      email: location.state.email,
                      otp: values.num1 + values.num2 + values.num3 + values.num4
                    }, setSubmitting, navigate);
                  }}
                >
                  {({
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form className="authForm p-md-4 p-2" onSubmit={handleSubmit}>
                      <Row className="m-4">
                        <Col className="px-2 px-md-4">
                          <Form.Control type="text" pattern="[0-9]+" maxLength={1} id="num0" name="num1" onChange={(e) => {
                            if (e.target.value !== '') jumpNext(1);
                            handleChange(e)
                          }} />
                        </Col>
                        <Col className="px-2 px-md-4">
                          <Form.Control type="text" pattern="[0-9]+" maxLength={1} id="num1" name="num2" onChange={(e) => {
                            if (e.target.value === '') jumpNext(0);
                            else jumpNext(2);
                            handleChange(e)
                          }} />
                        </Col>
                        <Col className="px-2 px-md-4">
                          <Form.Control type="text" pattern="[0-9]+" maxLength={1} id="num2" name="num3" onChange={(e) => {
                            if (e.target.value === '') jumpNext(1);
                            else jumpNext(3);
                            handleChange(e)
                          }} />
                        </Col>
                        <Col className="px-2 px-md-4">
                          <Form.Control type="text" pattern="[0-9]+" maxLength={1} id="num3" name="num4" onChange={(e) => {
                            if (e.target.value === '') jumpNext(2);
                            handleChange(e)
                          }} />
                        </Col>
                        {errors.otp && touched.otp ? (
                          <Form.Text className="text-danger">
                            {errors.email}
                          </Form.Text>
                        ) : null}
                      </Row>

                      <button type="submit" disabled={isSubmitting} className="w-100 mt-5 btnYellow btnSubmit d-block text-center">
                        Confirm
                      </button>


                    </Form>
                  )}
                </Formik>
                {
                  email &&
                  <div className="signupLink mt-4">
                    <p className="mb-0 text-center fontBlue20">
                      Don’t Receive a code?
                      <button onClick={() =>{
                        reSendOtpWithEmail(email);
                      }} className="linkBlue ms-1">
                        Resend Again
                      </button>
                    </p>
                  </div>
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default VerifyEmail;
