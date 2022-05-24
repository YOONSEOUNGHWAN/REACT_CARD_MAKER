import React from "react";
import { useRef, useState } from "react";
import styles from "./img_button.module.css";
export default function ImageInput({ imageUploader, name, onFileChange }) {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    setLoading(true);
    // 다중선택이 가능하므로..
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    // imageUploader.upload(event.target.files[0]).then(console.log);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
    console.log(uploaded);
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
      {!loading && (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
}
