"use client";

import { Box, Button, Checkbox, FormControlLabel, Typography, Container, Card, CardContent, Stack } from "@mui/material";
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
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                State-Based Debugging Challenge
              </Typography>
              <FormControlLabel control={<Checkbox onChange={handleCheckboxChange} />} label="I agree to the terms and conditions" />
              <Button variant="contained" disabled={!isChecked}>
                Submit
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
