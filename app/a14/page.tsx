"use client";

import { Box, Button, CircularProgress, Typography, Container, Card, CardContent, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function App14() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // We use useEffect to ensure this logic only runs on the client side
  // to avoid Next.js hydration errors.
  useEffect(() => {
    // If we are in the loading state, simulate a network delay
    if (loading) {
      const timer = setTimeout(() => {
        router.push("/a14/page2");
      }, 1000); // 1-second delay

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [loading, router]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                App 14 - Advanced Navigation
              </Typography>
              {loading ? (
                <CircularProgress />
              ) : (
                <Button variant="contained" onClick={handleClick}>
                  Go to Page 2 (with delay)
                </Button>
              )}
              <Typography variant="body1" sx={{ mt: 2 }}>
                This page demonstrates a navigation that includes a loading state.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
