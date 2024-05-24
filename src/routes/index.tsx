import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { DefaultPage } from "../pages/DefaultPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DefaultPage />}>
        <Route path="/" element={<div>home</div>} />
      </Route>
    </Routes>
  );
};
