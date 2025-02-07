import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PockemonDeatil from "../components/PockemonDeatil";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dex"} element={<Dex />} />
        <Route path={"dex/:id"} element={<PockemonDeatil />} />
      </Routes>
    </BrowserRouter>
  );
};
