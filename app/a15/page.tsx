"use client";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

export default function App15() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        Visual Regression Testing
      </Typography>

      <Card sx={{ maxWidth: 345, mt: 4 }}>
        <CardMedia sx={{ height: 140 }} image="https://i.imgflip.com/a6qy8t.jpg" title="featured product" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Awesome Cat
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is our featured cat of the week. It's designed to be perfect for your needs. Don't be afraid of it.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </main>
  );
}
