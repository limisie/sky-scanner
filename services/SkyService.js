import axios from "axios";

export default class SkyService {
  constructor() {
    this.API_KEY = process.env.N2YO_API_KEY;
    this.BASIC_URL = process.env.N2YO_BASIC_URL;
  }

  async getSatellitePositions(id, options) {
    return await axios.get(
      `${this.BASIC_URL}/positions/${id}/${options.observerLat}/${
        options.observerLng
      }/${options.observerAlt}/${options.seconds}${this.getKeyQuery()}`
    );
  }

  async getVisualPasses(id, options) {
    return await axios.get(
      `${this.BASIC_URL}/visualpasses/${id}/${options.observerLat}/${
        options.observerLng
      }/${options.observerAlt}/${options.days}/${
        options.minVisibility
      }${this.getKeyQuery()}`
    );
  }

  async getRadioPasses(id, options) {
    return await axios.get(
      `${this.BASIC_URL}/radiopasses/${id}/${options.observerLat}/${
        options.observerLng
      }/${options.observerAlt}/${options.days}/${
        options.minElevetion
      }${this.getKeyQuery()}`
    );
  }

  async getTle(id) {
    return await axios.get(`${this.BASIC_URL}/tle/${id}/${this.getKeyQuery()}`);
  }

  getKeyQuery() {
    return `&apiKey=${this.API_KEY}`;
  }
}
