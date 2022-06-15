import axios from "axios";

 //export const baseUrl = "https://7892-2400-adc5-17f-8500-f995-9654-4357-d17f.in.ngrok.io";
export const baseUrl = 'https://krayedar.herokuapp.com/'
export default axios.create({
    baseURL: baseUrl,
});
