/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment, useRef, useState } from "react";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Cropper from "react-easy-crop";
import { toast } from "react-toastify";
import { uploadFileToS3 } from "../utils/s3";
import AxiosRequest from "../AxiosRequest";
import { useNavigate } from "react-router-dom";

const Schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  visibleInHeader: Yup.boolean().required("Required"),
  displayMode: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const AddGearCategory = () => {
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      visibleInHeader: true,
      displayMode: "ProductsAndCategory",
      description: "",
      imageUrl: "",
      category: null,
    },
    validationSchema: Schema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!image) return toast.error("Please select image.");
      try {
        setSubmitting(true);
        const blob = await generateBlobUrl(image, croppedArea);
        const imageUrl = await uploadFileToS3("gear", blob);
        values.imageUrl = imageUrl;
        values.visibleInHeader =
          values.visibleInHeader === "true" || values.visibleInHeader === true
            ? true
            : false;
        const { data } = await AxiosRequest.post(`/admin/gearCategory`, values);
        toast.success(data.message);
        setSubmitting(false);
        navigate("/admin/GearCategory");
      } catch (error) {
        setSubmitting(false);
        toast.error(error.response.data.message);
      }
    },
  });

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) =>
    setCroppedArea(croppedAreaPixels);

  const resetImg = () => {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedArea(null);
    setPreviewImage(null);
    setImage(null);
  };

  const confirmAndImg = async () => {
    const blob = await generateBlobUrl(image, croppedArea);
    const previewUrl = window.URL.createObjectURL(blob);
    setPreviewImage(previewUrl);
  };

  const generateBlobUrl = async (imageSrc, crop) => {
    if (!crop || !imageSrc) {
      return;
    }
    const canvas = await getCroppedImg(imageSrc, crop);
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.66);
    });
  };

  const createImage = (url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous");
      image.src = url;
    });
  };

  const getRadianAngle = (degreeValue) => {
    return (degreeValue * Math.PI) / 180;
  };

  const onSelectFile = (event) => {
    const _file = event.target.files && event.target.files[0];
    if (!_file) return;
    const reader = new FileReader();
    reader.readAsDataURL(_file);
    reader.addEventListener("load", () => setImage(reader.result));
  };

  const getCroppedImg = async (imageSrc, pixelCrop, rotation = 0) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));
    canvas.width = safeArea;
    canvas.height = safeArea;
    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate(getRadianAngle(rotation));
    ctx.translate(-safeArea / 2, -safeArea / 2);
    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );

    const data = ctx.getImageData(0, 0, safeArea, safeArea);
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    ctx.putImageData(
      data,
      0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
      0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
    );
    return canvas;
  };

  return (
    <main className="adminPageMainCommon">
      <Form onSubmit={formik.handleSubmit}>
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">Add Gear Category</h2>
          {formik.isSubmitting ? (
            <div style={{ color: "white" }}>
              <Spinner animation="border" size="sm" className="me-2" /> Please
              wait...
            </div>
          ) : (
            <button className="btnBlue btnEarnWith" type="submit">
              Save Category
            </button>
          )}
        </div>

        <section className="adminCommanPageSection w-100">
          <div className="headingBlue">
            <h3 className="m-0">General</h3>
          </div>
          <div className="adminCommanPageContent p-4">
            <Row className="mt-4">
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">Category Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Eg. Category 1"
                    className="InputField"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <Form.Text className="text-danger">
                      {formik.errors.name}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">
                    Visible In Header Menu
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="InputField"
                    name="visibleInHeader"
                    value={formik.values.visibleInHeader}
                    onChange={formik.handleChange}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Form.Select>
                  {formik.errors.visibleInHeader &&
                  formik.touched.visibleInHeader ? (
                    <Form.Text className="text-danger">
                      {formik.errors.visibleInHeader}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="headingBlue">
            <h3 className="m-0">Description and Images</h3>
          </div>
          <div className="p-4">
            <Row className="mt-4">
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-4">
                  <Form.Label className="label">Display Mode</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="InputField"
                    name="displayMode"
                    value={formik.values.displayMode}
                    onChange={formik.handleChange}
                  >
                    <option value={"ProductsAndCategory"}>
                      Products And Category
                    </option>
                    <option value={"Category"}>Category</option>
                    <option value={"Product"}>Product</option>
                  </Form.Select>

                  {formik.errors.displayMode && formik.touched.displayMode ? (
                    <Form.Text className="text-danger">
                      {formik.errors.displayMode}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <div className="w-100"></div>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="label">Add Description</Form.Label>
                  <Editor
                    apiKey="lf40lmftxjiz77uxxayrs9tc9hbj8bkleifpexuubcr2zi92"
                    value={formik.values.description}
                    onEditorChange={(ediTxt) =>
                      formik.setFieldValue("description", ediTxt)
                    }
                    init={{
                      height: 450,
                      menubar: true,
                      plugins: [
                        "lists",
                        "advlist",
                        "autolink",
                        "autolink",
                        "link",
                        // "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | code | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat image link | print preview fullscreen media insertdatetime anchor visualblocks",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                  {formik.errors.description && formik.touched.description ? (
                    <Form.Text className="text-danger">
                      {formik.errors.description}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>

              <div className="w-100"></div>
              <Col lg={12} md={12} sm={12}>
                <Form.Group className="mb-4 mt-4">
                  <Form.Label className="label w-100" htmlFor="upload-button">
                    <div className="mb-3">Add Category Image/Icon</div>
                    {image ? (
                      <Fragment>
                        {previewImage ? (
                          <div className="text-center">
                            <img
                              src={previewImage}
                              alt="NFT Image"
                              className="img-fluid"
                              style={{ maxWidth: "500px" }}
                            />
                            <div>
                              <button
                                type="button"
                                className="btnBlue-sm btnEarnWith mt-4"
                                onClick={resetImg}
                              >
                                Reset
                              </button>
                            </div>
                          </div>
                        ) : (
                          <Fragment>
                            <div className="cropper-image position-relative">
                              <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={77 / 87}
                                cropShape={"rect"}
                                showGrid={true}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                              />
                            </div>
                            <div className="text-center mt-5">
                              <button
                                type="button"
                                className="btnBlue-sm btnEarnWith"
                                onClick={confirmAndImg}
                              >
                                Confirm
                              </button>
                            </div>
                          </Fragment>
                        )}
                      </Fragment>
                    ) : (
                      <div className="d-flex flex-row w-100">
                        <div
                          className="uploadImg w-50 p-10 m-10"
                          style={{ height: "370px" }}
                        >
                          <div className="d-flex align-items-center justify-content-center h-100 flex-column">
                            <span>Drop File Here or Click to Upload</span>
                            <button
                              type="button"
                              onClick={() => fileRef.current?.click()}
                              className="btnBlue-sm btnEarnWith mt-4"
                            >
                              Upload
                            </button>
                          </div>
                          <input
                            type="file"
                            id="upload-button"
                            ref={fileRef}
                            style={{ display: "none" }}
                            name="image"
                            onChange={onSelectFile}
                          />
                        </div>
                      </div>
                    )}
                  </Form.Label>

                  {formik.errors.image && formik.touched.image ? (
                    <Form.Text className="text-danger">
                      {formik.errors.image}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
          </div>

          {/* <div className="headingBlue">
          <h3 className="m-0">Parent Category </h3>
        </div>
        <div className="p-4">
          <Row className="mt-4">
            <div className="radioButton">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Category 1
                </label>
              </div>
              <div className="form-check ms-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Sub Category 1
                </label>
              </div>
              <div className="form-check ms-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Sub Category 2
                </label>
              </div>
              <div className="form-check ms-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Sub Category 3
                </label>
              </div>
              <div className="w-100 py-2"></div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Category2
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Category3
                </label>
              </div>
            </div>
          </Row>
        </div> */}

          <div className="p-4">
            {formik.isSubmitting ? (
              <div style={{ color: "white" }}>
                <Spinner animation="border" size="sm" className="me-2" /> Please
                wait...
              </div>
            ) : (
              <button className="btnBlue-sm btnEarnWith" type="submit">
                Save Category
              </button>
            )}
          </div>
        </section>
      </Form>
    </main>
  );
};

export default AddGearCategory;
