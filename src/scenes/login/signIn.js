import React, { useState } from "react";
import { auth, provider } from "../../api/firebase";
import { signInWithPopup } from "firebase/auth";
import Signin from "../login/signInEmail";
import Home from "../../App";

import { Box, Button, Typography, Container, TextField } from "@mui/material";

import Google from '../../assets/Google.svg';
import Microsoft from '../../assets/Microsoft.svg';
import logo2 from '../../assets/logo2.svg';
import bg from '../../assets/bg.svg';

function MicrosoftSignInButton({ onClick }) {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #007bff",
    borderRadius: "8px",
    color: "#007bff",
    padding: "5px 15px",
    cursor: "pointer",
    fontSize: "17px",
    backgroundColor: "transparent",
    marginTop: "10px",
    width: "100%",
  };

  return (
    <div style={buttonStyle} onClick={onClick}>
      <img
        src={Microsoft}
        alt="Microsoft Logo"
        width="30px"
        height="30px"
        style={{ marginRight: "10px", width: "20px", height: "20px" }}
      />
      Sign in with Microsoft
    </div>
  );
}

function GoogleSignInButton({ onClick }) {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #dfdee0",
    borderRadius: "8px",
    color: "#dfdee0",
    padding: "5px 15px",
    cursor: "pointer",
    fontSize: "17px",
    backgroundColor: "transparent",
    width: "100%",
  };

  return (
    <div style={buttonStyle} onClick={onClick}>
      <img
        src={Google}
        alt="Google Logo"
        width="30px"
        height="30px"
        style={{ marginRight: "10px" }}
      />
      Sign in with Google
    </div>
  );
}

function SignIn() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((data) => {
        // Handle Google sign-in
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during Google sign-in:", error);
      });
  };

  const darkTheme = {
    backgroundColor: "rgba(113, 52, 235, 0.9)",
    color: "white", // Text color
    borderColor: "#007bff", // Accent color
  };

  const backgroundStyle = {
    backgroundImage: `url(${bg})`, // Apply the background image
    backgroundSize: "cover",
    backdropFilter: "blur(10px)", // Apply blur effect to the background
  };

  return (
    <Box style={{ ...darkTheme, height: "110vh", padding: "50px", ...backgroundStyle }}> {/* Apply dark theme and background */}
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="70vh"
          borderRadius="10px"
          padding="20px"
          boxShadow={1}
          p={3}
          style={darkTheme} // Apply dark theme styles
        >
          <img src={logo2} alt="Your Image" width="220" height="300" />
          {user ? (
            <Home />
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Signin />
              <Box display="flex" alignItems="center" width="100%" mt={3} mb={3}>
                <Box flex={1} borderBottom={1} borderColor="white" />
                <Box px={2} color="white" fontWeight="bold">
                  ou
                </Box>
                <Box flex={1} borderBottom={1} borderColor="white" />
              </Box>
              <GoogleSignInButton onClick={handleGoogleSignIn} />
              {/*<MicrosoftSignInButton onClick={MicrosoftSignInButton} /> */}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;