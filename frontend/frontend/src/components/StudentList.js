// src/components/StudentList.js
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  CircularProgress,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Added this
import studentService from "../services/studentService";

const StudentList = ({ refreshTrigger }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [size] = useState(5);

  const navigate = useNavigate(); // ✅ Added this

  const fetchStudents = () => {
    setLoading(true);
    studentService
      .getStudentsWithPagination(page, size)
      .then((res) => {
        setStudents(res.data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, [refreshTrigger, page]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      studentService
        .deleteStudent(id)
        .then(() => {
          fetchStudents();
        })
        .catch((err) => {
          console.error("Error deleting student:", err);
        });
    }
  };

  const exportToCSV = () => {
    const headers = ["ID", "First Name", "Last Name", "Email", "Department"];
    const rows = students.map((s) => [
      s.id,
      s.firstName,
      s.lastName,
      s.email,
      s.department?.name || "N/A",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((value) => `"${value}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "students.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Stack direction="row" spacing={2} style={{ marginBottom: 20 }}>
        <TextField
          label="Search students"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" onClick={exportToCSV}>
          Download CSV
        </Button>
        {/* ✅ New Button for View Count */}
        <Button
          variant="contained"
          onClick={() => navigate("/count")}
          style={{ backgroundColor: "#2196f3" }} // same blue as Download CSV
        >
          View Count
        </Button>
      </Stack>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.firstName}</TableCell>
                    <TableCell>{student.lastName}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.department?.name}</TableCell>
                    <TableCell>
                      <Button
                        color="error"
                        variant="outlined"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Stack direction="row" spacing={2} style={{ marginTop: 20, justifyContent: 'center' }}>
            <Button variant="contained" disabled={page === 0} onClick={handlePrevPage}>
              Previous
            </Button>
            <Button variant="contained" onClick={handleNextPage}>
              Next
            </Button>
          </Stack>
        </>
      )}
    </>
  );
};

export default StudentList;
