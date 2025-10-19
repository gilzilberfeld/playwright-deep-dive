'use client';

import { Box, Button, Typography, Container, Card, CardContent, Stack } from "@mui/material";
import Link from "next/link";

export default function App14Page2() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                Destination Page
              </Typography>
              <Typography variant="h6" component="h2">
                You have arrived!
              </Typography>
              <Link href="/a14" passHref>
                <Button variant="contained">Go Back</Button>
              </Link>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}