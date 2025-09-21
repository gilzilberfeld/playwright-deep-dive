"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
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
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        App 14 - Advanced Navigation
      </Typography>
      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px solid grey",
          borderRadius: 2,
          bgcolor: "ghostwhite",
          width: "66%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, m: 2 }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" onClick={handleClick}>
              Go to Page 2 (with delay)
            </Button>
          )}
        </Box>
      </Box>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This page demonstrates a navigation that includes a loading state.
      </Typography>
    </main>
  );
}
