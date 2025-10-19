'use client';

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField, Container, Card, CardContent, Typography, Stack } from "@mui/material";

export default function App4() {
  const [boxValue, setBoxValue] = useState("");

  function handleClear(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setBoxValue("");
  }

  function handleBoxChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setBoxValue(event.target.value);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 4 - Locators
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <TextField label="Clone Box" placeholder="box1" variant="outlined" onChange={handleBoxChange} value={boxValue} sx={{ width: '30%' }} />
                <TextField label="Clone Box" placeholder="box2" variant="outlined" onChange={handleBoxChange} value={boxValue} sx={{ width: '30%' }} />
                <TextField label="Clone Box" placeholder="box3" variant="outlined" onChange={handleBoxChange} value={boxValue} sx={{ width: '30%' }} />
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={handleClear}>
                  Clear
                </Button>
              </Box>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, what you type gets cloned to the other boxes.
              </Typography>
              <Typography variant="body1">
                Clicking the button clears the boxes.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}