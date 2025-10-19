'use client';

import { Box, Button, MenuItem, Select, SelectChangeEvent, TextField, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { ReactNode, useState } from "react";

export default function App6() {
  type SelectValue = '' | '1' | '2' | '3' | '4' | '5' | undefined;

  const [selectedItem, setSelectItem] = useState<SelectValue>('1');
  const [isDisabled, setDisabled] = useState(true);
  const [theInput, setTheInput] = useState('');
  const [theResult, setTheResult] = useState('1');

  function handleSelect(event: SelectChangeEvent<any>, child: ReactNode): void {
    setSelectItem(event.target.value as SelectValue);
    setTheResult(event.target.value);
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const value = event.target.value;
    setTheInput(value);
    setDisabled(value.length === 0);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const theNumber = parseInt(theInput);
    if (isNaN(theNumber) || theNumber < 1 || theNumber > 5) {
      setTheResult('Not Found');
      return;
    }
    setSelectItem(theInput as SelectValue);
    setTheResult(theInput);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 6 - Drop Down List
              </Typography>
              <Stack spacing={2} alignItems="center">
                <Select value={selectedItem} label="Item List" onChange={handleSelect} sx={{ width: '50%' }}>
                  <MenuItem value={'1'}>Item 1</MenuItem>
                  <MenuItem value={'2'}>Item 2</MenuItem>
                  <MenuItem value={'3'}>Item 3</MenuItem>
                  <MenuItem value={'4'}>Item 4</MenuItem>
                  <MenuItem value={'5'}>Item 5</MenuItem>
                </Select>
                <Stack direction="row" spacing={2} sx={{ width: '100%' }} justifyContent="center">
                  <TextField label="Select Item" value={theInput} onChange={handleTextChange} sx={{ width: '50%' }} />
                  <Button variant="contained" disabled={isDisabled} onClick={handleClick}>
                    Select
                  </Button>
                </Stack>
                <Typography>Selected: Item {theResult}</Typography>
              </Stack>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, you can select items from the drop-down or by entering the value in the text box and clicking the button. The selected item is displayed below.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}