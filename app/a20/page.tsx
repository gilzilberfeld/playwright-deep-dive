"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function App20() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        Deceptive Locator Challenge
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
        {/* This button has a simple, specific class for the exercise */}
        <Button variant="contained" className="btn-submit" onClick={() => setSubmitted(true)}>
          Submit
        </Button>
        {submitted && <Typography sx={{ mt: 2, color: "green" }}>Submitted Successfully!</Typography>}
      </Box>
    </main>
  );
}
