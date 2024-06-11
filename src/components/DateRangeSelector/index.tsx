import { Button, FormControl, FormHelperText, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { helperTextArr } from "assets/helperTextArr";
import { useState } from "react";
import filterLanguage from "utils/filterLanguage";
import { generateAndSaveSetsList } from "utils/generateAndSaveSetsList ";



export default function DateRangeSelector({ language }: { language: string }) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const buildSets = generateAndSaveSetsList(startDate, endDate);
    
    const handleClick = () => {
        buildSets()
    }

    const validDateRange = () => {
        if (endDate === null || startDate === null) {
            return false;
        }
        return endDate < startDate;
    }

    const helperText = filterLanguage(helperTextArr, language)
    console.log(startDate)
    return (
        <>
            <FormControl
                sx={{ width: "500px", display: "flex", alignItems: "center", gap: 2 }}
            >
                <FormHelperText >
                    <Typography variant="body2"> {helperText[0].text} </Typography>
                </FormHelperText>
                <DatePicker
                    label="de / from"
                    value={startDate}
                    onChange={(newValue) => setStartDate(newValue)}

                />
                <DatePicker
                    label="até / untill"
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
                download
            </Button>
        </>
    )
}