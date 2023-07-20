import { useFormik } from "formik";
import React, { Fragment } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Spinner from "react-bootstrap/Spinner";
import { createUser } from "../store/user/user.fetch";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required."),
  email: Yup.string().email("Invalid email").required("Required."),
  // password: Yup.string().min(2, "Too Short!").required("Required."),
  // confirmPassword: Yup.string()
  //   .required("Required.")
  //   .when("password", {
  //     is: (val) => (val && val.length > 0 ? true : false),
  //     then: Yup.string().oneOf(
  //       [Yup.ref("password")],
  //       "Passwords do not match."
  //     ),
  //   }),
  mobileNumber: Yup.string().required("Required."),
  role: Yup.string().required("Required."),
});

const AddNewUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      role: "member",
    },
    validationSchema,
    enableReinitialize: false,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(createUser(values, setSubmitting, navigate));
    },
  });

  return (
    <main className="adminPageMainCommon">
      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
        <h2 className="mb-0">Add New User</h2>
        <button className="btnBlue btnEarnWith">Save New User</button>
      </div>

      <section className="adminCommanPageSection w-100">
        <div className="headingBlue">
          <h3 className="m-0">User Details</h3>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="adminCommanPageContent p-4">
            <Row>
              <Col xl={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">New User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    placeholder="Jeffrey Akridge"
                    className="InputField"
                  />
                  {formik.errors.fullName && formik.touched.fullName ? (
                    <Form.Text className="text-danger">
                      {formik.errors.fullName}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <Col xl={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="JeffreyAkridge@gmail.com"
                    className="InputField"
                    autoComplete="off"
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <Form.Text className="text-danger">
                      {formik.errors.email}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <Col xl={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={formik.values.mobileNumber}
                    name="mobileNumber"
                    onChange={formik.handleChange}
                    placeholder="850-847-0459"
                    className="InputField"
                  />
                  {formik.errors.mobileNumber && formik.touched.mobileNumber ? (
                    <Form.Text className="text-danger">
                      {formik.errors.mobileNumber}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <Col xl={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">Role</Form.Label>
                  <Form.Select
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    className="InputField"
                  >
                    <option value={""}>Select Role</option>
                    <option value="member">Member</option>
                    <option value="superadmin">Super Admin</option>
                  </Form.Select>
                  {formik.errors.role && formik.touched.role ? (
                    <Form.Text className="text-danger">
                      {formik.errors.role}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              {/* <Col xl={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">Create Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    className="InputField"
                    autoComplete="new-password"
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <Form.Text className="text-danger">
                      {formik.errors.password}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <Col xl={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">Confirm Passwprd</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    className="InputField"
                  />
                  {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword ? (
                    <Form.Text className="text-danger">
                      {formik.errors.confirmPassword}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col> */}
            </Row>

            <div className="my-5">
              <button
                className="btnBlue btnEarnWith"
                disabled={formik.isSubmitting}
                type="submit"
              >
                {formik.isSubmitting ? (
                  <Fragment>
                    <Spinner animation="border" size="sm" className="me-2" />{" "}
                    Please wait...
                  </Fragment>
                ) : (
                  "Save New User"
                )}
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddNewUser;
