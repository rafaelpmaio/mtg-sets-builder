import { Box, Button, FormControl, FormHelperText, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { generateAndSaveSetsList } from "utils/generateAndSaveSetsList ";


export default function DateRangeSelector() {
    const buildSets = generateAndSaveSetsList();

    const [startDate, setStartDate] = useState<Date | null>(new Date('1993-08-05'));
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleClick = () => {
        buildSets();
    }

    const validDateRange = () => {
        if (endDate === null || startDate === null) {
            return false;
        }
        return endDate < startDate;
    }

    const helperText = [
        {
            lang: "pt-BR",
            text: "A data de término deve ser maior que a inicial"
        },
        {
            lang: "en-US",
            text: "End date must be after the initial"
        },
    ]

    return (
        <>
            <FormControl
                sx={{ width: "500px", display: "flex", alignItems: "center", gap: 1 }}
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
                        }
                    }}
                    onChange={(newValue) => setEndDate(newValue)
                    }
                />
                {validDateRange() &&
                    <FormHelperText error={validDateRange()}>
                        
                    </FormHelperText>}
            </FormControl>
            <Button
                variant="contained"
                onClick={handleClick}
                disabled={!endDate || validDateRange()}

            >
                generate
            </Button>
        </>
    )
}