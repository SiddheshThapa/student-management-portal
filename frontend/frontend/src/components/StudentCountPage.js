// src/components/StudentCountPage.js
import React, { useEffect, useState } from "react";
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer, Button } from "@mui/material";
import studentService from "../services/studentService";
import { useNavigate } from "react-router-dom";

const StudentCountPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    studentService.getStudentCountPerDepartment()
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching student count:", err));
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>Student Count Per Department</Typography>
      <Button onClick={() => navigate("/")} variant="outlined" color="primary" style={{ marginBottom: 16 }}>
        Back to Dashboard
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>Student Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.departmentName}</TableCell>
                <TableCell>{item.studentCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentCountPage;
