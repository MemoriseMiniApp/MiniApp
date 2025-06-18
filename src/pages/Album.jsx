import React, { useEffect, useState } from "react";
import { getFilesByUserId } from "../services/file_service";

const userId = "1051176747"; // замените на актуальный userId

const Album = () => {
  const [files, setFiles] = useState([]);
  const { login, setJwt } = useLogin();

  useEffect(() => {
    async function fetchFiles() {
      const fetchedFiles = await getFilesByUserId(userId);
      setFiles(fetchedFiles);
    }
    fetchFiles();
  }, []);

  return (
    <div className="album-container">
      <p> jwt: {login.jwt} </p>
      <h1 className="text-2xl font-bold">Album</h1>
      <p>Here you can display your album content, such as images and titles.</p>
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