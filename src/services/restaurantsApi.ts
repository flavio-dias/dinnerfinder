import axios from "axios"


const restaurantsApi = axios.create({
    baseURL: 'https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants'
});

export default restaurantsApi;