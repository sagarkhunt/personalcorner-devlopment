import React, { Fragment } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logoBlack from "../assets/images/logoBlack.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { adminLogin } from "../store/auth/auth.fetch";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const validationSchema = Yup.object().shape({
  password: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    enableReinitialize: false,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(adminLogin(values, setSubmitting, navigate));
    },
  });

  return (
    <main className="adminAuthForm">
      <Container>
        <Row className="justify-content-center">
          <Col xl={6} lg={8} md={10} sm={12}>
            {/* <div className="d-flex justify-content-center mb-4">
              <button className="btnClose">
                <svg
                  id="svg_2"
                  data-name="svg 2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="56.953"
                  height="55.898"
                  viewBox="0 0 56.953 55.898"
                >
                  <defs>
                    <clipPath id="clipPath">
                      <rect
                        id="Background"
                        width="56.953"
                        height="55.898"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="Background-2"
                    data-name="Background"
                    width="56.953"
                    height="55.898"
                    fill="none"
                  />
                  <g id="svg_2-2" data-name="svg 2" clipPath="url(#clipPath)">
                    <path
                      id="Circle"
                      d="M0,26.677A26.677,26.677,0,1,1,26.677,53.354,26.677,26.677,0,0,1,0,26.677Z"
                      transform="translate(1.8 1.097)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Shape"
                      d="M21.311,0,0,21.311"
                      transform="translate(17.821 17.118)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Shape-2"
                      data-name="Shape"
                      d="M0,0,21.311,21.311"
                      transform="translate(17.821 17.118)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </button>
            </div> */}

            <div className="whiteBG">
              <div className="d-flex justify-content-center">
                <img src={logoBlack} className="img-fluid" alt="" />
              </div>
              <h1 className="text-center my-5">LOG IN</h1>

              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="aouthField"
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <Form.Text className="text-danger">
                      {formik.errors.email}
                    </Form.Text>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    autoComplete="new-password"
                    type="password"
                    placeholder="Password"
                    className="aouthField"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <Form.Text className="text-danger">
                      {formik.errors.password}
                    </Form.Text>
                  ) : null}
                </Form.Group>

                <Row className="justify-content-between">
                  <Col lg="auto">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                  </Col>
                  {/* <Col lg="auto">
                    <NavLink to="/forgotPassword" className="link">
                      Forgot Password?
                    </NavLink>
                  </Col> */}
                </Row>

                <Button
                  type="submit"
                  className="w-100 mt-3 btnBlue rounded-5"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <Fragment>
                      <Spinner animation="border" size="sm" className="me-2" />{" "}
                      Please wait...
                    </Fragment>
                  ) : (
                    "Login"
                  )}
                </Button>
                {/* <p className="text-center mt-5">
                  Don't have an account?{" "}
                  <NavLink to="/createAccount" className="link">
                    Create an account
                  </NavLink>
                </p> */}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminLogin;
