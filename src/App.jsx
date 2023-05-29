import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  // const apiUrl = import.meta.env.VITE_LOCALHOST_URL;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/admin"} element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
