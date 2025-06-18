import React, { useState } from "react";

const FileInput = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => {
      const allFiles = [...prevFiles, ...files];
      const uniqueFiles = [];
      const seen = new Set();
      for (const file of allFiles) {
        const id = file.name + file.size;
        if (!seen.has(id)) {
          seen.add(id);
          uniqueFiles.push(file);
        }
      }
      return uniqueFiles;
    });
  };

  const handleRemoveFile = (idxToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, idx) => idx !== idxToRemove)
    );
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">Upload Files</h1>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="border border-gray-300 p-2 rounded"
      />
      {selectedFiles.length > 0 && (
        <div className="mt-4 w-full max-w-md grid grid-cols-3 gap-4">
          {selectedFiles.map((file, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <button
                type="button"
                onClick={() => handleRemoveFile(idx)}
                className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-red-500 hover:text-white transition text-xl font-bold border border-gray-200"
                style={{ zIndex: 2, lineHeight: 1 }}
                aria-label="Удалить"
              >
                ×
              </button>
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${idx}`}
                className="w-32 h-32 object-cover rounded shadow"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileInput;