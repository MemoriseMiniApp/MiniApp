import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";
import { useLogin } from "../services/AuthContext";
import { get_my_albums } from "../services/album_service";
import NewAlbumBtn from "@/components/NewAlbumBtn";
import ShareContact from "@/components/ShareContact";

const Albums = () => {
  const { login } = useLogin();
  const jwt = login.jwt;
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (jwt) {
      get_my_albums(jwt)
        .then(setAlbums)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [jwt]);

  const handleShareClick = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.openTelegramLink(
        "https://t.me/share/url?url=https://t.me/memorise_photo_bot?start=share_abc123"
      );
    } else {
      alert("Telegram WebApp не найден.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // Two equal columns
          gap: "16px", // Space between cards
          padding: "24px", // Container padding
          width: "100%", // Full width
          boxSizing: "border-box", // Include padding in width
        }}
      >
        {loading ? (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>Загрузка...</p> // Span both columns
        ) : (
          albums.map((album) => (
            <Link
              key={album.id}
              to={`/album/${album.id}`}
              style={{
                textDecoration: "none",
                display: "block", // Ensure Link fills grid cell
              }}
            >
              <AlbumCard album={album} />
            </Link>
          ))
        )}
      </div>
      <NewAlbumBtn />
      <button
        style={{
          marginTop: 16,
          padding: "10px 20px",
          background: "#229ED9",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: 16,
          marginLeft: 24,
          marginBottom: 24,
        }}
        onClick={handleShareClick}
      >
        Поделиться в Telegram
      </button>
    </>
  );
};

export default Albums;