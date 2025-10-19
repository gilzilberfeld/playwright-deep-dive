'use client';

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField, Container, Card, CardContent, Typography, Stack } from "@mui/material";

let message: string;
export default function App2() {
  const [errorVisible, setErrorVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleCheck(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (firstName.length === 0 && lastName.length === 0) {
      message = "Both values are missing";
      setErrorVisible(true);
    } else if (firstName.length === 0) {
      message = "First name is missing";
      setErrorVisible(true);
    } else if (lastName.length === 0) {
      message = "Last name is missing";
      setErrorVisible(true);
    }
  }

  function handleFirstNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setFirstName(event.target.value);
    setErrorVisible(false);
  }

  function handleLastNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setLastName(event.target.value);
    setErrorVisible(false);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 2 - Dynamic Element
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <TextField label="First name" variant="outlined" onChange={handleFirstNameChange} sx={{ width: '50%' }} />
                <TextField label="Last name" variant="outlined" onChange={handleLastNameChange} sx={{ width: '50%' }} />
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={handleCheck}>
                  Check
                </Button>
              </Box>
              {errorVisible && (
                <Typography color="error" align="center" sx={{ fontWeight: 'bold' }}>
                  {message}
                </Typography>
              )}
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, clicking the button checks that both boxes are not empty.
              </Typography>
              <Typography variant="body1">
                The test navigates to this page, clicks on the button, checks that the error is displayed.
              </Typography>
              <Typography variant="body1">
                Then it types to clear the error and checks it disappeared.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}