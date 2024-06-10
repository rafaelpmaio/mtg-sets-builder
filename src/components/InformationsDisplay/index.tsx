import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import { useState } from "react";
import filterLanguage from "utils/filterLanguage";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionDataArr = [
    {
        language: "pt-BR",
        data: [{
            title: "Sobre",
            description: "teste de details"
        }, {
            title: "Sobre",
            description: "teste de details"
        }, {
            title: "Sobre",
            description: "teste de details"
        }]
    },
    {
        language: "en-US",
        data: [{
            title: "About",
            description: "teste de details2"
        }, {
            title: "About",
            description: "teste de details2"
        },
        {
            title: "About",
            description: "teste de details2"
        },]
    },
]


export default function InformationsDisplay({ language }: { language: string }) {
    const [expanded, setExpanded] = useState<string | false>(false)

    const selectedAccordion = filterLanguage(accordionDataArr, language)
    const accordionData = selectedAccordion[0].data;

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Stack sx={{ width: "100%", maxWidth:"500px"}} >
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
                        <Typography>{data.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography>{data.description}</Typography>
                    </AccordionDetails>
                </Accordion>))}
        </Stack>
    )
}