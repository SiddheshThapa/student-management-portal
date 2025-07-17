import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/departments";

const getAllDepartments = () => {
  return axios.get(API_BASE_URL);
};

const addDepartment = (department) => {
  return axios.post(API_BASE_URL, department);
};

const deleteDepartment = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};

export default {
  getAllDepartments,
  addDepartment,
  deleteDepartment,
};
