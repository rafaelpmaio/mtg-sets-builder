import { Box, Button, FormControl, FormHelperText, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import filterLanguage from "utils/filterLanguage";
import { generateAndSaveSetsList } from "utils/generateAndSaveSetsList ";

const helperTextArr = [
    {
        language: "pt-BR",
        text: "selecione o período que dejeja buscar",
        error: "A data de término deve ser maior que a inicial"
    },
    {
        language: "en-US",
        text: "select the date range of your search",
        error: "End date must be after the initial"
    },
]

export default function DateRangeSelector({ language }: { language: string }) {
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

    const helperText = filterLanguage(helperTextArr, language)

    return (
        <>
            <FormControl
                sx={{ width: "500px", display: "flex", alignItems: "center", gap: 2 }}
            >
                <FormHelperText >
                    <Typography> {helperText[0].text} </Typography>
                </FormHelperText>
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
                        {helperText[0].error}
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