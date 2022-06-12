import axios from "axios";

const API_KEY = "EACCEC-FU99HY-M2HCGF-4UQH";
const BASIC_URL = "https://api.n2yo.com/rest/v1/satellite";

axios;

const getSatellitePositions = async (id, options) => {
  return await axios.get(
    `${BASIC_URL}/positions/${id}/${options.observerLat}/${
      options.observerLng
    }/${options.observerAlt}/${options.seconds}${getKeyQuery()}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    }
  );
};

const getVisualPasses = async (id, options) => {
  return await axios.get(
    `${BASIC_URL}/visualpasses/${id}/${options.observerLat}/${
      options.observerLng
    }/${options.observerAlt}/${options.days}/${
      options.minVisibility
    }${getKeyQuery()}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    }
  );
};

const getRadioPasses = async (id, options) => {
  return await axios.get(
    `${BASIC_URL}/radiopasses/${id}/${options.observerLat}/${
      options.observerLng
    }/${options.observerAlt}/${options.days}/${
      options.minElevetion
    }${getKeyQuery()}`,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    }
  );
};

const getTle = async (id) => {
  return await axios.get(`${BASIC_URL}/tle/${id}${getKeyQuery()}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

const getKeyQuery = () => {
  return `&apiKey=${API_KEY}`;
};

export default {
  getSatellitePositions,
  getVisualPasses,
  getRadioPasses,
  getTle,
};
