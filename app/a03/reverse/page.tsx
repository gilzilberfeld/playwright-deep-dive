'use client';

import { Suspense } from "react";
import { Box, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";

function Message() {
  const searchParams = useSearchParams();
  const theInput = searchParams.get("input");
  const message = theInput
    ? `The reverse of "${theInput}" is "${theInput.split("").reverse().join("")}"`
    : 'The reverse of "null" is "llun"';

  return (
    <Typography color="primary" align="center" sx={{ m: 2 }}>
      {message}
    </Typography>
  );
}

export default function Demo3Reverse() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                Demo 3 - The Reverse
              </Typography>
              <Typography variant="h5" component="h2" color="primary" align="center" sx={{ fontWeight: 'bold' }}>
                Welcome to the Reverse page!
              </Typography>
              <Suspense>
                <Message />
              </Suspense>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this demo, clicking the button causes navigation to another page.
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
