/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Row, Col, Form, Accordion, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import AxiosRequest from "../../AxiosRequest";
import * as Yup from "yup";
import { uploadImage } from "../../utils/pinata";
import { mintNfts } from "../../utils/contract";
import { getEthPrice } from "../../utils/etherScan";
import { toast } from "react-toastify";
import PlayerSelect from "./Components/PlayerSelect";
import Cropper from "react-easy-crop";

const validationSchema = Yup.object().shape({
  collectionname: Yup.string().required("Required"),
  collectiondescription: Yup.string().required("Required"),
  ethereumprice: Yup.number()
    .min(0, "price must be greter then 0")
    .required("Requried"),
  priceusd: Yup.number()
    .min(0, "price must be greter then 0")
    .required("requried"),
  pcccoin: Yup.number()
    .min(1, "pcccoin must be greter then 0")
    .required("requried"),
  sale: Yup.string().required("Required"),
  // image: Yup.string().required("Requried"),
  quantity: Yup.number()
    .min(1, "quantity must be greter then 0")
    .max(50, "quantity must be less then 50")
    .required("requried"),
  nfttitle: Yup.string().required("Requried"),
  nftkeywords: Yup.string().required("Requried"),
  nftdescription: Yup.string().required("Requried"),
  tier: Yup.string().required("Requried"),
  collection: Yup.string().required("Requried"),
  currency: Yup.string().required("Requried"),
  level: Yup.string().required("Requried"),
  category: Yup.string().required("Requried"),

  Position: Yup.string().required("Requried"),
  Number: Yup.string().required("Requried"),
  // G: Yup.string().required("Requried"),
  // GS: Yup.string().required("Requried"),
  // Rec: Yup.string().required("Requried"),
  // YDS: Yup.string().required("Requried"),
  // YBC: Yup.string().required("Requried"),
  playerId: Yup.string().required("Requried"),
  // playerstats: Yup.array().of(
  //   Yup.object().shape({
  //     value: Yup.string().required("This field is required."),
  //   })
  // ),
});

const AddNFTCollection = () => {
  const nftRef = useRef(null);
  const [tier] = useState([
    { key: "rookie", value: "Rookie" },
    { key: "vet", value: "Veteran" },
    { key: "hof", value: "HOF" },
    { key: "goat", value: "GOAT" },
  ]);
  const [currency] = useState([
    { key: "ethereum", value: "Ethereum" },
    // { key: "fiat", value: "Fiat" },
  ]);
  const [category] = useState([{ key: "category1", value: "Category 1" }]);
  const [level] = useState([
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
  ]);
  const [collection] = useState([
    { key: "football_nft", value: "FootBall NFT" },
  ]);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  // const [isUploadingImage, setIsUploadingImage] = useState(false);

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
    try {
      const blob = await generateBlobUrl(image, croppedArea);
      const previewUrl = window.URL.createObjectURL(blob);
      setPreviewImage(previewUrl);
      // setIsUploadingImage(true);
      // const url = await uploadImage(blob, formik.values.collectionname);
      // setIsUploadingImage(false);
      // formik.setFieldValue("image", `https://gateway.pinata.cloud/ipfs/${url}`);
    } catch (error) {
      toast.error(
        "Something went wrong during upload image to pinata. Please try again."
      );
    }
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
      image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
      image.src = url;
    });
  };

  const getRadianAngle = (degreeValue) => {
    return (degreeValue * Math.PI) / 180;
  };

  const onSelectFile = (event) => {
    // setPreviewImage(false);
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

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await AxiosRequest.get("/admin/attribute/all");
  //       setTier(
  //         data.data.data.attributes.find((item) => item._id == "Tier")
  //           .attributes
  //       );
  //       setCurrency(
  //         data.data.data.attributes.find((item) => item._id == "Currency")
  //           ?.attributes
  //       );
  //       setCategory(
  //         data.data.data.attributes.find((item) => item._id == "Category")
  //           .attributes
  //       );
  //       setLevel(
  //         data.data.data.attributes.find((item) => item._id == "Level")
  //           .attributes
  //       );
  //       setCollection(
  //         data.data.data.attributes.find((item) => item._id == "Collection")
  //           .attributes
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  //   useEffect(() => {
  //     formik.setFieldValue("tier", tier[0]?.value);
  //     formik.setFieldValue("collection", collection[0]?.value);
  //     formik.setFieldValue("category", category[0]?.value);
  //     formik.setFieldValue("level", level[0]?.value);
  //     formik.setFieldValue("currency", currency[0]?.value);
  //   }, [tier, collection, currency, level, category]);
  const formik = useFormik({
    initialValues: {
      collectionname: "",
      collectiondescription: "",
      ethereumprice: 0,
      priceusd: 0,
      pcccoin: 0,
      sale: "0",
      startdate: "",
      enddate: "",
      saleprice: 0,
      usdprice: 0,
      image: "",
      tier: "",
      quantity: 0,
      type: "",
      collection: "",
      category: "",
      level: "",
      currency: "",
      nfttitle: "",
      nftkeywords: "",
      nftdescription: "",
      Position: "",
      Number: "",
      G: "",
      GS: "",
      Rec: "",
      YDS: "",
      YBC: "",
      playerId: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!image) return toast.error("Please select image.");
      const publicKey = localStorage.getItem("publicKey");
      if (publicKey !== null && publicKey !== "") {
        setSubmitting(true);
        const { data } = await AxiosRequest.post(
          "admin/collection/check-collection",
          {
            playerId: values.playerId,
            category: values.category,
            tier: values.tier,
          }
        );
        if (data.data) {
          values["collectionname"] = data.data.name;
          values["collectiondescription"] = data.data.description;
          values["image"] = data.data.imageUrl;
          values["oldCollection"] = data.data._id;
          values["ethereumprice"] = data.data.mintEtherPrice;
          values["priceusd"] = data.data.mintUsdPrice;
          values["category"] = data.data.category;
        } else {
          delete values.oldCollection;
          const blob = await generateBlobUrl(image, croppedArea);
          const url = await uploadImage(blob, formik.values.collectionname);
          values["image"] = `https://gateway.pinata.cloud/ipfs/${url}`;
        }
        await mintNfts(values, setSubmitting);
      } else {
        toast.error("Please connect wallet.");
      }
    },
  });

  useEffect(() => {
    if (formik.values.ethereumprice) {
      getEthPrice().then((response) => {
        const { usd } = response;
        formik.setFieldValue(
          "priceusd",
          Number(formik.values.ethereumprice) * usd
        );
      });
    } else {
      formik.setFieldValue("priceusd", 0);
    }
  }, [formik.values.ethereumprice]);

  useEffect(() => {
    if (formik.values.saleprice) {
      getEthPrice().then((response) => {
        const { usd } = response;

        formik.setFieldValue("usdprice", Number(formik.values.saleprice) * usd);
      });
    }
  }, [formik.values.saleprice]);

  return (
    <main className="adminPageMainCommon">
      {/* ------- */}
      <Form onSubmit={formik.handleSubmit}>
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">Add NFT Collection</h2>

          {formik.isSubmitting ? (
            <div style={{ color: "white" }}>
              <Spinner animation="border" size="sm" className="me-2" /> Please
              wait...
            </div>
          ) : (
            <button className="btnBlue btnEarnWith ms-3" type="submit">
              Add New NFT
            </button>
          )}
        </div>
        <section className="adminCommanPageSection w-100">
          <Row>
            <Col lg={9}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Player Details</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={12}>
                        <Form.Group className="mb-4" controlId="collectionName">
                          <Form.Label className="label">
                            Name Of Player
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="collectionname"
                            placeholder="Hollybood Brown"
                            className="InputField"
                            onChange={formik.handleChange}
                            value={formik.values.collectionname}
                          />
                          {formik.errors.collectionname &&
                          formik.touched.collectionname ? (
                            <Form.Text className="text-danger">
                              {formik.errors.collectionname}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group controlId="collectionDescription">
                          <Form.Label className="label">
                            Add Description
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="collectiondescription"
                            as="textarea"
                            className="InputField"
                            style={{ height: "250px" }}
                            onChange={formik.handleChange}
                            value={formik.values.collectiondescription}
                          />
                          {formik.errors.collectiondescription &&
                          formik.touched.collectiondescription ? (
                            <Form.Text className="text-danger">
                              {formik.errors.collectiondescription}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Player Stat</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={4} md={6} sm={12}>
                        <Form.Label className="label">Player</Form.Label>
                        <PlayerSelect
                          value={formik.values.playerId}
                          onChange={(value, info) => {
                            formik.setFieldValue(`playerId`, value);
                            formik.setFieldValue("Position", info.Position);
                            formik.setFieldValue("Number", info.Number);
                            formik.setFieldValue("collectionname", info.Name);
                          }}
                          placeholder="Select Player"
                          name={`playerId`}
                        />
                        {formik.errors.playerId && formik.touched.playerId ? (
                          <div className="invalid-feedback d-block mrgLeft_27">
                            {formik.errors.playerId}
                          </div>
                        ) : null}
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">Position</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Position"
                            name={`Position`}
                            onChange={formik.handleChange}
                            value={formik.values.Position}
                            className="InputField"
                            readOnly
                          />
                          {formik.errors.Position && formik.touched.Position ? (
                            <div className="invalid-feedback d-block mrgLeft_27">
                              {formik.errors.Position}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Number"
                            name={`Number`}
                            onChange={formik.handleChange}
                            value={formik.values.Number}
                            className="InputField"
                            readOnly
                          />
                          {formik.errors.Number && formik.touched.Number ? (
                            <div className="invalid-feedback d-block mrgLeft_27">
                              {formik.errors.Number}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">G</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="G"
                            name={`G`}
                            onChange={formik.handleChange}
                            value={formik.values.G}
                            className="InputField"
                            // readOnly
                          />
                          {formik.errors.G && formik.touched.G ? (
                            <div className="invalid-feedback d-block mrgLeft_27">
                              {formik.errors.G}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">GS</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="GS"
                            name={`GS`}
                            onChange={formik.handleChange}
                            value={formik.values.GS}
                            className="InputField"
                            // readOnly
                          />
                          {formik.errors.GS && formik.touched.GS ? (
                            <div className="invalid-feedback d-block mrgLeft_27">
                              {formik.errors.GS}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">Rec</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Rec"
                            name={`Rec`}
                            onChange={formik.handleChange}
                            value={formik.values.Rec}
                            className="InputField"
                            // readOnly
                          />
                          {formik.errors.Rec && formik.touched.Rec ? (
                            <div className="invalid-feedback d-block mrgLeft_27">
                              {formik.errors.Rec}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">YDS</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="YDS"
                            name={`YDS`}
                            onChange={formik.handleChange}
                            value={formik.values.YDS}
                            className="InputField"
                            // readOnly
                          />
                          {formik.errors.YDS && formik.touched.YDS ? (
                            <div className="invalid-feedback d-block mrgLeft_27">
                              {formik.errors.YDS}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4">
                          <Form.Label className="label">YBC</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="YBC"
                            name={`YBC`}
                            onChange={formik.handleChange}
                            value={formik.values.YBC}
                            className="InputField"
                            // readOnly
                          />
                          {formik.errors.YBC && formik.touched.YBC ? (
                            <div className="invalid-feedback d-block mrgLeft_27">
                              {formik.errors.YBC}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Col>

                      {/* <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">Posistion</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="wr"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">Number</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="15"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">G</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="14"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">GS</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="wr"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">Tgt</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="71"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">Rec</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="46"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">YDS</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="584"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">ID</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="24"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">YBC</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="358"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col> */}
                    </Row>
                    <button
                      className="btnGrayBordered-sm btnEarnWith mt-4"
                      disabled
                    >
                      Add More Stat
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4" controlId="ethereumPrice">
                          <Form.Label className="label">
                            Ethereum Price
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="ethereumprice"
                            value={formik.values.ethereumprice}
                            onChange={async (e) => {
                              console.log(e.target.value);
                              formik.setFieldValue(
                                "ethereumprice",
                                e.target.value
                              );
                            }}
                            placeholder="0.45"
                            className="InputField"
                          />
                        </Form.Group>
                        {formik.errors.ethereumprice &&
                        formik.touched.ethereumprice ? (
                          <Form.Text className="text-danger">
                            {formik.errors.ethereumprice}
                          </Form.Text>
                        ) : null}
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4" controlId="priceUsd">
                          <Form.Label className="label">
                            Price In USD
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="priceusd"
                            value={formik.values.priceusd}
                            disabled
                            onChange={async (e) => {
                              console.log(e.target.value);
                              formik.setFieldValue("priceusd", e.target.value);
                            }}
                            placeholder="20.00"
                            className="InputField"
                          />
                          {formik.errors.priceusd && formik.touched.priceusd ? (
                            <Form.Text className="text-danger">
                              {formik.errors.priceusd}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Form.Group className="mb-4" controlId="pccCoin">
                          <Form.Label className="label">
                            Personal Corner Coins
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="pcccoin"
                            value={formik.values.pcccoin}
                            onChange={formik.handleChange}
                            placeholder="1"
                            className="InputField"
                          />
                          {formik.errors.pcccoin && formik.touched.pcccoin ? (
                            <Form.Text className="text-danger">
                              {formik.errors.pcccoin}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="3">
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
                            />
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
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">
                              Stock status
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="In Stock"
                              className="InputField"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <Form.Group className="mb-4">
                            <Form.Label className="label">
                              Sold Individually
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="No"
                              className="InputField"
                            />
                            <Form.Text className="text-muted">
                              {" "}
                              Limit purchases to 1 item per order{" "}
                            </Form.Text>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item> */}
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Sale</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={"auto"}>
                        <Form.Group className="mb-4" controlId="saleType">
                          <Form.Label className="label">Sale</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className="InputField"
                            name="sale"
                            value={formik.values.sale}
                            onChange={formik.handleChange}
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Form.Select>
                          {formik.errors.sale && formik.touched.sale ? (
                            <Form.Text className="text-danger">
                              {formik.errors.sale}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>

                      <Col lg={"auto"}>
                        <Form.Group className="mb-4" controlId="startDate">
                          <Form.Label className="label">Start Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="startdate"
                            value={formik.values.startdate}
                            onChange={formik.handleChange}
                            placeholder="01-Sep-2022"
                            className="InputField datepickerInput"
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={"auto"}>
                        <Form.Group className="mb-4" controlId="endDate">
                          <Form.Label className="label">End Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="enddate"
                            value={formik.values.enddate}
                            onChange={formik.handleChange}
                            placeholder="10-Sep-2022"
                            className="InputField datepickerInput"
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={"auto"}>
                        <Form.Group className="mb-4" controlId="salePrice">
                          <Form.Label className="label">Sale Price</Form.Label>
                          <Form.Control
                            type="text"
                            name="saleprice"
                            value={formik.values.saleprice}
                            onChange={formik.handleChange}
                            placeholder="Ethereum Price"
                            className="InputField"
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={"auto"}>
                        <Form.Group className="mb-4" controlId="usdPrice">
                          <Form.Label className="label">USD Price</Form.Label>
                          <Form.Control
                            type="text"
                            name="usdprice"
                            value={formik.values.usdprice}
                            onChange={formik.handleChange}
                            placeholder="USD Price"
                            className="InputField"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Upload Images and Videos</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={12} md={12} sm={12}>
                        <Form.Group className="mb-4">
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

                              {/* <div className="text-center mt-5">
                                {isUploadingImage ? (
                                  <button
                                    type="button"
                                    className="btnBlue-sm btnEarnWith"
                                    disabled
                                  >
                                    <Spinner size="sm" className="me-2" />{" "}
                                    Please wait...
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    className="btnBlue-sm btnEarnWith"
                                    onClick={confirmAndUploadToPinata}
                                  >
                                    Confirm and Upload
                                  </button>
                                )}
                              </div> */}
                            </Fragment>
                          ) : (
                            <Form.Label
                              className="label w-100"
                              htmlFor="upload-button"
                            >
                              <div className="mb-3">Add Featured Image</div>
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
                                      onClick={() => nftRef.current?.click()}
                                      className="btnBlue-sm btnEarnWith mt-4"
                                    >
                                      Upload
                                    </button>
                                  </div>
                                  <input
                                    type="file"
                                    id="upload-button"
                                    ref={nftRef}
                                    // className="inputFile"
                                    style={{ display: "none" }}
                                    name="image"
                                    onChange={onSelectFile}
                                  />
                                </div>
                              </div>
                            </Form.Label>
                          )}

                          {formik.status && formik.status.image ? (
                            <Form.Text className="text-danger">
                              {formik.status.image}
                            </Form.Text>
                          ) : null}
                          {formik.errors.image && formik.touched.image ? (
                            <Form.Text className="text-danger">
                              {formik.errors.image}
                            </Form.Text>
                          ) : null}
                        </Form.Group>
                      </Col>

                      {/* <Col lg={6} md={6} sm={12}>
                          <Form.Label className="label">
                            Add Product Gallery
                          </Form.Label>
                          <Row>
                            <div className="col-6  mb-4">
                              <div className="uploadedImgBox">
                                <img
                                  src={IconMetroImage}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-6  mb-4">
                              <div className="uploadedImgBox">
                                <img
                                  src={IconMetroImage}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-6  mb-4">
                              <div className="uploadedImgBox">
                                <img
                                  src={IconMetroImage}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-6  mb-4">
                              <div className="uploadedImgBox">
                                <img
                                  src={IconMetroImage}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Row>
                          <div>
                            <InputGroup className="mb-3">
                              <Form.Control
                                className="InputField"
                                placeholder="Add Product Gallery Images"
                                aria-label="Add Product Gallery Images"
                                aria-describedby="basic-addon2"
                              />
                              <Button
                                variant="outline-secondary"
                                id="button-addon2"
                                className="btnBlue-sm btnEarnWith"
                                style={{ height: "53px" }}
                              >
                                Upload
                              </Button>
                            </InputGroup>
                          </div>
                        </Col> */}
                    </Row>

                    {/* <div>
                        <Form.Label className="label">Add Video</Form.Label>
                        <InputGroup className="mb-4">
                          <Form.Control
                            className="InputField"
                            placeholder="Enter url or upload form library"
                            aria-label=""
                            aria-describedby="basic-addon2"
                          />
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            className="btnBlue-sm btnEarnWith"
                            style={{ height: "53px" }}
                          >
                            Upload
                          </Button>
                        </InputGroup>
                      </div> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="p-4">
                {formik.isSubmitting ? (
                  <div
                    style={{
                      color: "white",
                      fontSize: "24px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Spinner animation="border" size="lg" className="me-2" />{" "}
                    Please wait...
                  </div>
                ) : (
                  <button type="submit" className="btnBlue-sm btnEarnWith">
                    Add NFT
                  </button>
                )}
              </div>
            </Col>

            <Col lg={3}>
              <div className="addAttributesPart h-100">
                {/* <div className="heading pb-0 d-none">Select Template</div>
                <div className="detailsPart borderBottom d-none">
                  <Col lg={12}>
                    <Form.Group className="">
                      <Form.Select
                        aria-label="Default select example"
                        className="InputField"
                      >
                        <option>Collection</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </div> */}
                <div className="heading borderBottom">Add Attributes</div>
                <div className="detailsPart borderBottom">
                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Tier</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        className="InputField"
                        name="tier"
                        value={formik.values.tier}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select Tier</option>
                        {tier.map((mitem, index) => {
                          return (
                            <option value={mitem.key} key={index}>
                              {mitem.value}
                            </option>
                          );
                        })}
                      </Form.Select>
                      {formik.errors.tier && formik.touched.tier ? (
                        <Form.Text className="text-danger">
                          {formik.errors.tier}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Quantity</Form.Label>
                      <Form.Control
                        type="text"
                        name="quantity"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        placeholder="quantity"
                        className="InputField"
                      />
                      {formik.errors.quantity && formik.touched.quantity ? (
                        <Form.Text className="text-danger">
                          {formik.errors.quantity}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Type</Form.Label>
                      <Form.Control
                        type="text"
                        name="type"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        placeholder="Multiple Edition"
                        className="InputField"
                      />
                    </Form.Group>
                    {formik.errors.type && formik.touched.type ? (
                      <Form.Text className="text-danger">
                        {formik.errors.type}
                      </Form.Text>
                    ) : null}
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Collection</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        className="InputField"
                        value={formik.values.collection}
                        name="collection"
                        onChange={formik.handleChange}
                      >
                        <option value="">Select Collection</option>
                        {collection.map((mitem, index) => {
                          return (
                            <option value={mitem.key} key={index}>
                              {mitem.value}
                            </option>
                          );
                        })}
                      </Form.Select>
                      {formik.errors.collection && formik.touched.collection ? (
                        <Form.Text className="text-danger">
                          {formik.errors.collection}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Category</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        className="InputField"
                        value={formik.values.category}
                        name="category"
                        onChange={formik.handleChange}
                      >
                        <option value="">Select Category</option>
                        {category.map((mitem, index) => {
                          return (
                            <option value={mitem.key} key={index}>
                              {mitem.value}
                            </option>
                          );
                        })}
                      </Form.Select>
                      {formik.errors.category && formik.touched.category ? (
                        <Form.Text className="text-danger">
                          {formik.errors.category}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Level</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        className="InputField"
                        value={formik.values.level}
                        name="level"
                        onChange={formik.handleChange}
                      >
                        <option value="">Select Level</option>
                        {level.map((mitem, index) => {
                          return (
                            <option value={mitem.key} key={index}>
                              {mitem.value}
                            </option>
                          );
                        })}
                      </Form.Select>
                      {formik.errors.level && formik.touched.level ? (
                        <Form.Text className="text-danger">
                          {formik.errors.level}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Currency</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        className="InputField"
                        value={formik.values.currency}
                        name="currency"
                        onChange={formik.handleChange}
                      >
                        <option value="">Select Currency</option>
                        {currency.map((mitem, index) => {
                          return (
                            <option value={mitem.key} key={index}>
                              {mitem.value}
                            </option>
                          );
                        })}
                      </Form.Select>
                      {formik.errors.currency && formik.touched.currency ? (
                        <Form.Text className="text-danger">
                          {formik.errors.currency}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>
                </div>

                <div className="heading borderBottom">Add Meta Description</div>
                <div className="detailsPart">
                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Meta Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="nfttitle"
                        value={formik.values.nfttitle}
                        onChange={formik.handleChange}
                        placeholder="Hollywood Brown"
                        className="InputField"
                      />
                      {formik.errors.nfttitle && formik.touched.nfttitle ? (
                        <Form.Text className="text-danger">
                          {formik.errors.nfttitle}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">Meta Keywords</Form.Label>
                      <Form.Control
                        type="text"
                        as="textarea"
                        name="nftkeywords"
                        value={formik.values.nftkeywords}
                        onChange={formik.handleChange}
                        placeholder="NFT"
                        className="InputField"
                        style={{ height: "150px" }}
                      />
                      {formik.errors.nftkeywords &&
                      formik.touched.nftkeywords ? (
                        <Form.Text className="text-danger">
                          {formik.errors.nftkeywords}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-5">
                      <Form.Label className="label">
                        Meta Description
                      </Form.Label>
                      <Form.Control
                        type="text"
                        as="textarea"
                        name="nftdescription"
                        value={formik.values.nftdescription}
                        onChange={formik.handleChange}
                        className="InputField"
                        style={{ height: "150px" }}
                      />
                      {formik.errors.nftdescription &&
                      formik.touched.nftdescription ? (
                        <Form.Text className="text-danger">
                          {formik.errors.nftdescription}
                        </Form.Text>
                      ) : null}
                    </Form.Group>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Form>

      {/* -------- */}
    </main>
  );
};

export default AddNFTCollection;
