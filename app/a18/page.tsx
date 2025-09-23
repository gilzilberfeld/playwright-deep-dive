"use client";
import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function App18() {
  const [isClient, setIsClient] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Introduce a slight delay to simulate a real-world scenario
    setTimeout(() => {
      setIsChecked(event.target.checked);
    }, 500);
  };

  // By returning null until isClient is true, we prevent the hydration mismatch.
  if (!isClient) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        State-Based Debugging Challenge
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
        <FormControlLabel control={<Checkbox onChange={handleCheckboxChange} />} label="I agree to the terms and conditions" sx={{ color: "text.primary" }} />
        <Button variant="contained" disabled={!isChecked} sx={{ mt: 2, display: "block", mx: "auto" }}>
          Submit
        </Button>
      </Box>
    </main>
  );
}
