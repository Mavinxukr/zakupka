import React, { useRef } from "react";

const FileUploaded = ({ onFileSelect }) => {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file.size > 1024)
      onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary" />
    </div>
  )
}

const FileInput = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FileUploaded
        onFileSelectSuccess={(file) => setSelectedFile(file)}
        onFileSelectError={({ error }) => alert(error)}
      />
    </div>
  );
};

export default FileInput;