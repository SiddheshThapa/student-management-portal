// src/components/Login.js
import React from "react";
import { Button, TextField, Typography, Divider, Box } from "@mui/material";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f8f9fa"
    >
      <Box
        p={5}
        borderRadius={6}
        bgcolor="white"
        boxShadow={6}
        textAlign="center"
        width={450}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Student Management Portal
        </Typography>

        <Typography variant="body2" mb={3}>
          You are just a few steps away from managing students!
        </Typography>

        <Button
          onClick={handleGoogleLogin}
          startIcon={<FaGoogle />}
          fullWidth
          variant="contained"
          style={{
            backgroundColor: "#4285F4",
            color: "white",
            marginBottom: "16px",
            fontWeight: "bold",
          }}
        >
          Sign in with Google
        </Button>

        <Divider>OR</Divider>

        <Box mt={2}>
          <TextField
            fullWidth
            label="Email address"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
          />

          <Button
            fullWidth
            variant="contained"
            style={{
              marginTop: "16px",
              backgroundColor: "#4caf50",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </Box>

        {/* Forgot Password */}
        <Typography
          variant="body2"
          mt={2}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Forgot password?
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
