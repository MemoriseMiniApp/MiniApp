import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FileInput from "@/pages/FileInput";
import NewAlbum from "@/pages/NewAlbum";
import Albums from "@/pages/Albums";
import AlbumDetail from "@/pages/AlbumDetail"; // Import the new component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/albums" element={<Albums />} />
        <Route path="/file-input" element={<FileInput />} />
        <Route path="/new-album" element={<NewAlbum />} />
        <Route path="/album/:album_id" element={<AlbumDetail />} /> 
      </Routes>
    </Router>
  );
};

export default App;