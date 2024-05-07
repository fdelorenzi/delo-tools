import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SQLFormatter from "./pages/SQLFormatter";
import JWTDecoder from "./pages/JWTDecoder";
import JSONFormatter from "./pages/JSONFormatter";
import ContentFormatter from "./pages/ContentFormatter";
import Base64Decoder from "./pages/Base64Decoder";
import HashGenerator from "./pages/HashGenerator";
import RandomDataGenerator from "./pages/RandomDataGenerator";

export default function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base64-decoder" element={<Base64Decoder />} />
          <Route path="/json-formatter" element={<JSONFormatter />} />
          <Route path="/jwt-decoder" element={<JWTDecoder />} />
          <Route path="/unescape-n-format" element={<ContentFormatter />} />
          <Route path="/sql-formatter" element={<SQLFormatter />} />
          <Route path="/hash-generator" element={<HashGenerator />} />
          <Route path="/random-data-generator" element={<RandomDataGenerator />} />

        </Routes>
      </div>
    </Router>
  );
}
