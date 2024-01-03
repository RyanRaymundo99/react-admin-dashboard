import React, { useState } from "react";
import { auth, provider } from "../../api/firebase";
import { signInWithPopup } from "firebase/auth";
import Signin from "../login/signInEmail";
import Home from "../../App";

import { Box, Container } from "@mui/material";

import Google from '../../assets/Google.svg';
import logo2 from '../../assets/logo2.svg';
import bg from '../../assets/bg.svg';

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
    backgroundColor: "rgba(13, 39, 82, 0.9)",
    color: "white",
    borderColor: "#007bff",
  };

  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backdropFilter: "blur(10px)",
    paddingY: "100px"
  };

  const containerStyle = {
    padding: "20px",
    boxShadow: 1,
    ...darkTheme,
  };

  const logoStyle = {
    width: "60%", // Adjust the width as needed
    maxWidth: "200px", // Set a maximum width for the logo
    height: "auto", // Maintain aspect ratio
    marginBottom: "20px", // Add some margin at the bottom
  };


  return (
    <Box style={{ ...darkTheme, minHeight: "100vh", ...backgroundStyle }}>
      {/* Container with added padding for tablets and larger devices */}
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          {...containerStyle}
        >
          {/* Logo with adjusted styles */}
          <img src={logo2} alt="Your Image" style={logoStyle} />
          {user ? (
            <Home />
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* Sign-in component */}
              <Signin />
              {/* Divider */}
              <Box display="flex" alignItems="center" width="100%" mt={3} mb={3}>
                <Box flex={1} borderBottom={1} borderColor="white" />
                <Box px={2} color="white" fontWeight="bold">
                  or
                </Box>
                <Box flex={1} borderBottom={1} borderColor="white" />
              </Box>
              {/* Google Sign-in button */}
              <GoogleSignInButton onClick={handleGoogleSignIn} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
