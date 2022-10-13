import axios from "axios";

const API_URL = "/api/requests/";

//create new request

const createRequest = async (requestData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, requestData, config);

  return response.data;
};

const requestService = {
  createRequest,
};

export default requestService;
