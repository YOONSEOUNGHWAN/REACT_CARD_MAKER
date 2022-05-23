import React from "react";
import { useRef } from "react";
import styles from "./img_button.module.css";
export default function ImageInput({ imageUploader, name, onFileChange }) {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async(event) => {
    // 다중선택이 가능하므로..
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    // imageUploader.upload(event.target.files[0]).then(console.log);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
    console.log(uploaded)
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
}
