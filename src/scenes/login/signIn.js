import React, { useEffect, useState } from "react";
import { auth, provider } from "../../api/firebase";
import { signInWithPopup } from "firebase/auth";
import { Box, Button, Typography, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Home from "../../App";

import Google from '../../assets/Google.svg'

function GoogleSignInButton({ onClick }) {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    border: "2px solid #4889f4", // Add the blue border
    padding: "5px 15px",
    cursor: "pointer",
    borderRadius: "100px",
    color: "#4889f4",
    fontWeight: "bold",
    fontSize: "17px"
  };

  return (
    <div
      style={buttonStyle}
      onClick={onClick}
    >
      <img
        src={Google} // Replace with the path to your Google logo SVG
        alt="Google Logo"
        width="30"
        height="30"
        style={{ marginRight: "10px" }}
      />
      Sign in with Google
    </div>
  );
}

function SignIn() {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setValue(user.email);
    }
  }, []);

  const handleClick = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((data) => {
        const userEmail = data.user.email;

        // Check if the user's email matches the approved email addresses
        if (
          userEmail === "rian981265@gmail.com" ||
          userEmail === "layrton.lbss@gmail.com"||
          userEmail === "Cainan.carvalho1@oultook.com"||
          userEmail === "cainan.carvalho199601@gmail.com"||
          userEmail === "vladsonluizsilva@gmail.com"||
          userEmail === "Vladsonluizsilva@hotmail.com"||
        ) {
          setValue(userEmail);
          localStorage.setItem("email", userEmail);
        } else {
          // Unauthorized user, sign them out
          auth.signOut().then(() => {
            alert("Email não autorizado, contate o seu Master para adquirir acesso");
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during sign-in:", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        borderRadius="50px"
      >
        <Typography variant="h4" gutterBottom>
          Welcome to CVL Capital
        </Typography>
        {value ? (
          <Home />
        ) : (
          <Box>
            {!loading && ( // Render the button only when not loading
              <GoogleSignInButton onClick={handleClick} />
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default SignIn;
