import styles from "./video_search.module.css";
import { useRef } from "react";
const VideoSearch = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    onSearch(inputRef.current.value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search.."
        onKeyDown={onKeyDown}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};
export default VideoSearch;
