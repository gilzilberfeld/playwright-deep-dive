"use client";

import { Alert, Box, Button, CircularProgress, Typography, Container, Card, CardContent, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function App11() {
  const [count, setCount] = useState<number | null>(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  // THE FIX: Add a new loading state specifically for the increment action.
  const [isIncrementing, setIsIncrementing] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetchCount();
  }, []);

  const fetchCount = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/a11/counter");
      if (!response.ok) {
        throw new Error("Failed to load counter");
      }
      const data = await response.json();
      setCount(data.count);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const incrementCount = async () => {
    // THE FIX: Set the incrementing state to true at the start.
    setIsIncrementing(true);
    setError(null);
    try {
      const response = await fetch("/api/a11/counter", { method: "POST", body: JSON.stringify({}) });
      if (!response.ok) {
        throw new Error("Failed to increment count");
      }
      const data = await response.json();
      setCount(data.count);
    } catch (err: any) {
      setError(err.message);
    } finally {
      // THE FIX: Set the incrementing state to false at the end.
      setIsIncrementing(false);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                API & Hybrid Testing
              </Typography>
              <Typography variant="h6" component="h2">
                Counter
              </Typography>
              {isLoading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <Typography variant="h3" data-testid="counter-value" component="p">
                  {count}
                </Typography>
              )}
              <Button variant="contained" onClick={incrementCount} disabled={isLoading || isIncrementing}>
                Increment
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
