import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Album from "./pages/Album";
import FileInput from "./pages/FileInput";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/album" element={<Album />} />
        <Route path="/file-input" element={<FileInput />} />
      </Routes>
    </Router>
  );
};

export default App;