import axios from 'axios';

const httpClient = axios.create();

httpClient.interceptors.request.use((request) => {
    request.baseURL = process.env.REACT_APP_BASE_URL;

    const token = sessionStorage.getItem("token");

    if (token)
        request.headers.set("Authorization", "Bearer " + token);

    return request;
})

export default httpClient;