import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8090/api/v1/customer';

export const listCustomers = () => axios.get(REST_API_BASE_URL + "/all");

export const createCustomer = (customer) => axios.post(REST_API_BASE_URL + '/add', customer);

export const getCustomerById = (id) => axios.get(REST_API_BASE_URL + '/' + id);

export const updateCustomer = (customer,id) => axios.put(REST_API_BASE_URL + '/update/' + id, customer);

export const deleteCustomerById = (id) => axios.delete(REST_API_BASE_URL + '/' + id);

