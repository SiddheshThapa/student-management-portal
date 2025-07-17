import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import axios from "axios";
import studentService from "../services/studentService";

const EditStudentModal = ({ open, onClose, student, onStudentUpdated }) => {
  const [formData, setFormData] = useState({ ...student });
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setFormData({ ...student });
    axios
      .get("http://localhost:8080/api/departments")
      .then((res) => setDepartments(res.data))
      .catch((err) => console.error("Error fetching departments", err));
  }, [student]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    studentService
      .updateStudent(formData.id, formData)
      .then(() => {
        onStudentUpdated();
        onClose();
      })
      .catch((err) => console.error("Error updating student:", err));
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Student</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Department"
              name="departmentId"
              value={formData.department?.id || formData.departmentId || ""}
              onChange={handleChange}
              fullWidth
            >
              {departments.map((dept) => (
                <MenuItem key={dept.id} value={dept.id}>
                  {dept.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditStudentModal;
