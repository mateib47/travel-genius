import React from "react";
import { CenteredContainer } from "../../../utils";
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

const preferencesList = ["Activities", "Accommodation", "Transportation"];
const accommodationsList = ["Hotel", "Airbnb", "Hostel"];

const TravelForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numTravelers, setNumTravelers] = useState(1);
  const [preferences, setPreferences] = useState({});
  const [budget, setBudget] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate travel itinerary here
  };

  return (
    <CenteredContainer>
      <form onSubmit={handleSubmit}>
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

          <Grid item xs={5}>
            <TextField
              label="Start date"
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="End date"
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl>
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
          <Grid item xs={12}>
            <TextField
              label="Budget"
              type="number"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Generate itinerary
            </Button>
          </Grid>
        </Grid>
      </form>
    </CenteredContainer>
  );
};

export default TravelForm;
