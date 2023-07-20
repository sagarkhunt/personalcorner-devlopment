/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
// import authBgImg from "../assets/images/authBgImg.png";
import authBgImg from "../assets/images/bg.png";
import googleIcon from "../assets/images/googleIcon.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signUp, socialSignUp } from "../store/auth/auth.fetch";
import {
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";

const LoginSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  // password: Yup.string().min(8, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  // confirmPassword: Yup.string().oneOf(
  //   [Yup.ref("password"), null],
  //   "Passwords must match"
  // ),
  term: Yup.boolean().oneOf([true], "Required"),
});

const google_provider = new GoogleAuthProvider();
google_provider.addScope("email");
const facebook_provider = new FacebookAuthProvider();
const twitter_provider = new TwitterAuthProvider();

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const social_loader = useSelector((state) => state.auth.social_loader);
  // const [pswdHide, setPswdHide] = useState(false);
  // const [pswd2Hide, setPsw2dHide] = useState(false);

  const auth = getAuth();

  const GoogleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, google_provider);
      // const credential = GoogleAuthProvider.credentialFromResult(data);
      const idToken = await data.user.getIdToken();
      dispatch(
        socialSignUp(
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

  // const FacebookLogin = async () => {
  //   try {
  //     const data = await signInWithPopup(auth, facebook_provider);
  //     // const credential = FacebookAuthProvider.credentialFromResult(data);
  //     const idToken = await data.user.getIdToken();
  //     dispatch(
  //       socialSignUp(
  //         {
  //           idToken,
  //           email: data._tokenResponse.email,
  //           loginType: "FaceBook",
  //         },
  //         navigate
  //       )
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong. Please try again.");
  //   }
  // };

  // const TwitterLogin = async () => {
  //   try {
  //     const data = await signInWithPopup(auth, twitter_provider);
  //     // const credential = TwitterAuthProvider.credentialFromResult(data);
  //     const idToken = await data.user.getIdToken();
  //     dispatch(
  //       socialSignUp(
  //         {
  //           idToken,
  //           email: data._tokenResponse.email,
  //           loginType: "Twitter",
  //         },
  //         navigate
  //       )
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong. Please try again.");
  //   }
  // };

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
                    <h1 className="title mb-0">
                      Create Personal Corner Account
                    </h1>
                    <p className="content mb-0">
                      Enter the fields below to create account
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
                    fullName: "",
                    email: "",
                    term: false,
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    dispatch(signUp(values, setSubmitting, navigate));
                  }}
                >
                  {({
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    values,
                    setFieldValue,
                  }) => (
                    <Form
                      className="authForm p-md-4 p-2"
                      onSubmit={handleSubmit}
                    >
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="fullname">Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter full name"
                          name="fullName"
                          onChange={handleChange}
                        />
                        {errors.fullName && touched.fullName ? (
                          <Form.Text className="text-danger">
                            {errors.fullName}
                          </Form.Text>
                        ) : null}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="fullname">
                          Email Address*
                        </Form.Label>
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

                      {/* <Form.Group className="mb-3">
                        <Form.Label>Password*</Form.Label>
                        <div className="customPswdOuter">
                          <Form.Control
                            type={pswdHide ? "text" : "password"}
                            placeholder="Must be at least 6 characters"
                            name="password"
                            onChange={handleChange}
                          />
                          <span
                            onClick={() => setPswdHide(!pswdHide)}
                            className="showHideBtn"
                          >
                            {pswdHide ? <PswdHideIcon /> : <PswdViewIcon />}
                          </span>
                        </div>
                        {errors.password && touched.password ? (
                          <Form.Text className="text-danger">
                            {errors.password}
                          </Form.Text>
                        ) : null}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password*</Form.Label>
                        <div className="customPswdOuter">
                          <Form.Control
                            type="password"
                            placeholder="Must be at least 6 characters"
                            name="confirmPassword"
                            onChange={handleChange}
                          />
                        </div>
                        {errors.password && touched.password ? (
                          <Form.Text className="text-danger">
                            {errors.password}
                          </Form.Text>
                        ) : null}
                      </Form.Group> */}

                      {/* <Form.Group className="mb-3">
                        <Form.Label htmlFor="formBasicPassword2">
                          Re-Type Password
                        </Form.Label>
                        <div className="customPswdOuter">
                          <Form.Control
                            type={pswd2Hide ? "text" : "password"}
                            placeholder="Must be at least 6 characters"
                            name="repeat_password"
                            onChange={handleChange}
                          />
                          <span
                            onClick={() => setPsw2dHide(!pswd2Hide)}
                            className="showHideBtn"
                          >
                            {pswd2Hide ? <PswdHideIcon /> : <PswdViewIcon />}
                          </span>
                        </div>
                        {errors.repeat_password && touched.repeat_password ? (
                          <Form.Text className="text-danger">
                            {errors.repeat_password}
                          </Form.Text>
                        ) : null}
                      </Form.Group> */}

                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label="I accept to the "
                          className="d-inline-block"
                          checked={values.term}
                          onChange={(e) =>
                            setFieldValue("term", e.target.checked)
                          }
                        />
                        <NavLink to="/signup" className="linkBlue ms-1">
                          <u>terms and conditions</u>
                        </NavLink>
                        {errors.term && touched.term ? (
                          <Form.Text className="text-danger">
                            {errors.term}
                          </Form.Text>
                        ) : null}
                      </Form.Group>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-100 mt-3 btnYellow btnSubmit"
                      >
                        {isSubmitting ? "Please wait..." : "CREATE ACCOUNT"}
                      </button>
                      <div className="signupLink mt-4">
                        <p className="mb-0 text-center fontBlue20">
                          Already have an account?{" "}
                          <NavLink to="/login" className="linkBlue">
                            Sign In
                          </NavLink>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>

                <div className="d-flex align-items-center justify-content-center gap-3 my-3 partition">
                  <span className="line"></span>
                  <span className="or">Or Sign up With</span>
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

                  {/* <button
                    className="btnSocial"
                    type="button"
                    onClick={FacebookLogin}
                  >
                    <FacebookIcon className="iconFb" />
                    <span className="d-none d-md-block">Facebook</span>
                  </button>

                  <button
                    className="btnSocial"
                    type="button"
                    onClick={TwitterLogin}
                  >
                    <TwitterIcon className="iconTwitter" />
                    <span className="d-none d-md-block">Twitter</span>
                  </button> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Signup;
