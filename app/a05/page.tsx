'use client';

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { useState, SyntheticEvent } from "react";

export default function App5() {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [clearBothDisabled, setClearBothDisabled] = useState(true);
  const [selectBothDisabled, setSelectBothDisabled] = useState(false);

  function handleSelectBoth(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setFirstChecked(true);
    setSecondChecked(true);
    setSelectBothDisabled(true);
    setClearBothDisabled(false);
  }

  function handleClearBoth(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setFirstChecked(false);
    setSecondChecked(false);
    setSelectBothDisabled(false);
    setClearBothDisabled(true);
  }

  function handleFirst(event: SyntheticEvent<Element, Event>, checked: boolean): void {
    setFirstChecked(checked);
    setStateForButtons(checked, secondChecked);
  }

  function handleSecond(event: SyntheticEvent<Element, Event>, checked: boolean): void {
    setSecondChecked(checked);
    setStateForButtons(checked, firstChecked);
  }

  function setStateForButtons(myCheckState: boolean, other: boolean) {
    if (!other && myCheckState) {
      setClearBothDisabled(false);
      setSelectBothDisabled(false);
    }
    if (!other && !myCheckState) {
      setClearBothDisabled(true);
      setSelectBothDisabled(false);
    }
    if (other && !myCheckState) {
      setClearBothDisabled(false);
      setSelectBothDisabled(false);
    }
    if (other && myCheckState) {
      setClearBothDisabled(false);
      setSelectBothDisabled(true);
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                App 5 - Checkboxes
              </Typography>
              <FormGroup>
                <Stack direction="row" spacing={2} justifyContent="space-around">
                  <FormControlLabel control={<Checkbox checked={firstChecked} />} onChange={handleFirst} label="Check 1" />
                  <FormControlLabel control={<Checkbox checked={secondChecked} />} onChange={handleSecond} label="Check 2" />
                </Stack>
              </FormGroup>
              <Stack direction="row" spacing={2} justifyContent="space-around">
                <Button variant="contained" disabled={selectBothDisabled} onClick={handleSelectBoth}>
                  Select Both
                </Button>
                <Button variant="contained" disabled={clearBothDisabled} onClick={handleClearBoth}>
                  Clear Both
                </Button>
              </Stack>
              <Typography variant="body1" sx={{ mt: 2 }}>
                In this app, you can select either checkbox, or use the buttons to check or clear both. The state of the checkboxes affects the state of the buttons.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}