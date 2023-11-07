import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <form onSubmit={signIn}>
          <TextField
            type="email"
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ style: { color: 'white' } }} 
            className="custom-input"
          />
          <TextField
            type="password"
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ style: { color: 'white' } }} 
            className="custom-input"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#007bff" }}
          >
            Log In
          </Button>
        </form>
    </div>
  );
};

export default SignIn;
