import VideoItem from "../video_item/video_items";
import styles from "./video_list.module.css";

const VideoList = (props)=>{
  return(
    <ul className={styles.videos}>
      {props.videos.map((video)=>{
        console.log(video)
        return (
          <VideoItem key={video.item} video={video.snippet}></VideoItem>
        )
      })}
    </ul>
  )
}
export default VideoList