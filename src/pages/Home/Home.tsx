import { useBuildSetsList } from "state/hooks/customHooks/builders/useBuildSetsList";
import { Box, Button, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const Home = () => {
  const buildSets = useBuildSetsList();
  const [startDate, setStartDate] = useState<Date | null>(new Date('1993-08-05'));
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleClick = () => {
    alert("click")
  }

  const validDateRange = () => {
    if (endDate === null || startDate === null) {
      return false;
    }
    return endDate < startDate;
  }

  return (
    <Box
      component="main"
      gap={4}
      sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      <Stack
        spacing={4}
        direction="row"
        sx={{ width: "500px", display: "flex", alignItems: "center" }}
      >
        <DatePicker
          label="Start Date"
          value={startDate}

          onChange={(newValue) => setStartDate(newValue)}

        />
        <Box sx={{ mx: 2 }}>to</Box>
        <DatePicker
          label="End Date"
          value={endDate}
          slotProps={{
            textField: {
              error: validDateRange(),
              helperText: validDateRange() && "End date must be after the initial"
            }
          }}
          onChange={(newValue) => setEndDate(newValue)
          }
        />
      </Stack>
      <Button
        variant="contained"
        onClick={handleClick}
        disabled={!endDate || validDateRange()}

      >
        generate
      </Button>
    </Box>
  );
};

export default Home;
