import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import authBgImg from "../assets/images/bg.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../store/auth/auth.fetch";
import Loader from "../Admin/common/Spinner";
import { verifyUuid } from "../store/user/user.fetch";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirm_password: Yup.string().required("Requried"),
});

const CreatePassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [userId, setUserId] = useState(null);
  const [uuid, setUuid] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (searchParams.get("userId")) {
      console.log("userId", searchParams.get("userId"));
      setUserId(searchParams.get("userId"));
    }
    if (searchParams.get("uuid")) {
      console.log("uuid", searchParams.get("uuid"));
      setUuid(searchParams.get("uuid"));
    }
    setIsLoading(false);
  }, []);
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
                      Create Password to Personal Corner
                    </h1>
                    <p className="content mb-0">
                      Enter to fields below to create password
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
                {userId && uuid ? (
                  <Formik
                    initialValues={{
                      password: "",
                      confirm_password: "",
                    }}
                    validationSchema={ResetPasswordSchema}
                    onSubmit={(values, { setSubmitting, setStatus }) => {
                      console.log("create password", values);
                      if (values.password !== values.confirm_password) {
                        setStatus({
                          password: "*password does not match",
                        });
                      } else {
                        verifyUuid(
                          {
                            userId,
                            password: values.password,
                            uuid: uuid,
                          },
                          navigate
                        );
                      }
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
                          {errors.confirm_password &&
                          touched.confirm_password ? (
                            <Form.Text className="text-danger">
                              {errors.confirm_password}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                        {status && status.password && (
                          <label className="text-danger">
                            {status.password}
                          </label>
                        )}
                        <button
                          type="submit"
                          className="w-100 mt-5 btnYellow btnSubmit d-block text-center"
                        >
                          Create Password
                        </button>
                      </Form>
                    )}
                  </Formik>
                ) : !isLoading ? (
                  <p className="title w-100 text-center mt-2">Invalid Link</p>
                ) : (
                  <div className="w-100 text-center mt-3">
                    <Loader variant="white" />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default CreatePassword;
