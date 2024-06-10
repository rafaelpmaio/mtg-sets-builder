import {
  Box,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
} from "@mui/material";
import DateRangeSelector from "components/DateRangeSelector";
import React, { useState } from "react";
import { US, BR } from 'country-flag-icons/react/3x2'
import styles from './flag.module.css'
import InformationsDisplay from "components/InformationsDisplay";

const Home = () => {
  const [language, setLanguage] = useState("pt-BR")

  const handleLanguageChange = (_event: React.MouseEvent<HTMLElement>, updatedLanguage: string) => {
    if (updatedLanguage === null) {
      updatedLanguage = language
    }
    setLanguage(updatedLanguage);
  }

  return (
    <Box
      component="main"
      gap={4}
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding:"2em"
      }}
    >
      <Paper
        component="img"
        height="160px"
        src={"https://i.imgur.com/FgYN76O.png"}
        alt="app fluxogram"
        sx={{
        }}
      />
      {/* https://i.imgur.com/J5S24vQ.png */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="language options"
          value={language}
          onChange={handleLanguageChange}
          exclusive
        >
          <ToggleButton value="pt-BR" aria-label="pt-BR" sx={{ padding: 0 }} >
            <BR title="Brasil" className={`${styles.flag} ${language !== "pt-BR" && styles.flag_inative}`} />
          </ToggleButton>
          <ToggleButton value="en-US" aria-label="en-US" sx={{ padding: 0 }}>
            <US title="United States" className={`${styles.flag} ${language !== "en-US" && styles.flag_inative}`} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <DateRangeSelector language={language} />
      <InformationsDisplay language={language} />
    </Box>
  );
};

export default Home;
