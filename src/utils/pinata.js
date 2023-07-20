import axios from "axios";

const headers = {
  pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
  pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
  "Content-Type": "multipart/form-data",
};
const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

const jsontoFile = (data, filename) => {
  var dataurl = `data:application/json;base64,${btoa(JSON.stringify(data))}`;
  return dataURLtoFile(dataurl, filename);
};

export const uploadImage = async (file, collectionName) => {
  try {
    const _formData = new FormData();
    _formData.append("file", file, `${collectionName}_Assets`);
    // const { data } = await axios({
    //   method: "post",
    //   url: process.env.REACT_APP_PINATA_PIN_FILE_TO_IPFS_URL,
    //   data: _formData,
    //   headers,
    // });
    const { data } = await axios.post(
      process.env.REACT_APP_PINATA_PIN_FILE_TO_IPFS_URL,
      _formData,
      { headers }
    );
    return data.IpfsHash;
  } catch (err) {
    console.log("upload image error", err);
    throw err;
  }
};

export const uploadFile = async (metadata, quantity, collectionName) => {
  try {
    console.log("MetaData", metadata);
    console.log("collectionName", collectionName);
    const jFormData = new FormData();
    for (let i = 1; i <= quantity; i++) {
      jFormData.append(
        "file",
        jsontoFile(metadata, `${i}.json`),
        `${collectionName}_Metadata/${i}`
      );
    }

    const jResponse = await axios({
      method: "post",
      url: process.env.REACT_APP_PINATA_PIN_FILE_TO_IPFS_URL,
      data: jFormData,
      headers,
    });
    console.log("jResponse", jResponse);
    return jResponse.data.IpfsHash;
  } catch (err) {
    console.log("upload fil error", err);
  }
};
