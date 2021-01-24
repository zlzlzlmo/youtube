import styles from "./video_detail.module.css";
const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        type="text/html"
        width="100%"
        height="500px"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allowFullScreen
      ></iframe>
      <h1>{snippet.title}</h1>
      <h2>{snippet.channelTitle}</h2>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
