import React, { useState } from "react";
import { auth, provider } from "../../api/firebase";
import { signInWithPopup } from "firebase/auth";
import Signin from "../login/signInEmail";
import Home from "../../App";

import { Box, Container } from "@mui/material";

import Google from '../../assets/Google.svg';
import Logo from '../../assets/Logo.svg';

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
      .then((result) => {
        const user = result.user;
        setUser(user); // Set the user state upon successful sign-in
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during Google sign-in:", error);
      });
  };
  

  return (
    <Box style={{  minHeight: "100vh"}}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <img src={Logo} alt="Your Image"  />
          {user ? (
            <Home />
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Signin />
              <Box display="flex" alignItems="center" width="100%" mt={3} mb={3}>
                <Box flex={1} borderBottom={1} borderColor="white" />
                <Box px={2} color="white" fontWeight="bold">
                  or
                </Box>
                <Box flex={1} borderBottom={1} borderColor="white" />
              </Box>
              <GoogleSignInButton onClick={handleGoogleSignIn} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
