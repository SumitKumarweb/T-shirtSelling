import './CustemDesign.css'
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];

function DropZone() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    );
}

export default DropZone;