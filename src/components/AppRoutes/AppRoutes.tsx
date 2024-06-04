import Home from "pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"



const AppRoutes = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RecoilRoot>
    </LocalizationProvider>
  );
};

export default AppRoutes;
