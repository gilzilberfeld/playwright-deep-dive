'use client';

import { Box, Button, TextField, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, ChangeEvent } from "react";

function PageContent() {
  const searchParams = useSearchParams();
  const secondPageText = searchParams.get("input");

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    // Functionality not implemented
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    // Functionality not implemented
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 7 - Navigation: Page 3
              </Typography>
              <Typography>From Page 2: {secondPageText}</Typography>
              <Stack spacing={2} alignItems="center">
                <TextField label="Input" variant="outlined" onChange={handleInputChange} sx={{ width: '66%' }} />
                <Button variant="contained" onClick={handleClick}>
                  Go to page 3
                </Button>
              </Stack>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, clicking the buttons propagate the information from page to page.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default function App73() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}