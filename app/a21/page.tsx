"use client";
import { Alert, Box, CircularProgress, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
}

export default function App21() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/a21/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Typography variant="h4" component="h1" gutterBottom>
        API Mocking: List States
      </Typography>

      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px solid grey",
          borderRadius: 2,
          bgcolor: "ghostwhite",
          width: "66%",
          mt: 4,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "text.primary", textAlign: "center" }}>
          Product List
        </Typography>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : products.length > 0 ? (
          <List>
            {products.map((product) => (
              <ListItem key={product.id}>
                <ListItemText primary={product.name} sx={{ color: "text.primary" }} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography sx={{ textAlign: "center", color: "text.secondary" }}>No products found.</Typography>
        )}
      </Box>
    </main>
  );
}
