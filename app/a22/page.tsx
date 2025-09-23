"use client";
import { Alert, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function App21() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    setShowSuccess(true);
    // The success message will disappear after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  if (!isClient) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        The Fleeting Element Challenge
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
        <Button variant="contained" onClick={handleClick}>
          Show Success Message
        </Button>
        {showSuccess && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Action was successful!
          </Alert>
        )}
      </Box>
    </main>
  );
}
