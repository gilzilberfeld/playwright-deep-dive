"use client";

import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function App17() {
  const [status, setStatus] = useState<{
    message: string;
    severity: "success" | "error";
  } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setIsUploading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Updated API path for upload
      const response = await fetch("/api/a17/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          message: `File uploaded successfully: ${result.filename}`,
          severity: "success",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error: any) {
      setStatus({ message: error.message, severity: "error" });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        File Uploads & Downloads
      </Typography>

      {isClient && (
        <>
          {/* File Upload Section */}
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
              Upload a File
            </Typography>

            <Button variant="contained" component="label" disabled={isUploading} sx={{ mb: 2 }}>
              {isUploading ? <CircularProgress size={24} /> : "Choose File"}
              <input type="file" hidden onChange={handleFileChange} />
            </Button>

            {status && (
              <Alert severity={status.severity} sx={{ mt: 2 }}>
                {status.message}
              </Alert>
            )}
          </Box>

          {/* File Download Section */}
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
              Download a File
            </Typography>
            <Button variant="contained" href="/api/a17/download" download>
              Download Text File
            </Button>
          </Box>
        </>
      )}
    </main>
  );
}
