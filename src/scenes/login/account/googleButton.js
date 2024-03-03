import React from "react";
import GoogleIcon from "../../../assets/Google.svg";

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
        src={GoogleIcon}
        alt="Google Logo"
        width="30px"
        height="30px"
        style={{ marginRight: "10px" }}
      />
      Sign in with Google
    </div>
  );
}

export default GoogleSignInButton;
