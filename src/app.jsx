import { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";
import VideoDetail from "./components/video_detail/video_detail";
import styles from "./app.module.css";
function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSearch = (word) => {
    youtube.search(word).then((result) => setVideos(result));
  };

  const selectVideo = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };

  useEffect(() => {
    youtube.mostPopular().then((result) => setVideos(result));
  }, []);
  return (
    <div className={styles.app}>
      <VideoSearch onSearch={onSearch}></VideoSearch>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onSelectVideo={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          ></VideoList>
        </div>
      </section>
    </div>
  );
}

export default App;
