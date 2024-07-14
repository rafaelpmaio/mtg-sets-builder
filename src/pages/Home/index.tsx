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
import styles from 'styles/styles.module.css'
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

  // refazer lógica da requisição http para programar 30% dos isCollected para true e 30% favoritados, também aproveitar para mudar o "collect" para "favorite"

  const selectedImage = filterLanguage(imageSrcArr, language);
  const src = selectedImage[0].src;

  return (
    <Box
      component="main"
      gap={4}
      padding={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#eeeeee"
    >
      <Paper
        component="img"
        alt="app fluxogram"
        src={src}
        elevation={4}
        sx={{
          height: {
            xs: 100,
            sm: 160,
          }
        }}
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
