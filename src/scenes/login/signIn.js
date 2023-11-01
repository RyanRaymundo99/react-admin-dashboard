import React, { useEffect, useState } from "react";
import { auth, provider } from "../../api/firebase";
import { signInWithPopup } from "firebase/auth";
import { Box, Button, Typography, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Home from '../../App'

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
          userEmail === "greenpeachweb@gmail.com"
        ) {
          setValue(userEmail);
          localStorage.setItem("email", userEmail);
        } else {
          // Unauthorized user, sign them out
          auth.signOut().then(() => {
            alert("Email não aturizado, contate o seu Master para adquirir acesso");
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during sign in:", error);
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
      >
        <Typography variant="h4" gutterBottom>
          Welcome to CVL Capital
        </Typography>
        {value ? (
          <Home />
        ) : (
          <Box>
            {!loading && ( // Render the button only when not loading
              <Button
                variant="contained"
                color="primary"
                startIcon={<AccountCircleIcon />}
                onClick={handleClick}
              >
                Sign in with Google
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default SignIn;
