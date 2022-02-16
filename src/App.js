import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  Footer,
  Home,
  KidsProductsPage,
  StaticPage,
} from "./Components";
// import MainHome from "./Components";
function App() {

  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<KidsProductsPage />} />
          <Route path="/staticpage" element={<StaticPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
