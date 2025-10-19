'use client';

import { Box, Button, TextField, Container, Card, CardContent, Typography, Stack, TextareaAutosize } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function App8() {
  const [theInput, setInput] = useState("");
  const [theLog, setLog] = useState("Log");

  async function handleSend(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const data = JSON.stringify({ entry: theInput });
      await fetch("/a08/storage", { method: "POST", body: data });
      setInput("");
    } catch (error) {
      alert(error);
    }
  }

  function handleInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInput(event.target.value);
  }

  async function handleReset(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const data = JSON.stringify({ entry: "reset" });
      await fetch("/a08/storage", { method: "POST", body: data });
      setLog("");
    } catch (error) {
      alert(error);
    }
  }

  async function handleRefresh(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const theAPI = await fetch("/a08/storage");
      const theResponse = await theAPI.json();
      setLog(theResponse.theWholeLog);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 8 - Chat
              </Typography>
              <TextareaAutosize
                value={theLog}
                name="log"
                readOnly
                minRows={5}
                style={{ width: '100%', border: '1px solid black' }}
              />
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button variant="contained" onClick={handleSend} sx={{ width: '48%' }}>
                  Send
                </Button>
                <TextField id="input" label="Input" value={theInput} placeholder="Input a string" variant="outlined" onChange={handleInput} sx={{ width: '48%' }} />
              </Stack>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button variant="contained" onClick={handleReset} sx={{ width: '48%' }}>
                  Reset
                </Button>
                <Button variant="contained" onClick={handleRefresh} sx={{ width: '48%' }}>
                  Refresh
                </Button>
              </Stack>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, the input is sent to server.
              </Typography>
              <Typography variant="body1">
                When refreshing the log shows the entire collected information
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}