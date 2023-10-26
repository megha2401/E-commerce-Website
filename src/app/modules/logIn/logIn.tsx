import React, { useState } from "react";
import "./logIn.css";
import Popup from "reactjs-popup";
import {
  FormControl,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Link,
} from "@mui/material";

interface AuthData {
  email: string;
  password: any;
}
interface LoginFormProps {
  onClose: () => void;
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose, onLogin }) => {
  const [formData, setFormData] = useState<AuthData>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (
      formData.email === storedEmail &&
      formData.password === storedPassword
    ) {
      alert("Login successful!");
      onLogin();
      onClose();
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleSignUp = () => {
    const { email, password } = formData;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Sign up successful! You can now log in.");
  };

  return (
    <Popup open>
      <Grid className="overlay">
        <Container maxWidth="sm" className="form-container">
          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button className="close" onClick={onClose}>
              Close
            </button>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <form className="form" onSubmit={handleFormSubmit}>
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <Typography variant="body1" align="right">
                  <Link href="/forgot-password" variant="body2">
                    Forgot Password?
                  </Link>
                </Typography>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Box mt={2}>
                <Typography variant="body2" align="center">
                  Don't have an account? <Link href="/signup">Sign Up </Link>
                </Typography>
              </Box> */}
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Container>
      </Grid>
    </Popup>
  );
};

export default LoginForm;
