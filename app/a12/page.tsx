'use client';

import { Box, Button, TextField, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

export default function App12() {
  const router = useRouter();
  const [name, setName] = useState('');

  async function handleAdd(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    await fetch("/a12/storage", {
      method: "POST",
      body: JSON.stringify({ newName: name })
    });
    router.push('/a12/thankyou?name=' + name);
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setName(event.target.value);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 12 - API Exercise
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button variant="contained" onClick={handleAdd} sx={{ width: '48%' }}>
                  Store Name
                </Button>
                <TextField label="Name" variant="outlined" onChange={handleNameChange} value={name} sx={{ width: '48%' }} />
              </Stack>
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