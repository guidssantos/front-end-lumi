import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};
