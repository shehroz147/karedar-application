import axios from "axios";

// export const baseUrl = "https://7225-2400-adc5-17f-8500-a9e0-ff33-cb20-e971.in.ngrok.io/";
export const baseUrl = 'https://krayedar.herokuapp.com/'
export default axios.create({
    baseURL: baseUrl,
});
