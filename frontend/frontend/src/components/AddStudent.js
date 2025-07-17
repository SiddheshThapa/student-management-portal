// src/components/AddStudent.js
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import studentService from "../services/studentService";
import axios from "axios";

const AddStudent = ({ onStudentAdded }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    departmentId: "",
  });

  const [errors, setErrors] = useState({});
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/departments")
      .then(res => setDepartments(res.data))
      .catch(err => console.error("Error fetching departments", err));
  }, []);

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName || formData.firstName.length < 2) {
      tempErrors.firstName = "First name must be at least 2 characters";
    }
    if (!formData.lastName || formData.lastName.length < 2) {
      tempErrors.lastName = "Last name must be at least 2 characters";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.departmentId) {
      tempErrors.departmentId = "Department is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      ...formData,
      department: { id: formData.departmentId }
    };

    studentService.addStudent(payload)
      .then(() => {
        setFormData({ firstName: "", lastName: "", email: "", departmentId: "" });
        onStudentAdded();
      })
      .catch(err => console.error("Failed to add student:", err));
  };

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h6" gutterBottom>Add Student</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="departmentId"
              label="Department"
              value={formData.departmentId}
              onChange={handleChange}
              select
              fullWidth
              error={!!errors.departmentId}
              helperText={errors.departmentId}
            >
              {departments.map((dept) => (
                <MenuItem key={dept.id} value={dept.id}>{dept.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddStudent;
