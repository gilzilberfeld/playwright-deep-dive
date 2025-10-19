'use client';

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { useRouter } from 'next/navigation';

export default function App3() {
  const [theInput, setInput] = useState("");
  const router = useRouter();

  function handleReverse(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    router.push('/a03/reverse?input=' + theInput);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setInput(event.target.value);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 3 - Navigation
              </Typography>
              <Stack spacing={2} alignItems="center">
                <TextField label="Input" variant="outlined" onChange={handleInputChange} sx={{ width: '66%' }} />
                <Button variant="contained" onClick={handleReverse}>
                  Go to reverse page
                </Button>
              </Stack>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, clicking the button causes navigation to another page.
              </Typography>
              <Typography variant="body1">
                The test checks the URL and text of the next page, check url.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}