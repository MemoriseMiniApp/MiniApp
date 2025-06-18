import React, { useState, useEffect } from "react";
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

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 24 }}>
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))
        )}
      </div>
      <NewAlbumBtn />
    <a href="https://t.me/memorise_photo_bot?start=italbum" className="mt-4 inline-block">
      Поделиться альбомом
    </a>
  </>
  );
};

export default Albums;