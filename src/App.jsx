import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Header from "./propiedades/header/Header"
import Home from "./home/Home";
import Homes from "./pages/Homes/index.jsx";
import Casa from "./pages/casa/Casa";
import Blog01 from "./pages/productos/blog01/Blog01";
import Blog02 from "./pages/productos/blog02/Blog02";
import Blog03 from "./pages/productos/blog03/Blog03";
import Blog04 from "./pages/productos/blog04/Blog04";
import Blog05 from "./pages/productos/blog05/Blog05";
import Blog06 from "./pages/productos/blog06/Blog06";
import Blog07 from "./pages/productos/blog07/Blog07";
import Blog08 from "./pages/productos/blog08/Blog08";
import Blog09 from "./pages/productos/blog09/Blog09";
import Blog10 from "./pages/productos/blog10/Blog10";
import Blog11 from "./pages/productos/blog11/Blog11";
import Blog12 from "./pages/productos/blog12/Blog12";
import Blog13 from "./pages/productos/blog13/Blog13";
import Contacto from "./components/navbar/Contacto";


import "./App.css";

const App = () => (
  <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Homes" element={<Homes />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Casa" element={<Casa />} />
          <Route path="/Blog01" element={<Blog01 />} />
          <Route path="/Blog02" element={<Blog02 />} />
          <Route path="/Blog03" element={<Blog03 />} />
          <Route path="/Blog04" element={<Blog04 />} />
          <Route path="/Blog05" element={<Blog05 />} />
          <Route path="/Blog06" element={<Blog06 />} />
          <Route path="/Blog07" element={<Blog07 />} />
          <Route path="/Blog08" element={<Blog08 />} />
          <Route path="/Blog09" element={<Blog09 />} />
          <Route path="/Blog10" element={<Blog10 />} />
          <Route path="/Blog11" element={<Blog11 />} />
          <Route path="/Blog12" element={<Blog12 />} />
          <Route path="/Blog13" element={<Blog13/>} />
          <Route path="/Contacto" element={<Contacto />} />
        
        </Routes>
      </BrowserRouter>
  </>
);
export default App;

