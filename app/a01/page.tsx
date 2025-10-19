'use client';

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField, Container, Card, CardContent, Typography, Stack } from "@mui/material";

export default function App1() {
  const [isEnabled, setEnabled] = useState(false);
  const [theInput, setInput] = useState("");
  const [theResult, setResult] = useState("Waiting...");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const inputLength = event.target.value.length;
    if (inputLength === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
    setInput(event.target.value);
  }

  function handleReverse(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const reverse = theInput.split("").reverse().join("");
    setResult(reverse);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 1 - Simple Test
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <TextField id="input" label="Input" placeholder="Input a string" variant="outlined" onChange={handleInputChange} sx={{ width: '50%' }} />
                <TextField
                  id="result"
                  label="Result"
                  value={theResult}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ width: '50%' }}
                />
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button disabled={!isEnabled} variant="contained" onClick={handleReverse}>
                  Reverse!
                </Button>
              </Box>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, clicking the button reverses the input string.
              </Typography>
              <Typography variant="body1">
                The test navigates to this page, fills the data in the input box (which enables the button), and validates the result.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}