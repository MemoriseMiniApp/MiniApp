import React, { useEffect, useState } from "react";
import { getFilesByUserId } from "../services/file_service";
import { useLogin } from "../services/AuthContext";
import NewAlbumButton from "@/components/NewAlbumBtn";


const Album = () => {
  const [files, setFiles] = useState([]);
  const { login, setJwt } = useLogin();

  useEffect(() => {
    async function fetchFiles() {
      if (!login.user_id) return; // Ждём, пока user_id появится
      const fetchedFiles = await getFilesByUserId(login.user_id);
      setFiles(fetchedFiles);
    }
    fetchFiles();
  }, [login.user_id]);

  return (
    <div className="album-container">
      <p> jwt: {login.jwt} </p>
      <NewAlbumButton />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {files.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Album photo ${idx + 1}`}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default Album;