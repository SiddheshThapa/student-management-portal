// src/services/studentService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/students";

const getAllStudents = () => {
  return axios.get(API_BASE_URL);
};


const addStudent = (student) => {
  return axios.post("http://localhost:8080/api/students", student);
};


const deleteStudent = (id) => {
  return axios.delete(`http://localhost:8080/api/students/${id}`);
};

const getStudentCountPerDepartment = () => {
  return axios.get(`${API_BASE_URL}/count-by-department`);
};


const updateStudent = (id, student) => {
  return axios.put(`${API_BASE_URL}/${id}`, student);
};


const getStudentsWithPagination = (page, size) => {
  return axios.get(`http://localhost:8080/api/students/page?page=${page}&size=${size}`);
};



export default {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  getStudentCountPerDepartment,
  getStudentsWithPagination
};
