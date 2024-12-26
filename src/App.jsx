import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import AppLayout from "./ui/AppLayout/";
import Form from "./ui/Form";
import Plan from "./pages/Plan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="form"/>}/>
          <Route path="form" element={<Form/>}/>
          <Route path="plan" element={<Plan/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
