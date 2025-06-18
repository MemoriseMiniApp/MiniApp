import React from "react";

const AlbumCard = ({ album }) => (
  <div style={{
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    width: "calc(50% - 24px)",
    boxSizing: "border-box",
    background: "#fafafa"
  }}>
    <h3>{album.title}</h3>
    <p><b>Описание:</b> {album.description || "—"}</p>
    <p><b>Дата начала:</b> {album.start_date}</p>
    <p><b>Дата окончания:</b> {album.end_date}</p>
    <p><b>Пользователи:</b> {album.users && album.users.length > 0 ? album.users.join(", ") : "—"}</p>
    <p><b>ID:</b> {album.id}</p>
  </div>
);

export default AlbumCard;