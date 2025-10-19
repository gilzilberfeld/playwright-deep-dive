"use client";

import { Box, Button, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { useState } from "react";

export default function App10() {
  const [theSrc, setSrc] = useState("");

  function handleGoogle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setSrc("https://www.google.com/search?igu=1");
  }

  function handleTestingil(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setSrc("https://www.testingil.com/");
  }

  function handleWikipedia(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setSrc("https://wikipedia.com/");
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                App 10 - Change-A-Frame
              </Typography>
              <Typography variant="body1">In this app, you can change the content of the iframe</Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" onClick={handleGoogle}>
                  Google
                </Button>
                <Button variant="contained" onClick={handleTestingil}>
                  TestinGil
                </Button>
                <Button variant="contained" onClick={handleWikipedia}>
                  Wikipedia
                </Button>
              </Stack>
              {theSrc && <iframe src={theSrc} width="100%" height="600" title="The-Frame" style={{ border: "none" }} />}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
