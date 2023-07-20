import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import authBgImg from "../assets/images/bg.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { forgotPassword } from "../store/auth/auth.fetch";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
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
                    <h1 className="title mb-0">Forgot Password to Personal Corner</h1>
                    <p className="content mb-0">
                      Enter your email address and we'll send you an email to reset your password.
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
                    email: ""
                  }}
                  validationSchema={ForgotPasswordSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    forgotPassword(values, setSubmitting, navigate);
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
                      <Form.Group className="mb-3">
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control type="text" name="email" placeholder="Enter email" onChange={handleChange} />
                        {errors.email && touched.email ? (
                          <Form.Text className="text-danger">
                            {errors.email}
                          </Form.Text>
                        ) : null}
                      </Form.Group>

                      <button type="submit" disabled={isSubmitting} className="w-100 mt-5 btnYellow btnSubmit d-block text-center">
                        Request OTP
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default ForgotPassword;
