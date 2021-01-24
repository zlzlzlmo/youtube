import { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";
import styles from "./app.module.css";
function App() {
  const [videos, setVideos] = useState([]);

  const onSearch = (word) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${word}&key=AIzaSyCUM6ZViUOHvDPVLcgNNH60b_uP4hpDgKU`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(setVideos([...result.items])))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const fetchItem = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCUM6ZViUOHvDPVLcgNNH60b_uP4hpDgKU",
        requestOptions
      );
      const result = await response.json();
      setVideos([...result.items]);
    };

    fetchItem();
  }, []);
  return (
    <div className={styles.app}>
      <VideoSearch onSearch={onSearch}></VideoSearch>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
