'use client';

import { Box, Container, Card, CardContent, Typography, Stack } from "@mui/material";

export default function App9() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                App 9 - Frames
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, an iframe contains App1 (a01).
              </Typography>
              <iframe src="/a01" width="400" height="600" title="The Frame" style={{ border: 'none' }} />
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}