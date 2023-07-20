import { v4 as uuidv4 } from "uuid";
import * as mime from "mime-types";
import axios from "axios";
import AxiosRequest from "../AxiosRequest";

export const uploadFileToS3 = async (path, file) => {
  const ext = mime.extension(file.type);
  const { data } = await AxiosRequest.post("auth/get-signed-url", {
    file: `${path}/${uuidv4()}.${ext}`,
    contentType: file.type,
  });
  const axiosInstance = axios.create();
  await axiosInstance.put(data.data.signedUrl, file, {
    headers: { "Content-Type": file.type },
  });

  return data.data.url;
};
