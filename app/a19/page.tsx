'use client';

import { Alert, Box, Button, TextField, Typography, Container, Card, CardContent, Stack } from "@mui/material";
import { useState } from "react";

export default function App19() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = () => {
    setSubmittedName(name);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                Simple Form
              </Typography>
              <TextField label="Your Name" value={name} onChange={(e) => setName(e.target.value)} variant="outlined" />
              <Button variant="contained" onClick={handleSubmit} data-testid="submit-button">
                Submit
              </Button>
              {submittedName && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Hello, {submittedName}!
                </Alert>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}