import React, { useState } from "react";
import { Typography, FormControl, TextField, Button, Box } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      validateEmail(email) &&
      message.trim() !== ""
    );
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailMessage = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;
    window.open(
      `mailto:akeemmckenzie@hotmail.com?subject=Contact%20Form&body=${encodeURIComponent(
        emailMessage
      )}`
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffcc",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ marginTop: "10%" }}>
        Contact Me
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ width: "250%", marginBottom: "15px" }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl sx={{ width: "250%", marginBottom: "15px" }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={!validateEmail(email) && email !== ""}
          />
        </FormControl>
        <FormControl sx={{ width: "250%", marginBottom: "15px" }}>
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormControl>
        <Box mt={2} sx={{ marginBottom: "150%" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isFormValid()}
          >
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Contact;
