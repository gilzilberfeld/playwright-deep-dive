"use client";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, TextField } from "@mui/material";

export default function App16() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        Visual Testing with Dynamic Content
      </Typography>

      <Card sx={{ maxWidth: 345, mt: 4 }}>
        <CardMedia sx={{ height: 140 }} image="https://i.imgflip.com/a6qy8t.jpg" title="featured cat" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Customizable Cat
          </Typography>
          <TextField label="Cat Description" variant="outlined" defaultValue="This cat's description can be edited by the user." multiline rows={3} fullWidth sx={{ mt: 2 }} />
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </main>
  );
}
