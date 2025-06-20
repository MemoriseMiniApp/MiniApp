import React from "react";

const AlbumCard = ({ album }) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "100%", // Занимает всю ширину родителя (Link)
      boxSizing: "border-box",
      background: "#fafafa",
    }}
  >
    <h3>{album.title}</h3>
    <p><b>Описание:</b> {album.description || "—"}</p>
    <p><b>Дата начала:</b> {album.start_date}</p>
    <p><b>Дата окончания:</b> {album.end_date}</p>
  </div>
);

export default AlbumCard;