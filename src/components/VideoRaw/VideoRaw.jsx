import VideoCard from "../VideoCard/VideoCard";
import "./videoRaw.scss";

const VideoRaw = ({ title }) => {
  return (
    <div className="videoRaw">
      <h3>{title}</h3>
      <VideoCard />
    </div>
  );
};

export default VideoRaw;
