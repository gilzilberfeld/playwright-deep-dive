"use client";

import * as React from "react";
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, Tabs, Tab } from "@mui/material";
import Link from "next/link";

interface PageLink {
  href: string;
  title: string;
  description: string;
}

const basicPages: PageLink[] = [
  { href: "/a01", title: "a01 - Simple Test", description: "Basic assertions." },
  { href: "/a02", title: "a02 - Dynamic Element", description: "Waiting for elements to appear." },
  { href: "/a03", title: "a03 - Navigation", description: "Form input and interaction." },
  { href: "/a04", title: "a04 - Locators", description: "Handling links that open new tabs." },
  { href: "/a05", title: "a05 - Checkboxes", description: "Interacting with select elements." },
  { href: "/a06", title: "a06 - Drop Down List", description: "Interacting with content inside an iframe." },
  { href: "/a07", title: "a07 - Navigation: Page 1", description: "Basic multi-page navigation." },
  { href: "/a11", title: "a11 - API & Hybrid Testing", description: "A simple UI that interacts with an API." },
  { href: "/a12", title: "a12 - API Exercise", description: "A basic e-commerce flow." },
];

const advancedPages: PageLink[] = [
  { href: "/a14", title: "a14 - Advanced Navigation", description: "An advanced navigation scenario with a loading indicator." },
  { href: "/a15", title: "a15 - Visual Regression Testing", description: "A static component card for basic snapshot testing." },
  { href: "/a16", title: "a16 - Visual Testing with Dynamic Content", description: "A component with editable text for testing snapshot masking." },
  { href: "/a17", title: "a17 - File Uploads & Downloads", description: "A page for testing file uploads and downloads." },
  { href: "/a18", title: "a18 - State-Based Debugging Challenge", description: "A page with a checkbox that enables a button after a delay." },
  { href: "/a19", title: "a19 - Simple Form", description: "A page that fetches and displays a list of items from an API." },
  { href: "/a20", title: "a20 - Deceptive Locator Challenge", description: "A simple page with a tricky class name for a debugging exercise." },
  { href: "/a21", title: "a21 - API Mocking: List States", description: "A page with a success message that appears and then disappears." },
  { href: "/a22", title: "a22 - The Fleeting Element Challenge", description: "A page with a success message that appears and then disappears." },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const PageCard: React.FC<{ link: PageLink }> = ({ link }) => (
  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
    <Card sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {link.title}
        </Typography>
        <Typography>{link.description}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} href={link.href} size="small">
          Go to Page
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Playwright Deep Dive Workshop
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
        Test Application Catalog
      </Typography>

      <Box sx={{ width: "100%", mt: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="Page Groups" textColor="inherit">
            {/* Note: The order is "Advanced" (index 0) then "Basic" (index 1) to match your code */}
            <Tab label="Advanced" {...a11yProps(0)} />
            <Tab label="Basic" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={3}>
            {advancedPages.map((page) => (
              <PageCard key={page.href} link={page} />
            ))}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid container spacing={3}>
            {basicPages.map((page) => (
              <PageCard key={page.href} link={page} />
            ))}
          </Grid>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
