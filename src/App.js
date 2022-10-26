import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import HeadNav from "./components/HeadNav";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <HeadNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:query" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
