"use client";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function App19() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = () => {
    setSubmittedName(name);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        Simple Form
      </Typography>
      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px solid grey",
          borderRadius: 2,
          bgcolor: "ghostwhite",
          width: "66%",
          textAlign: "center",
          mt: 4,
        }}
      >
        <TextField label="Your Name" value={name} onChange={(e) => setName(e.target.value)} variant="outlined" sx={{ mb: 2 }} />
        <Button variant="contained" onClick={handleSubmit} data-testid="submit-button">
          Submit
        </Button>
        {submittedName && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Hello, {submittedName}!
          </Alert>
        )}
      </Box>
    </main>
  );
}
