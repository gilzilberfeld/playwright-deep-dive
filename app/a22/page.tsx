"use client";

import { Alert, Box, Button, Typography, Container, Card, CardContent, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function App22() {
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
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                The Fleeting Element Challenge
              </Typography>
              <Button variant="contained" onClick={handleClick}>
                Show Success Message
              </Button>
              {showSuccess && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Action was successful!
                </Alert>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
