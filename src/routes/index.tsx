import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { DefaultPage } from "../pages/DefaultPage";
import { Home } from "../pages/Home";
import { Invoices } from "../pages/Invoices";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DefaultPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />} />
      </Route>
    </Routes>
  );
};
