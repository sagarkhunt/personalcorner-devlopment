/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Row, Col, Form, Accordion, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";
import ReactGearCategorySelect from "../Components/ReactGearCategorySelect";
import {
  getAllGearCategory,
  getAllCollectionPlayers,
} from "../store/gear/gear.fetch";
import ReactCollectionSelect from "../Components/ReactCollectionSelect";
import { getTierName } from "../utils/tier";
import { uploadFileToS3 } from "../utils/s3";
import { toast } from "react-toastify";
import AxiosRequest from "../AxiosRequest";
import { useNavigate } from "react-router-dom";

const convertToBoolean = (value) => !!JSON.parse(value);

const Schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  pccCoin: Yup.number().min(1, "Must be greter then 0").required("requried"),
  usdPrice: Yup.number().min(1, "Must be greter then 0").required("requried"),
  stockQuantity: Yup.number()
    .min(1, "Must be greter then 0")
    .required("requried"),
  SKU: Yup.string().required("Required"),
  stockStatus: Yup.string().required("Required"),
  putOnMarketPlace: Yup.string().required("Required"),

  gearCategory: Yup.string().required("Required"),
  collections: Yup.string().required("Required"),

  isSale: Yup.boolean().required("Required"),
  startDate: Yup.string().when("isSale", (isSale, schema) => {
    if (convertToBoolean(isSale)) return schema.required("Required");
    return schema;
  }),
  endDate: Yup.string().when("isSale", (isSale, schema) => {
    if (convertToBoolean(isSale)) return schema.required("Required");
    return schema;
  }),
  saleEthereumPrice: Yup.string().when("isSale", (isSale, schema) => {
    if (convertToBoolean(isSale)) return schema.required("Required");
    return schema;
  }),
  saleUsdPrice: Yup.string().when("isSale", (isSale, schema) => {
    if (convertToBoolean(isSale)) return schema.required("Required");
    return schema;
  }),

  isNftGating: Yup.boolean().required("Required"),
  requriedNft: Yup.string().when("isNftGating", (isNftGating, schema) => {
    if (convertToBoolean(isNftGating)) return schema.required("Required");
    return schema;
  }),
  tier: Yup.string().when("isNftGating", (isNftGating, schema) => {
    if (convertToBoolean(isNftGating)) return schema.required("Required");
    return schema;
  }),

  soldIndividually: Yup.boolean().required("Required"),
});

const AddNewGear = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { gearAllCategories, allPlayers } = useSelector((state) => state.gear);

  useEffect(() => {
    dispatch(getAllGearCategory());
    dispatch(getAllCollectionPlayers());
  }, [dispatch]);

  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      pccCoin: "",
      usdPrice: "",
      SKU: "",
      stockQuantity: "",
      remainingQuantity: "",
      stockStatus: "InStock",
      imageUrl: "",
      putOnMarketPlace: "buy item now",
      requriedNft: "",
      gearCategory: "",
      tier: "",
      collections: "",
      isNftGating: false,
      soldIndividually: false,
      isSale: false,
      startDate: "",
      endDate: "",
      saleEthereumPrice: "",
      saleUsdPrice: "",
    },
    validationSchema: Schema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!image) return toast.error("Please select image.");
      try {
        setSubmitting(true);
        const blob = await generateBlobUrl(image, croppedArea);
        const imageUrl = await uploadFileToS3("gear-category", blob);
        values.imageUrl = imageUrl;
        values.isNftGating = convertToBoolean(values.isNftGating);
        values.soldIndividually = convertToBoolean(values.soldIndividually);
        values.isSale = convertToBoolean(values.isSale);

        const { data } = await AxiosRequest.post(
          `/admin/collection/create-gear`,
          values
        );
        toast.success(data.message);
        setSubmitting(false);
        navigate("/admin/AthleteGear");
      } catch (error) {
        setSubmitting(false);
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <main className="adminPageMainCommon">
      <Form onSubmit={formik.handleSubmit}>
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">Add New Gear</h2>
          {formik.isSubmitting ? (
            <div style={{ color: "white" }}>
              <Spinner animation="border" size="sm" className="me-2" /> Please
              wait...
            </div>
          ) : (
            <button className="btnBlue btnEarnWith" type="submit">
              Save Item to Store
            </button>
          )}
        </div>

        <section className="adminCommanPageSection w-100">
          <Row>
            <Col lg={9}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Item Details</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">
                            Name Of Item
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Sauce Gardner Super Helmet"
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
                      <Col lg={12}>
                        <Form.Group>
                          <Form.Label className="label">
                            Add Description
                          </Form.Label>
                          <Form.Control
                            type="text"
                            as="textarea"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className="InputField"
                            style={{ height: "250px" }}
                          />
                          {formik.errors.description &&
                          formik.touched.description ? (
                            <Form.Text className="text-danger">
                              {formik.errors.description}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">PCC Price</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="28,000 Personal Corner Coin"
                            className="InputField"
                            name="pccCoin"
                            value={formik.values.pccCoin}
                            onChange={formik.handleChange}
                          />
                          {formik.errors.pccCoin && formik.touched.pccCoin ? (
                            <Form.Text className="text-danger">
                              {formik.errors.pccCoin}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={6} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">
                            Price In USD
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="20.00"
                            className="InputField"
                            name="usdPrice"
                            value={formik.values.usdPrice}
                            onChange={formik.handleChange}
                          />
                          {formik.errors.usdPrice && formik.touched.usdPrice ? (
                            <Form.Text className="text-danger">
                              {formik.errors.usdPrice}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Inventory</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">SKU</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="0.45"
                            className="InputField"
                            name="SKU"
                            value={formik.values.SKU}
                            onChange={formik.handleChange}
                          />
                          {formik.errors.SKU && formik.touched.SKU ? (
                            <Form.Text className="text-danger">
                              {formik.errors.SKU}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">
                            Stock Quantity
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="100"
                            className="InputField"
                            name="stockQuantity"
                            value={formik.values.stockQuantity}
                            onChange={formik.handleChange}
                          />
                          {formik.errors.stockQuantity &&
                          formik.touched.stockQuantity ? (
                            <Form.Text className="text-danger">
                              {formik.errors.stockQuantity}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">
                            Stock status
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className="InputField"
                            name="stockStatus"
                            value={formik.values.stockStatus}
                            onChange={formik.handleChange}
                          >
                            <option value={"InStock"}>In Stock</option>
                            <option value={"OutOfStock"}>Out Of Stock</option>
                          </Form.Select>
                          {formik.errors.stockStatus &&
                          formik.touched.stockStatus ? (
                            <Form.Text className="text-danger">
                              {formik.errors.stockStatus}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">
                            Sold Individually
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className="InputField"
                            name="soldIndividually"
                            value={formik.values.soldIndividually}
                            onChange={formik.handleChange}
                          >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </Form.Select>
                          <Form.Text className="text-muted">
                            Limit purchases to 1 item per order
                          </Form.Text>
                          {formik.errors.soldIndividually &&
                          formik.touched.soldIndividually ? (
                            <Form.Text className="text-danger">
                              {formik.errors.soldIndividually}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Sale</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={"auto"}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">Sale</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className="InputField"
                            name="isSale"
                            value={formik.values.isSale}
                            onChange={formik.handleChange}
                          >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </Form.Select>
                          {formik.errors.isSale && formik.touched.isSale ? (
                            <Form.Text className="text-danger">
                              {formik.errors.isSale}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>

                      {convertToBoolean(formik.values.isSale) ? (
                        <Fragment>
                          <Col lg={"auto"}>
                            <Form.Group className="mb-4">
                              <Form.Label className="label">
                                Start Date
                              </Form.Label>
                              <Form.Control
                                type="date"
                                placeholder="01-Sep-2022"
                                className="InputField datepickerInput"
                                name="startDate"
                                value={formik.values.startDate}
                                onChange={formik.handleChange}
                              />
                              {formik.errors.startDate &&
                              formik.touched.startDate ? (
                                <Form.Text className="text-danger">
                                  {formik.errors.startDate}
                                </Form.Text>
                              ) : null}
                            </Form.Group>
                          </Col>

                          <Col lg={"auto"}>
                            <Form.Group className="mb-4">
                              <Form.Label className="label">
                                End Date
                              </Form.Label>
                              <Form.Control
                                type="date"
                                placeholder="10-Sep-2022"
                                className="InputField datepickerInput"
                                name="endDate"
                                value={formik.values.endDate}
                                onChange={formik.handleChange}
                              />
                              {formik.errors.endDate &&
                              formik.touched.endDate ? (
                                <Form.Text className="text-danger">
                                  {formik.errors.endDate}
                                </Form.Text>
                              ) : null}
                            </Form.Group>
                          </Col>

                          <Col lg={"auto"}>
                            <Form.Group className="mb-4">
                              <Form.Label className="label">
                                Sale Price
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Ethereum Price"
                                className="InputField"
                                name="saleEthereumPrice"
                                value={formik.values.saleEthereumPrice}
                                onChange={formik.handleChange}
                              />
                              {formik.errors.saleEthereumPrice &&
                              formik.touched.saleEthereumPrice ? (
                                <Form.Text className="text-danger">
                                  {formik.errors.saleEthereumPrice}
                                </Form.Text>
                              ) : null}
                            </Form.Group>
                          </Col>

                          <Col lg={"auto"}>
                            <Form.Group className="mb-4">
                              <Form.Label className="label">&nbsp;</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="USD Price"
                                className="InputField"
                                name="saleUsdPrice"
                                value={formik.values.saleUsdPrice}
                                onChange={formik.handleChange}
                              />
                              {formik.errors.saleUsdPrice &&
                              formik.touched.saleUsdPrice ? (
                                <Form.Text className="text-danger">
                                  {formik.errors.saleUsdPrice}
                                </Form.Text>
                              ) : null}
                            </Form.Group>
                          </Col>
                        </Fragment>
                      ) : null}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Upload Images and Videos</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={12} md={12} sm={12}>
                        <Form.Group className="mb-4 mt-4">
                          <Form.Label
                            className="label w-100"
                            htmlFor="upload-button"
                          >
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
                                    <span>
                                      Drop File Here or Click to Upload
                                    </span>
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="p-4">
                {formik.isSubmitting ? (
                  <div style={{ color: "white" }}>
                    <Spinner animation="border" size="sm" className="me-2" />{" "}
                    Please wait...
                  </div>
                ) : (
                  <button className="btnBlue-sm btnEarnWith" type="submit">
                    Save Item to Store
                  </button>
                )}
              </div>
            </Col>

            <Col lg={3}>
              <div className="addAttributesPart h-100">
                <div className="heading borderBottom">Add Attributes</div>
                <div className="detailsPart borderBottom">
                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">
                        Put on Marketplcae
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        className="InputField"
                        name="putOnMarketPlace"
                        onChange={formik.handleChange}
                        value={formik.values.putOnMarketPlace}
                      >
                        <option value={"buy item now"}>Buy Item Now</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Collection</Form.Label>
                      <ReactCollectionSelect
                        value={formik.values.collections}
                        options={allPlayers.records}
                        onChange={(value) =>
                          formik.setFieldValue("collections", value)
                        }
                        placeholder="Select Collection"
                      />
                      {formik.errors.collections &&
                      formik.touched.collections ? (
                        <Form.Text className="text-danger">
                          {formik.errors.collections}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Gear Category</Form.Label>
                      <ReactGearCategorySelect
                        value={formik.values.gearCategory}
                        options={gearAllCategories.records}
                        onChange={(value) =>
                          formik.setFieldValue("gearCategory", value)
                        }
                        placeholder="Select Category"
                      />
                      {formik.errors.gearCategory &&
                      formik.touched.gearCategory ? (
                        <Form.Text className="text-danger">
                          {formik.errors.gearCategory}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>
                </div>

                <div className="heading borderBottom">
                  <div className="d-flex align-items-center justify-content-between">
                    <span>NFT-Gating</span>
                    <div>
                      <div className="ms-4 customeToggleBtn customeToggleBtnSM">
                        <input
                          id="NFT-Gating"
                          hidden
                          type="checkbox"
                          onChange={(e) =>
                            formik.setFieldValue(
                              "isNftGating",
                              e.target.checked
                            )
                          }
                        />
                        <label htmlFor="NFT-Gating" className="text-white" />
                      </div>
                    </div>
                  </div>
                  <p className="mb-0">
                    Only members holding NFT can purchase item
                  </p>
                </div>
                {formik.values.isNftGating ? (
                  <div className="detailsPart">
                    <Col lg={12}>
                      <Form.Group className="mb-5">
                        <Form.Label className="label">
                          Choose Required NFT:
                        </Form.Label>
                        <ReactCollectionSelect
                          value={formik.values.requriedNft}
                          options={allPlayers.records}
                          onChange={(value) =>
                            formik.setFieldValue("requriedNft", value)
                          }
                          placeholder="Select NFT"
                        />
                        {formik.errors.requriedNft &&
                        formik.touched.requriedNft ? (
                          <Form.Text className="text-danger">
                            {formik.errors.requriedNft}
                          </Form.Text>
                        ) : null}
                      </Form.Group>
                    </Col>

                    <Col lg={12}>
                      <Form.Group className="mb-5">
                        <Form.Label className="label">NFT Tier</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          className="InputField"
                          name="tier"
                          onChange={formik.handleChange}
                          value={formik.values.tier}
                        >
                          <option>Select Tier</option>
                          <option value="goat">{getTierName("goat")}</option>
                          <option value="hof">{getTierName("hof")}</option>
                          <option value="rookie">
                            {getTierName("rookie")}
                          </option>
                          <option value="vet">{getTierName("vet")}</option>
                        </Form.Select>
                        {formik.errors.tier && formik.touched.tier ? (
                          <Form.Text className="text-danger">
                            {formik.errors.tier}
                          </Form.Text>
                        ) : null}
                      </Form.Group>
                    </Col>
                  </div>
                ) : null}
              </div>
            </Col>
          </Row>
        </section>
      </Form>
    </main>
  );
};

export default AddNewGear;
