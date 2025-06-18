import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Album from "./pages/Album";
import FileInput from "./pages/FileInput";
import NewAlbum from "./pages/NewAlbum";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/album" element={<Album />} />
        <Route path="/file-input" element={<FileInput />} />
        <Route path="/new-album" element={<NewAlbum />} />

      </Routes>
    </Router>
  );
};

export default App;