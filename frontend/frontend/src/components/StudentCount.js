// src/components/StudentCountPage.js
import React, { useEffect, useState } from "react";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";
import studentService from "../services/studentService";

const StudentCountPage = () => {
  const [counts, setCounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    studentService
      .getStudentCountPerDepartment()
      .then((res) => {
        setCounts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching student counts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <div style={{ marginTop: 40 }}>
      <Typography variant="h5" gutterBottom>
        Student Count Per Department
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>Student Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {counts.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.departmentName}</TableCell>
                <TableCell>{row.studentCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentCountPage;
