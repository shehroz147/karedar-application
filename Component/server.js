import axios from "axios";

 export const baseUrl = "https://6a60-2400-adc5-17f-8500-3136-e9c6-93be-a4cc.in.ngrok.io/";
//export const baseUrl = 'https://krayedar.herokuapp.com/'
export default axios.create({
    baseURL: baseUrl,
});
