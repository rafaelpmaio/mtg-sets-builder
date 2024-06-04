import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "components/AppRoutes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer closeOnClick={true}/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
