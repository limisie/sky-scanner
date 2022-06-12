const queryString = require("query-string");
const moment = require("moment");
const axios = require("axios");

const getTimelineURL = "https://api.tomorrow.io/v4/timelines";
const apikey = "clzwOZylBY0vLCYteU0KVO046qDqfYRz";
const fields = [
  "precipitationIntensity",
  "precipitationType",
  "windSpeed",
  "windGust",
  "windDirection",
  "temperature",
  "temperatureApparent",
  "cloudCover",
  "cloudBase",
  "cloudCeiling",
  "weatherCode",
];
const units = "metric";
const timesteps = ["current", "1h", "1d"];

const timezone = "Poland";

const getWeather = async (location, startTime, endTime) => {
  startTime =
    startTime || moment.utc(moment.utc()).add(0, "minutes").toISOString();
  endTime = endTime || moment.utc(moment.utc()).add(1, "days").toISOString();

  const getTimelineParameters = queryString.stringify(
    {
      apikey,
      location,
      fields,
      units,
      timesteps,
      startTime,
      endTime,
      timezone,
    },
    { arrayFormat: "comma" }
  );

  const response = await axios.get(
    getTimelineURL + "?" + getTimelineParameters
  );

  return response.data;
};

export default { getWeather };
