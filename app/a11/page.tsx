"use client";
import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
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
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        API & Hybrid Testing
      </Typography>

      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px solid grey",
          borderRadius: 2,
          bgcolor: "ghostwhite",
          width: "66%",
          textAlign: "center",
          mt: 4,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "text.primary" }}>
          Counter
        </Typography>
        {isLoading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Typography variant="h3" data-testid="counter-value" component="p" sx={{ color: "text.primary" }}>
            {count}
          </Typography>
        )}
        <Button
          variant="contained"
          onClick={incrementCount}
          sx={{ mt: 2 }}
          // THE FIX: The button is now disabled during the initial load OR while incrementing.
          disabled={isLoading || isIncrementing}
        >
          Increment
        </Button>
      </Box>
    </main>
  );
}
