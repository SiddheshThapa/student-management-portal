// src/components/AddDepartment.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import departmentService from "../services/departmentService";

const AddDepartment = ({ onDepartmentAdded }) => {
  const [deptName, setDeptName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    departmentService
      .addDepartment({ name: deptName })
      .then(() => {
        setDeptName("");
        onDepartmentAdded();
      })
      .catch((err) => console.error("Error adding department:", err));
  };

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Add Department
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              label="Department Name"
              value={deptName}
              onChange={(e) => setDeptName(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ height: "100%" }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddDepartment;
