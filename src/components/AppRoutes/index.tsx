import Home from "pages/Home/Home";
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"



const AppRoutes = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Home />
    </LocalizationProvider>
  );
};

export default AppRoutes;
