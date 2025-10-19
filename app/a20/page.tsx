'use client';

import { Box, Button, Typography, Container, Card, CardContent, Stack } from "@mui/material";
import { useState } from "react";

export default function App20() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                Deceptive Locator Challenge
              </Typography>
              {/* This button has a simple, specific class for the exercise */}
              <Button variant="contained" className="btn-submit" onClick={() => setSubmitted(true)}>
                Submit
              </Button>
              {submitted && <Typography sx={{ mt: 2, color: "green" }}>Submitted Successfully!</Typography>}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}