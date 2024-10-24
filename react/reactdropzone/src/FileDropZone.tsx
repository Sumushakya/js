// import React from "react";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./dropZone.css";

// interface UploadedFile {
//   file: File;
// }
const FileDropZone: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: "image/*, application/pdf",
    // multiple: true,
    // maxSize: 5000000,
  });

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Drag and Drop</h3>
      <div className="container" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here..</p>
        ) : (
          <p>Drag 'n' Drop some files here,or click to select files</p>
        )}
      </div>

      <div>
        <h3 style={{ textAlign: "center" }}>Selected Files:</h3>
        {/* <ul className="ul"> */}
        {files.map((file, index) => (
          <img
            className="image"
            src={`${URL.createObjectURL(file)}`}
            key={index}
            alt="image"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        ))}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default FileDropZone;
