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
import styles from './Home.module.css'
import InformationsDisplay from "components/InformationsDisplay";
import filterLanguage from "utils/filterLanguage";
import { imageSrcArr } from "assets/imageSrcArr";
import 'normalize.css';


const Home = () => {
  const [language, setLanguage] = useState("pt-BR")

  const handleLanguageChange = (_event: React.MouseEvent<HTMLElement>, updatedLanguage: string) => {
    if (updatedLanguage === null) {
      updatedLanguage = language
    }
    setLanguage(updatedLanguage);
  }

  const selectedImage = filterLanguage(imageSrcArr, language);
  const src = selectedImage[0].src;

  return (
    <Box
      component="main"
      gap={4}
      width="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#eeeeee"
      padding={2}
    >
      <Paper
        component="img"
        height="160px"
        src={src}
        alt="app fluxogram"
        elevation={4}
      />
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
