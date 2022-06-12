import axios from 'axios';

export default class GoogleService {
    constructor() {
        this.API_KEY = process.env.GOOGLE_API_KEY;
        this.BASIC_URL = process.env.GOOGLE_BASIC_URL;
    }
    
    async getLocationName(latitude, longitude) {
        return await axios.get(
            `${this.BASIC_URL}/geocode/json?address=${latitude},${longitude}&key=${this.API_KEY}`
        );
    }
}