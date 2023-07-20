import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import authBgImg from "../assets/images/bg.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../store/auth/auth.fetch";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  // confirm_password: Yup.string().required("Requried"),
  confirm_password: Yup.string()
    .required("Required.")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords do not match."
      ),
    }),
});

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state?.email) {
      navigate("/ForgotPassword");
    }
  }, [location]);
  return (
    <main
      style={{
        backgroundImage: "url(" + authBgImg + ")",
        display: "flex",
        alignItems: "center",
      }}
      className="authPage"
    >
      <div className="py-5 w-100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={7} lg={8} md={11} sm={12}>
              <div className="mb-4 authFormSection">
                <div className="headArea d-flex justify-content-between align-items-center">
                  <div className="">
                    <h1 className="title mb-0">
                      Reset Password to Personal Corner
                    </h1>
                    <p className="content mb-0">
                      Enter to fields below to reset password
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
                    password: "",
                    confirm_password: "",
                  }}
                  validationSchema={ResetPasswordSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    resetPassword(
                      {
                        email: location.state.email,
                        id: location.state.id,
                        password: values.password,
                      },
                      setSubmitting,
                      navigate
                    );
                  }}
                >
                  {({
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    status,
                  }) => (
                    <Form
                      className="authForm p-md-4 p-2"
                      onSubmit={handleSubmit}
                    >
                      <Form.Group className="mb-3">
                        <Form.Label>New Password*</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={handleChange}
                        />
                        {errors.password && touched.password ? (
                          <Form.Text className="text-danger">
                            {errors.password}
                          </Form.Text>
                        ) : null}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password*</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirm_password"
                          onChange={handleChange}
                        />
                        {errors.confirm_password && touched.confirm_password ? (
                          <Form.Text className="text-danger">
                            {errors.confirm_password}
                          </Form.Text>
                        ) : null}
                      </Form.Group>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-100 mt-5 btnYellow btnSubmit d-block text-center"
                      >
                        Reset Password
                      </button>

                      <div className="signupLink mt-4">
                        <p className="mb-0 text-center fontBlue20">
                          Remember your password?
                          <NavLink to="/login" className="linkBlue ms-1">
                            Login
                          </NavLink>
                        </p>
                      </div>
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

export default ResetPassword;
