import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import departmentService from "../services/departmentService";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = () => {
    departmentService
      .getAllDepartments()
      .then((res) => setDepartments(res.data))
      .catch((err) => console.error("Error fetching departments", err));
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Delete this department?")) {
      departmentService
        .deleteDepartment(id)
        .then(fetchDepartments)
        .catch((err) => console.error("Error deleting department", err));
    }
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <Typography variant="h5" gutterBottom>
        Department List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments.map((dept) => (
              <TableRow key={dept.id}>
                <TableCell>{dept.id}</TableCell>
                <TableCell>{dept.name}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(dept.id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DepartmentList;
