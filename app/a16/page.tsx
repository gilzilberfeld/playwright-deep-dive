'use client';

import { Card, CardActions, CardContent, CardMedia, Button, Typography, TextField, Container, Box } from "@mui/material";

export default function App16() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardMedia sx={{ height: 140 }} image="https://i.imgflip.com/a6qy8t.jpg" title="featured cat" />
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Visual Testing with Dynamic Content
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Customizable Cat
            </Typography>
            <TextField
              label="Cat Description"
              variant="outlined"
              defaultValue="This cat's description can be edited by the user."
              multiline
              rows={3}
              fullWidth
              sx={{ mt: 2 }}
            />
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}