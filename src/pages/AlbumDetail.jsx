import React from "react";
import { useParams } from "react-router-dom";

const AlbumDetail = () => {
  const { album_id } = useParams(); // Extract album_id from URL

  return (
    <div style={{ padding: 24 }}>
      <h1>Album Details</h1>
      <p>Album ID: {album_id}</p>
    </div>
  );
};

export default AlbumDetail;