'use client';

import { Box, Button, TextField, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, ChangeEvent } from "react";

function PageContent() {
  const searchParams = useSearchParams();
  const firstPageText = searchParams.get("input");

  const [theInput, setInput] = useState("");
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    router.push("/a07/page3?input=" + firstPageText + theInput);
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
                App 7 - Navigation: Page 2
              </Typography>
              <Typography>From Page 1: {firstPageText}</Typography>
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

export default function App72() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}