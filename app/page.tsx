'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Tab, Tabs, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const advancedContent = [
    { href: '/a14', title: 'a14 - Advanced Navigation', description: 'An advanced navigation scenario with a loading indicator.' },
    { href: '/a15', title: 'a15 - Visual Regression Testing', description: 'A static component card for basic snapshot testing.' },
    { href: '/a16', title: 'a16 - Visual Testing with Dynamic Content', description: 'A component with editable text for testing snapshot masking.' },
    { href: '/a17', title: 'a17 - File Uploads & Downloads', description: 'A page for testing file uploads and downloads.' },
    { href: '/a18', title: 'a18 - State-Based Debugging Challenge', description: 'A page with a checkbox that enables a button after a delay.' },
    { href: '/a19', title: 'a19 - Simple Form', description: 'A page that fetches and displays a list of items from an API.' },
    { href: '/a20', title: 'a20 - Deceptive Locator Challenge', description: 'A simple page with a tricky class name for a debugging exercise.' },
    { href: '/a21', title: 'a21 - API Mocking: List States', description: 'A page with a success message that appears and then disappears.' },
];

const basicContent = [
    { href: '/a01', title: 'a01 - Simple Test', description: 'Basic assertions.' },
    { href: '/a02', title: 'a02 - Dynamic Element', description: 'Waiting for elements to appear.' },
    { href: '/a03', title: 'a03 - Navigation', description: 'Form input and interaction.' },
    { href: '/a04', title: 'a04 - Locators', description: 'Handling links that open new tabs.' },
    { href: '/a05', title: 'a05 - Checkboxes', description: 'Interacting with select elements.' },
    { href: '/a06', title: 'a06 - Drop Down List', description: 'Interacting with content inside an iframe.' },
    { href: '/a07', title: 'a07 - Navigation: Page 1', description: 'Basic multi-page navigation.' },
    { href: '/a11', title: 'a11 - API & Hybrid Testing', description: 'A simple UI that interacts with an API.' },
    { href: '/a12', title: 'a12 - API Exercise', description: 'A basic e-commerce flow.' },
];

export default function HomePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Advanced" />
          <Tab label="Basic" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {advancedContent.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.href}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} href={item.href} size="small">Go to Page</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {basicContent.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.href}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} href={item.href} size="small">Go to Page</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}