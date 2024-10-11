import axios from "../api/axios";

const REST_API_BASE_URL = 'http://localhost:8090/api/v1/auth';

export const signUpCustomer = (registerReq) => axios.post(REST_API_BASE_URL + '/register', registerReq);

export const logInCustomer = (authenticateReq) => axios.post(REST_API_BASE_URL + '/logIn', authenticateReq);