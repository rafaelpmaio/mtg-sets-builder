// import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "components/AppRoutes";

function App() {
  return (
    <>
      <ToastContainer closeOnClick={true} />
      <AppRoutes />
    </>
  );
}

export default App;
