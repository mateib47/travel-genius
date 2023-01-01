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
        <Box sx={{ display: "flex" }}>
          <TextField
            label="Start date"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <TextField
            label="End date"
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
          <FormControl>
            <InputLabel htmlFor="num-travelers">Number of travelers</InputLabel>
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
        </Box>

        <FormControl component="fieldset" sx={{display:'flex'}}>
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
            label="Activities"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.accommodation}
                onChange={() =>
                  setPreferences((prev) => ({
                    ...prev,
                    accommodation: !prev.accommodation,
                  }))
                }
                name="accommodation"
                color="primary"
              />
            }
            label="Accommodation"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.transportation}
                onChange={() =>
                  setPreferences((prev) => ({
                    ...prev,
                    transportation: !prev.transportation,
                  }))
                }
                name="transportation"
                color="primary"
              />
            }
            label="Transportation"
          />
        </FormControl>
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
            sx={{display:'flex'}}
          >
            <FormControlLabel value="hotel" control={<Radio />} label="Hotel" />
            <FormControlLabel
              value="airbnb"
              control={<Radio />}
              label="Airbnb"
            />
            <FormControlLabel
              value="hostel"
              control={<Radio />}
              label="Hostel"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Budget"
          type="number"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Generate itinerary
        </Button>
      </form>
    </CenteredContainer>
  );
};

export default TravelForm;
