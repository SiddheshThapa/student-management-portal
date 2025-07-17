import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";

import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import AddDepartment from "./components/AddDepartment";
import DepartmentList from "./components/DepartmentList";
import StudentCountPage from "./components/StudentCountPage";
import Login from "./components/Login";

function App() {
  const [refreshDept, setRefreshDept] = useState(false);
  const [refreshStudent, setRefreshStudent] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("authenticated");
    if (loggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem("authenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <Router>
      <Container>
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Student Management Portal
          </Typography>

          <Routes>
            <Route
              path="/login"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
            <Route
              path="/login/success"
              element={<LoginSuccessPage onLoginSuccess={handleLoginSuccess} />}
            />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <>
                    <Button onClick={handleLogout} variant="outlined" color="error" style={{ marginBottom: "10px" }}>
                      Logout
                    </Button>
                    <AddStudent onStudentAdded={() => setRefreshStudent(!refreshStudent)} />
                    <StudentList refreshTrigger={refreshStudent} />
                    <AddDepartment onDepartmentAdded={() => setRefreshDept(!refreshDept)} />
                    <DepartmentList key={refreshDept} />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/count"
              element={isAuthenticated ? <StudentCountPage /> : <Navigate to="/login" />}
            />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

function LoginSuccessPage({ onLoginSuccess }) {
  const navigate = useNavigate();

  useEffect(() => {
    // When user is redirected to /login/success after Google login
    onLoginSuccess();
    navigate("/");
  }, [navigate, onLoginSuccess]);

  return <div>Logging in...</div>; // temporary page
}

export default App;
