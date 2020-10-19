import Axios from "axios";

export const getRequest = async (endpoint, config) => {
  return await Axios.get(process.env.REACT_APP_API_ENDPOINT + endpoint, config ? config : {});
};

export const postRequest = async (endpoint, data, config) => {
  return await Axios.post(
    process.env.REACT_APP_API_ENDPOINT + endpoint,
    data,
    config ? config : {}
  );
};
