import VideoItem from "../video_item/video_items";


const VideoList = (props)=>{
  return(
    <ul>
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