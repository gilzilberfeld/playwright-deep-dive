'use client';

import { Alert, Box, CircularProgress, List, ListItem, ListItemText, Typography, Container, Card, CardContent, Stack } from "@mui/material";
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
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom>
                API Mocking: List States
              </Typography>
              <Typography variant="h6" component="h2">
                Product List
              </Typography>
              {isLoading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : products.length > 0 ? (
                <List>
                  {products.map((product) => (
                    <ListItem key={product.id}>
                      <ListItemText primary={product.name} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography color="text.secondary">No products found.</Typography>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}