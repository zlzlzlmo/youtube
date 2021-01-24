import { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";
import styles from "./app.module.css";
function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const onSearch = (word) => {
    youtube.search(word).then((result) => setVideos(result));
  };

  useEffect(() => {
    youtube.mostPopular().then((result) => setVideos(result));
  }, []);
  return (
    <div className={styles.app}>
      <VideoSearch onSearch={onSearch}></VideoSearch>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
