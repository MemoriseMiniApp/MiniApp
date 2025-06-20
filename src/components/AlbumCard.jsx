// AlbumCard.jsx
import React, { useState, useEffect } from "react";
import { connectWebSocket, disconnectWebSocket } from "../services/websocket";
import { useLogin } from "../services/AuthContext";

const AlbumCard = ({ album }) => {
  const { login } = useLogin();
  const jwt = login.jwt;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const onMessage = (imageUrl) => {
      setImages((prevImages) => [...prevImages, imageUrl]);
    };

    connectWebSocket(jwt, onMessage);

    return () => {
      disconnectWebSocket();
    };
  }, [jwt]);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "100%",
        boxSizing: "border-box",
        background: "#fafafa",
      }}
    >
      <h3>{album.title}</h3>
      <p><b>Описание:</b> {album.description || "—"}</p>
      <p><b>Дата начала:</b> {album.start_date}</p>
      <p><b>Дата окончания:</b> {album.end_date}</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Изображение ${index + 1}`}
            style={{
              width: "calc(50% - 4px)",
              height: "auto",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumCard;