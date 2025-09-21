import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function App14Page2() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        Destination Page
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
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "text.primary" }}>
          You have arrived!
        </Typography>
        <Link href="/a14" passHref>
          {/* Changed variant to "contained" for consistency */}
          <Button variant="contained">Go Back</Button>
        </Link>
      </Box>
    </main>
  );
}
