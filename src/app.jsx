import { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos,setVideos] = useState([]);
  
  useEffect(() => {

    const fetchItem = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
  
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCUM6ZViUOHvDPVLcgNNH60b_uP4hpDgKU",
        requestOptions
      )
      const result = await response.json();
      setVideos([...result.items])
    }

    fetchItem();

  },[]);
  return <VideoList videos={videos}></VideoList>;
}

export default App;
