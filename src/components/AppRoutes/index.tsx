import Home from "pages/Home";
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3"



const AppRoutes = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Home />
    </LocalizationProvider>
  );
};

export default AppRoutes;
