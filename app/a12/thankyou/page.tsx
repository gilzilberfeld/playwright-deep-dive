'use client';

import { Box, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PageContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  function getThankyouMessage() {
    return `Thank you, ${name}!`;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                App 12 - API Exercise
              </Typography>
              <Typography variant="h5" component="h2">
                {getThankyouMessage()}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, you can store a name. When submitting, it calls an API to store the name, and you will see a thank you page.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default function App12ThankYou() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}