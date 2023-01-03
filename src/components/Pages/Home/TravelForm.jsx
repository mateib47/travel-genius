import React from "react";
import { CenteredContainer, CenteredGrid } from "../../../utils";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Checkbox,
  RadioGroup,
  Box,
} from "@mui/material";
import { Grid } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const preferencesList = ["Activities", "Accommodation", "Transportation"];
const accommodationsList = ["Hotel", "Airbnb", "Hostel"];

const TravelForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [numTravelers, setNumTravelers] = useState(1);
  const [preferences, setPreferences] = useState({});
  const [budget, setBudget] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate travel itinerary here
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <CenteredContainer>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <FormControl sx={{ display: "flex" }}>
                  <InputLabel htmlFor="destination">Destination</InputLabel>
                  <Select
                    native
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                    inputProps={{
                      name: "destination",
                      id: "destination",
                    }}
                  >
                    <option value="" />
                    <option value="paris">Paris</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="new-york">New York</option>
                    <option value="sydney">Sydney</option>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <DesktopDatePicker
                  label="Start date"
                  inputFormat="MM/DD/YYYY"
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={4}>
                <DesktopDatePicker
                  label="End date"
                  inputFormat="MM/DD/YYYY"
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor="num-travelers">
                    Number of travelers
                  </InputLabel>
                  <Select
                    native
                    value={numTravelers}
                    onChange={(event) => setNumTravelers(event.target.value)}
                    inputProps={{
                      name: "num-travelers",
                      id: "num-travelers",
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" sx={{ display: "flex" }}>
                  {preferencesList.map((p) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={preferences.activities}
                          onChange={() =>
                            setPreferences((prev) => ({
                              ...prev,
                              activities: !prev.activities,
                            }))
                          }
                          name="activities"
                          color="primary"
                        />
                      }
                      label={p}
                    />
                  ))}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="accommodation type"
                    name="accommodation-type"
                    value={preferences.accommodationType}
                    onChange={(event) =>
                      setPreferences((prev) => ({
                        ...prev,
                        accommodationType: event.target.value,
                      }))
                    }
                  >
                    {accommodationsList.map((a) => (
                      <FormControlLabel
                        value={a.toLocaleLowerCase}
                        control={<Radio />}
                        label={a}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Budget"
                  type="number"
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                />
              </Grid>
              <CenteredGrid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Generate itinerary
                </Button>
              </CenteredGrid>
            </Grid>
          </div>
        </Box>
      </CenteredContainer>
    </LocalizationProvider>
  );
};

export default TravelForm;
