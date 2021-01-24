import VideoItem from "../video_item/video_items";
import styles from "./video_list.module.css";
import { Link } from "react-router-dom";
const VideoList = ({ videos, onSelectVideo, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.item}
            video={video}
            onSelectVideo={onSelectVideo}
            display={display}
          ></VideoItem>
        );
      })}
    </ul>
  );
};
export default VideoList;
