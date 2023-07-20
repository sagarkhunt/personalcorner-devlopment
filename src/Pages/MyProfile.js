import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Collapse,
  Nav,
  Tabs,
  Tab,
  Form,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../Marketplace/common/Header";
import profilePic from "../assets/images/profilePic.png";
import {
  TwitterIcon,
  FacebookIcon,
  PswdViewIcon,
  PswdHideIcon,
} from "../common/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  sendChangePasswordEmail,
  updateUserProfile,
  uploadImageWithSignUrl,
} from "../store/auth/auth.fetch";

const MyProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loginUser, setLoginUser] = useState(user);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditBio, setIsEditBio] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidMobileNumber, setIsValidMobileNumber] = useState(true);
  const inputRef = useRef();

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const uploadImage = async (file) => {
    const imageUrl = await uploadImageWithSignUrl(file);
    setFields("profileImageUrl", imageUrl);
  };
  const setFields = async (key, value) => {
    if (key == "mobileNumber") {
      setIsValidMobileNumber(value.match(/^\d{10}$/));
    }
    setLoginUser({
      ...loginUser,
      [key]: value,
    });
  };

  const saveUser = async (values) => {
    setIsEdit(false);
    dispatch(updateUserProfile(loginUser._id, values, setIsLoading));
  };

  const changePasswordWithLink = async () => {
    await sendChangePasswordEmail(loginUser?._id, loginUser?.email);
  };
  return (
    <>
      <div className="LayoutBG athleteSection">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <div className="d-flex align-items-center pageMainTitle">
              <svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.8848 0.433594C22.0558 0.433594 19.3427 1.5574 17.3423 3.55779C15.3419 5.55818 14.2181 8.27128 14.2181 11.1003C14.2181 13.9292 15.3419 16.6423 17.3423 18.6427C19.3427 20.6431 22.0558 21.7669 24.8848 21.7669C27.7137 21.7669 30.4269 20.6431 32.4272 18.6427C34.4276 16.6423 35.5514 13.9292 35.5514 11.1003C35.5514 8.27128 34.4276 5.55818 32.4272 3.55779C30.4269 1.5574 27.7137 0.433594 24.8848 0.433594ZM16.3796 30.8138C8.86756 32.4778 0.884766 36.1269 0.884766 41.7669V48.4336H48.8848V41.7669C48.8848 36.1269 40.902 32.4778 33.39 30.8138C31.4433 33.4031 28.3728 35.1003 24.8848 35.1003C21.3968 35.1003 18.3262 33.4031 16.3796 30.8138Z"
                  fill="#B1E0FE"
                />
              </svg>

              <div className="font54White ms-4">Profile</div>
            </div>
            <p className="titleTextMini">
              VIEW YOUR PERSONAL AND SOCIAL INFORMATION
            </p>
            <Header />
          </div>

          <Row className="mt-4 myProfilePage">
            <Col xxl={7} xl={12} className="mb-4">
              <div className="profileDetails">
                <div className="heading d-flex align-items-center justify-content-between">
                  <h3 className="mb-0">PERSONAL INFORMATION</h3>
                  {isEdit ? (
                    <Row>
                      <Col>
                        {" "}
                        <Button
                          className="LinkButton"
                          onClick={() => {
                            setIsEdit(false);
                          }}
                        >
                          {" "}
                          Cancel
                        </Button>{" "}
                      </Col>
                      <Col>
                        {" "}
                        <Button
                          className="LinkButton"
                          disabled={!isValidMobileNumber}
                          onClick={() => {
                            saveUser(loginUser);
                          }}
                        >
                          {" "}
                          Save{" "}
                        </Button>{" "}
                      </Col>
                    </Row>
                  ) : (
                    <Button
                      className="LinkButton"
                      onClick={() => {
                        setIsEdit(true);
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </div>
                <div className="profileBody p-4">
                  <Row>
                    <Col xxl={5} lg={4} md={"auto"}>
                      <div
                        className="position-relative d-inline-block"
                        style={{ width: "400px", height: "400px" }}
                      >
                        <input
                          ref={inputRef}
                          className="d-none"
                          type="file"
                          onChange={(e) => {
                            uploadImage(e.target.files[0]);
                          }}
                        />
                        <Button
                          className="cameraButton"
                          type="file"
                          onClick={handleUpload}
                          disabled={!isEdit}
                        >
                          <svg
                            width="36"
                            height="33"
                            viewBox="0 0 36 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.7011 0.570312L14.1307 0.577283C13.1332 0.577283 12.179 0.995731 11.5027 1.73096L9.28945 4.14288H3.64305C1.68005 4.14288 0.073967 5.74897 0.073967 7.71197V29.1265C0.073967 31.0895 1.68005 32.6956 3.64305 32.6956H32.1957C34.1587 32.6956 35.7648 31.0895 35.7648 29.1265V7.71197C35.7648 5.74897 34.1587 4.14288 32.1957 4.14288H26.5598L24.3326 1.72399C23.6562 0.98876 22.7004 0.570312 21.7011 0.570312ZM17.9194 9.49651C22.9161 9.49651 26.8421 13.4225 26.8421 18.4192C26.8421 23.4159 22.9161 27.3419 17.9194 27.3419C12.9227 27.3419 8.99668 23.4159 8.99668 18.4192C8.99668 13.4225 12.9227 9.49651 17.9194 9.49651ZM17.9194 13.0656C16.4995 13.0656 15.1378 13.6296 14.1338 14.6336C13.1298 15.6376 12.5658 16.9993 12.5658 18.4192C12.5658 19.8391 13.1298 21.2008 14.1338 22.2048C15.1378 23.2088 16.4995 23.7728 17.9194 23.7728C19.3393 23.7728 20.701 23.2088 21.705 22.2048C22.709 21.2008 23.273 19.8391 23.273 18.4192C23.273 16.9993 22.709 15.6376 21.705 14.6336C20.701 13.6296 19.3393 13.0656 17.9194 13.0656Z"
                              fill="#79540F"
                            />
                          </svg>
                        </Button>
                        <img
                          src={loginUser?.profileImageUrl}
                          className="img-fluid"
                          style={{ width: "400px", height: "400px" }}
                        />
                      </div>
                    </Col>
                    <Col
                      xxl={7}
                      lg={8}
                      md={12}
                      className="d-flex justify-content-between flex-column mt-3 mt-lg-0"
                    >
                      <div className="row mb-2">
                        <div className="col-auto">
                          <div className="iconBlue">
                            <svg
                              width="38"
                              height="30"
                              viewBox="0 0 38 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.551433 3.92839V25.9284C0.551433 27.9451 2.20143 29.5951 4.2181 29.5951H33.5514C35.5681 29.5951 37.2181 27.9451 37.2181 25.9284V3.92839C37.2181 1.91172 35.5681 0.261719 33.5514 0.261719H4.2181C2.19227 0.261719 0.551433 1.90255 0.551433 3.92839ZM11.5514 7.59505C13.5773 7.59505 15.2181 9.23589 15.2181 11.2617C15.2181 13.2876 13.5773 14.9284 11.5514 14.9284C9.5256 14.9284 7.88477 13.2876 7.88477 11.2617C7.88477 9.23589 9.5256 7.59505 11.5514 7.59505ZM6.05143 20.6117C6.05143 18.7821 9.71627 17.8617 11.5514 17.8617C13.3866 17.8617 17.0514 18.7821 17.0514 20.6117V22.2617H6.05143V20.6117ZM31.7181 13.0951H20.7181V9.42839H31.7181V13.0951ZM31.7181 20.4284H20.7181V16.7617H31.7181V20.4284Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head">FULL NAME</div>
                          {isEdit ? (
                            <Form.Control
                              type="text"
                              name="type"
                              value={loginUser?.fullName ?? ""}
                              onChange={(e) => {
                                console.log(e.target.value);
                                setFields("fullName", e.target.value);
                              }}
                              className="InputField"
                            />
                          ) : (
                            <div className="font20Details">
                              {user?.fullName}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <div className="row mb-2">
                        <div className="col-auto">
                          <div className="iconBlue">
                            <svg
                              width="38"
                              height="30"
                              viewBox="0 0 38 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.551433 3.92839V25.9284C0.551433 27.9451 2.20143 29.5951 4.2181 29.5951H33.5514C35.5681 29.5951 37.2181 27.9451 37.2181 25.9284V3.92839C37.2181 1.91172 35.5681 0.261719 33.5514 0.261719H4.2181C2.19227 0.261719 0.551433 1.90255 0.551433 3.92839ZM11.5514 7.59505C13.5773 7.59505 15.2181 9.23589 15.2181 11.2617C15.2181 13.2876 13.5773 14.9284 11.5514 14.9284C9.5256 14.9284 7.88477 13.2876 7.88477 11.2617C7.88477 9.23589 9.5256 7.59505 11.5514 7.59505ZM6.05143 20.6117C6.05143 18.7821 9.71627 17.8617 11.5514 17.8617C13.3866 17.8617 17.0514 18.7821 17.0514 20.6117V22.2617H6.05143V20.6117ZM31.7181 13.0951H20.7181V9.42839H31.7181V13.0951ZM31.7181 20.4284H20.7181V16.7617H31.7181V20.4284Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head">LAST NAME</div>
                          <div className="font20Details">VLOSKY</div>
                        </div>
                      </div> */}
                      <div className="row mb-2">
                        <div className="col-auto">
                          <div className="iconBlue">
                            <svg
                              width="37"
                              height="30"
                              viewBox="0 0 37 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.7181 0.214844C2.0131 0.214844 0.587339 1.39351 0.180339 2.97201L18.3848 14.3802L36.5999 3.00423C36.2039 1.4074 34.7693 0.214844 33.0514 0.214844H3.7181ZM0.0514326 7.0612V25.8815C0.0514326 27.9037 1.69593 29.5482 3.7181 29.5482H33.0514C35.0736 29.5482 36.7181 27.9037 36.7181 25.8815V7.10059L18.3848 18.5482L0.0514326 7.0612Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head">EMAIL ADDRESS</div>
                          <div className="font20Details">
                            {loginUser?.email}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-auto">
                          <div className="iconBlue">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.0936 23.2775C30.9386 23.25 29.4848 23.1821 28.5663 23.0208C27.5726 22.8448 26.3773 22.5038 25.5358 22.2416C24.8758 22.0363 24.1571 22.2178 23.6676 22.7055L19.6031 26.7461C16.7944 25.2666 14.5449 23.5433 12.6401 21.6275C10.7243 19.7226 9.00093 17.4731 7.52143 14.6645L11.5621 10.5981C12.0498 10.1086 12.2313 9.38998 12.0259 8.72998C11.7656 7.89031 11.4228 6.69498 11.2486 5.70131C11.0854 4.78281 11.0194 3.32898 10.9901 2.17398C10.9663 1.17481 10.1523 0.382812 9.1531 0.382812H2.7181C1.9151 0.382812 0.884766 0.984146 0.884766 2.21615C0.884766 10.5376 4.2581 18.4851 9.9891 24.2785C15.7824 30.0095 23.7299 33.3828 32.0514 33.3828C33.2834 33.3828 33.8848 32.3525 33.8848 31.5495V25.1145C33.8848 24.1153 33.0928 23.3013 32.0936 23.2775Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head">PHONE NUMBER</div>
                          <div className="font20Details">
                            {isEdit ? (
                              <>
                                <Form.Control
                                  type="text"
                                  name="type"
                                  value={loginUser?.mobileNumber ?? ""}
                                  val
                                  onChange={(e) => {
                                    setFields("mobileNumber", e.target.value);
                                  }}
                                  className="InputField"
                                />
                                {!isValidMobileNumber && (
                                  <p
                                    style={{ color: "red", fontSize: "14px" }}
                                    className="m-2"
                                  >
                                    *Invalid Mobile Number
                                  </p>
                                )}
                              </>
                            ) : (
                              <div className="font20Details">
                                {loginUser?.mobileNumber ?? "-"}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="w-100 mt-5 profileAbout">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="font24White">ABOUT YOURSELF</div>
                      {isEditBio ? (
                        <Row>
                          <Col>
                            {" "}
                            <Button
                              className="LinkButton"
                              disabled={!isValidMobileNumber}
                              onClick={() => {
                                setIsEditBio(false);
                              }}
                            >
                              {" "}
                              Save
                            </Button>{" "}
                          </Col>
                        </Row>
                      ) : (
                        <Button
                          className="LinkButton"
                          onClick={() => {
                            setIsEditBio(true);
                          }}
                        >
                          EDIT BIO
                        </Button>
                      )}
                    </div>
                    <hr />
                    {isEditBio ? (
                      <Form.Control
                        type="textarea"
                        name="type"
                        value={loginUser?.bio ?? ""}
                        onChange={(e) => {
                          setFields("bio", e.target.value);
                        }}
                        className="InputField"
                      />
                    ) : (
                      <p>{loginUser?.bio ?? "-"}</p>
                    )}
                  </div>
                </div>
              </div>
            </Col>

            <Col xxl={5} xl={12}>
              <div className="profileDetails">
                <div className="heading">
                  <h3 className="mb-0">
                    <svg
                      className="me-4"
                      width="11"
                      height="24"
                      viewBox="0 0 11 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.51367 0.1875C3.5805 0.1875 2.01367 1.75433 2.01367 3.6875C2.01367 5.62067 3.5805 7.1875 5.51367 7.1875C7.44683 7.1875 9.01367 5.62067 9.01367 3.6875C9.01367 1.75433 7.44683 0.1875 5.51367 0.1875ZM2.01367 9.52083C1.85907 9.51865 1.70558 9.54721 1.56212 9.60486C1.41865 9.66251 1.28808 9.74809 1.17798 9.85665C1.06788 9.9652 0.980458 10.0945 0.920785 10.2372C0.861113 10.3798 0.830383 10.5329 0.830383 10.6875C0.830383 10.8421 0.861113 10.9952 0.920785 11.1378C0.980458 11.2805 1.06788 11.4098 1.17798 11.5184C1.28808 11.6269 1.41865 11.7125 1.56212 11.7701C1.70558 11.8278 1.85907 11.8564 2.01367 11.8542H3.18033V21.1875H2.01367C1.85907 21.1853 1.70558 21.2139 1.56212 21.2715C1.41865 21.3292 1.28808 21.4148 1.17798 21.5233C1.06788 21.6319 0.980458 21.7612 0.920785 21.9038C0.861113 22.0465 0.830383 22.1996 0.830383 22.3542C0.830383 22.5088 0.861113 22.6618 0.920785 22.8045C0.980458 22.9471 1.06788 23.0765 1.17798 23.185C1.28808 23.2936 1.41865 23.3792 1.56212 23.4368C1.70558 23.4945 1.85907 23.523 2.01367 23.5208H9.01367C9.16826 23.523 9.32175 23.4945 9.46522 23.4368C9.60868 23.3792 9.73925 23.2936 9.84935 23.185C9.95945 23.0765 10.0469 22.9471 10.1065 22.8045C10.1662 22.6618 10.1969 22.5088 10.1969 22.3542C10.1969 22.1996 10.1662 22.0465 10.1065 21.9038C10.0469 21.7612 9.95945 21.6319 9.84935 21.5233C9.73925 21.4148 9.60868 21.3292 9.46522 21.2715C9.32175 21.2139 9.16826 21.1853 9.01367 21.1875H7.847V10.6875C7.847 10.0435 7.32433 9.52083 6.68033 9.52083H4.347H2.01367Z"
                        fill="#9BE0F6"
                      />
                    </svg>
                    SOCIAL INFORMATION
                  </h3>
                </div>
                <div className="profileBody p-4">
                  <Row>
                    <Col
                      xxl={12}
                      xl={12}
                      className="d-flex justify-content-between flex-column"
                    >
                      <div className="row mb-2">
                        <div className="col-auto">
                          <div className="iconTeal">
                            <svg
                              width="37"
                              height="40"
                              viewBox="0 0 37 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.3848 0.714844C12.3091 0.714844 7.38479 5.63918 7.38479 11.7148C7.38479 19.5725 18.3848 31.8815 18.3848 31.8815C18.3848 31.8815 29.3848 19.5725 29.3848 11.7148C29.3848 5.63918 24.4605 0.714844 18.3848 0.714844ZM18.3848 7.78678C20.5555 7.78678 22.3128 9.54418 22.3128 11.7148C22.3128 13.8837 20.5536 15.6429 18.3848 15.6429C16.216 15.6429 14.4567 13.8855 14.4567 11.7148C14.4567 9.54418 16.2141 7.78678 18.3848 7.78678ZM5.18622 26.3815L0.0514526 39.2148H36.7181L31.5834 26.3815H27.2077C26.3185 27.7217 25.4258 28.9628 24.6045 30.0482H29.1055L31.3041 35.5482H5.46552L7.66408 30.0482H12.1651C11.3437 28.9628 10.451 27.7217 9.56187 26.3815H5.18622Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head2">ADDRESS</div>
                          <div className="font20Details">
                            {isEdit ? (
                              <Form.Control
                                type="text"
                                name="type"
                                value={loginUser?.address ?? ""}
                                onChange={(e) => {
                                  setFields("address", e.target.value);
                                }}
                                className="InputField"
                              />
                            ) : (
                              loginUser?.address ?? "-"
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-auto">
                          <div className="iconTeal">
                            <svg
                              width="41"
                              height="30"
                              viewBox="0 0 41 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M35.0148 3.36105C31.512 0.542297 25.9707 0.0644846 25.7335 0.0472964C25.3657 0.0163591 25.0151 0.22261 24.8638 0.562922C24.8501 0.583547 24.7298 0.861985 24.5957 1.29511C26.9126 1.68698 29.7588 2.47417 32.3335 4.07261C32.746 4.32698 32.8732 4.87011 32.6188 5.28261C32.4504 5.55417 32.1651 5.70199 31.8695 5.70199C31.7113 5.70199 31.5498 5.6573 31.4054 5.56792C26.9779 2.82136 21.4504 2.68386 20.3848 2.68386C19.3192 2.68386 13.7882 2.82136 9.36415 5.56792C8.95165 5.82573 8.40853 5.69855 8.15415 5.28605C7.89634 4.87011 8.02353 4.33042 8.43603 4.07261C11.0107 2.47761 13.857 1.68699 16.1738 1.29855C16.0398 0.861985 15.9195 0.586985 15.9092 0.562922C15.7545 0.22261 15.4073 0.00948456 15.036 0.0472964C14.7988 0.0644846 9.25759 0.542297 5.70665 3.39886C3.85384 5.11417 0.144775 15.1379 0.144775 23.8039C0.144775 23.9585 0.186025 24.1064 0.261651 24.2404C2.81915 28.7367 9.80071 29.9123 11.3923 29.9639C11.3992 29.9639 11.4095 29.9639 11.4198 29.9639C11.7017 29.9639 11.9663 29.8298 12.1313 29.6029L13.7401 27.3892C9.39853 26.2685 7.18134 24.3642 7.05415 24.2507C6.68978 23.931 6.6554 23.3742 6.97853 23.0098C7.29821 22.6454 7.85509 22.611 8.21946 22.9307C8.27103 22.9789 12.3548 26.4439 20.3848 26.4439C28.4285 26.4439 32.5123 22.9651 32.5535 22.9307C32.9179 22.6145 33.4713 22.6454 33.7945 23.0132C34.1142 23.3776 34.0798 23.931 33.7154 24.2507C33.5882 24.3642 31.371 26.2685 27.0295 27.3892L28.6382 29.6029C28.8032 29.8298 29.0679 29.9639 29.3498 29.9639C29.3601 29.9639 29.3704 29.9639 29.3773 29.9639C30.9688 29.9123 37.9504 28.7367 40.5079 24.2404C40.5835 24.1064 40.6248 23.9585 40.6248 23.8039C40.6248 15.1379 36.9157 5.11417 35.0148 3.36105ZM14.6648 20.2839C12.9632 20.2839 11.5848 18.7095 11.5848 16.7639C11.5848 14.8182 12.9632 13.2439 14.6648 13.2439C16.3663 13.2439 17.7448 14.8182 17.7448 16.7639C17.7448 18.7095 16.3663 20.2839 14.6648 20.2839ZM26.1048 20.2839C24.4032 20.2839 23.0248 18.7095 23.0248 16.7639C23.0248 14.8182 24.4032 13.2439 26.1048 13.2439C27.8063 13.2439 29.1848 14.8182 29.1848 16.7639C29.1848 18.7095 27.8063 20.2839 26.1048 20.2839Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head2">DISCORD</div>
                          <div className="font20Details">
                            {isEdit ? (
                              <Form.Control
                                type="text"
                                name="type"
                                value={loginUser?.discord ?? ""}
                                onChange={(e) => {
                                  setFields("discord", e.target.value);
                                }}
                                className="InputField"
                              />
                            ) : (
                              loginUser?.discord ?? "-"
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-auto">
                          <div className="iconTeal">
                            <svg
                              width="39"
                              height="32"
                              viewBox="0 0 39 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M38.4515 4.05876C37.0479 4.68209 35.5401 5.10156 33.9576 5.29076C35.5739 4.32276 36.8132 2.79009 37.3969 0.962626C35.8862 1.85876 34.2113 2.50996 32.4278 2.86196C31.0008 1.34103 28.968 0.390625 26.7181 0.390625C22.3973 0.390625 18.8949 3.89449 18.8949 8.21383C18.8949 8.82689 18.9653 9.42529 19.0973 9.99583C12.5956 9.67023 6.83158 6.55503 2.97132 1.82063C2.29958 2.97636 1.91385 4.31983 1.91385 5.75569C1.91385 8.46903 3.29398 10.8641 5.39278 12.2662C4.11092 12.2252 2.90385 11.8732 1.84932 11.288C1.84932 11.3217 1.84932 11.3525 1.84932 11.3862C1.84932 15.1776 4.54505 18.3397 8.12518 19.0569C7.46958 19.2358 6.77732 19.3312 6.06305 19.3312C5.55998 19.3312 5.06865 19.2813 4.59198 19.1918C5.58785 22.2997 8.47718 24.5628 11.9004 24.6258C9.22372 26.7246 5.85038 27.9757 2.18372 27.9757C1.55305 27.9757 0.929717 27.939 0.31665 27.8657C3.77945 30.0848 7.89052 31.3798 12.3096 31.3798C26.7005 31.3798 34.5677 19.4588 34.5677 9.12022C34.5677 8.78143 34.5604 8.44409 34.5457 8.10823C36.0755 7.00383 37.4028 5.62663 38.4515 4.05876Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head2">TWITTER</div>
                          <div className="font20Details">
                            {isEdit ? (
                              <Form.Control
                                type="text"
                                name="type"
                                value={loginUser?.twitter ?? ""}
                                onChange={(e) => {
                                  setFields("twitter", e.target.value);
                                }}
                                className="InputField"
                              />
                            ) : (
                              loginUser?.twitter ?? "-"
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-auto">
                          <div className="iconTeal">
                            <svg
                              width="37"
                              height="40"
                              viewBox="0 0 37 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.8259 27.6161C30.4461 25.5789 28.0242 24.3409 25.6744 26.3782L24.2682 27.6041C23.2405 28.4995 21.3295 32.6702 13.9436 24.1666C6.55783 15.681 10.9509 14.3589 11.9845 13.4755L13.3968 12.2435C15.7345 10.2063 14.8511 7.64017 13.1624 4.99594L12.1468 3.39738C10.4521 0.765173 8.6011 -0.965596 6.25735 1.06565L4.98932 2.17743C3.94966 2.92863 1.05302 5.38657 0.3499 10.05C-0.497456 15.645 2.17682 22.0572 8.2886 29.0885C14.3944 36.1257 20.3799 39.6594 26.041 39.5993C30.7465 39.5452 33.5951 37.0212 34.4845 36.1017L35.7525 34.9899C38.0963 32.9587 36.642 30.8854 34.2561 28.8481L32.8259 27.6161Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head2">FACEBOOK</div>
                          <div className="font20Details">
                            {isEdit ? (
                              <Form.Control
                                type="text"
                                name="type"
                                value={loginUser?.facebook ?? ""}
                                onChange={(e) => {
                                  setFields("facebook", e.target.value);
                                }}
                                className="InputField"
                              />
                            ) : (
                              loginUser?.facebook ?? "-"
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-auto">
                          <div className="iconTeal">
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.0486 0.28125C5.38873 0.28125 0.78479 4.88945 0.78479 10.5508V25.2174C0.78479 30.8773 5.39299 35.4813 11.0543 35.4813H25.721C31.3809 35.4813 35.9848 30.8731 35.9848 25.2117V10.5451C35.9848 4.88519 31.3766 0.28125 25.7153 0.28125H11.0486ZM28.6515 6.14792C29.4611 6.14792 30.1181 6.80498 30.1181 7.61458C30.1181 8.42418 29.4611 9.08125 28.6515 9.08125C27.8419 9.08125 27.1848 8.42418 27.1848 7.61458C27.1848 6.80498 27.8419 6.14792 28.6515 6.14792ZM18.3848 9.08125C23.238 9.08125 27.1848 13.0281 27.1848 17.8813C27.1848 22.7345 23.238 26.6813 18.3848 26.6813C13.5316 26.6813 9.58479 22.7345 9.58479 17.8813C9.58479 13.0281 13.5316 9.08125 18.3848 9.08125ZM18.3848 12.0146C16.8289 12.0146 15.3366 12.6327 14.2364 13.7329C13.1362 14.8331 12.5181 16.3253 12.5181 17.8813C12.5181 19.4372 13.1362 20.9294 14.2364 22.0296C15.3366 23.1298 16.8289 23.7479 18.3848 23.7479C19.9407 23.7479 21.4329 23.1298 22.5331 22.0296C23.6334 20.9294 24.2515 19.4372 24.2515 17.8813C24.2515 16.3253 23.6334 14.8331 22.5331 13.7329C21.4329 12.6327 19.9407 12.0146 18.3848 12.0146Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col">
                          <div className="font20Head2">INSTAGRAM</div>
                          <div className="font20Details">
                            {isEdit ? (
                              <Form.Control
                                type="text"
                                name="type"
                                value={loginUser?.instagram ?? ""}
                                onChange={(e) => {
                                  setFields("instagram", e.target.value);
                                }}
                                className="InputField"
                              />
                            ) : (
                              loginUser?.instagram ?? "-"
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="profileDetails mt-3">
                <div className="heading">
                  <h3 className="mb-0">
                    <svg
                      className="me-4"
                      width="23"
                      height="29"
                      viewBox="0 0 23 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5137 0.1875C7.08191 0.1875 3.51365 3.75575 3.51365 8.1875V9.52083C2.04698 9.52083 0.846985 10.7208 0.846985 12.1875V25.5208C0.846985 26.9875 2.04698 28.1875 3.51365 28.1875H19.5137C20.9803 28.1875 22.1803 26.9875 22.1803 25.5208V12.1875C22.1803 10.7208 20.9803 9.52083 19.5137 9.52083V8.1875C19.5137 3.75575 15.9454 0.1875 11.5137 0.1875ZM11.5137 2.85417C14.5486 2.85417 16.847 5.15258 16.847 8.1875V9.52083H6.18032V8.1875C6.18032 5.15258 8.47873 2.85417 11.5137 2.85417ZM6.18032 17.5208C6.91365 17.5208 7.51365 18.1208 7.51365 18.8542C7.51365 19.5875 6.91365 20.1875 6.18032 20.1875C5.44698 20.1875 4.84698 19.5875 4.84698 18.8542C4.84698 18.1208 5.44698 17.5208 6.18032 17.5208ZM11.5137 17.5208C12.247 17.5208 12.847 18.1208 12.847 18.8542C12.847 19.5875 12.247 20.1875 11.5137 20.1875C10.7803 20.1875 10.1803 19.5875 10.1803 18.8542C10.1803 18.1208 10.7803 17.5208 11.5137 17.5208ZM16.847 17.5208C17.5803 17.5208 18.1803 18.1208 18.1803 18.8542C18.1803 19.5875 17.5803 20.1875 16.847 20.1875C16.1137 20.1875 15.5137 19.5875 15.5137 18.8542C15.5137 18.1208 16.1137 17.5208 16.847 17.5208Z"
                        fill="#9BE0F6"
                      />
                    </svg>
                    PASSWORD MANAGEMENT
                  </h3>
                </div>
                <div className="profileBody p-4">
                  <div className="passwordPart">
                    <Form.Group>
                      <Row>
                        <Col>
                          <div className="col-auto">
                            <button
                              className="btn btn-primary mb-3"
                              onClick={changePasswordWithLink}
                            >
                              Change Password
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyProfile;
