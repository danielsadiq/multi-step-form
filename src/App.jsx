import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AppLayout from "./ui/AppLayout/";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
