import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import { useState } from "react";
import filterLanguage from "utils/filterLanguage";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { accordionDataArr } from "assets/accordionDataArr";

export default function InformationsDisplay({ language }: { language: string }) {
    const [expanded, setExpanded] = useState<string | false>(false)

    const selectedAccordion = filterLanguage(accordionDataArr, language)
    const accordionData = selectedAccordion[0].data;

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Stack sx={{ width: "100%", maxWidth: "500px" }} >
            {accordionData.map((data, index) => (
                <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={(event, isExpanded) => { handleChange(isExpanded, `panel${index}`) }}
                >
                    <AccordionSummary
                        id={`panel${index}-header`}
                        aria-controls={`panel${index}-content`}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6" component="div">{data.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography variant="body2" color="text.secondary">{data.description}</Typography>
                    </AccordionDetails>
                </Accordion>))}
        </Stack>
    )
}