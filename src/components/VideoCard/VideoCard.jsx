import { Avatar } from "@mui/material";
import "./videoCard.scss";

const VideoCard = () => {
  return (
    <div className="videoCard">
      <div className="videoCard__thumbnail">
        <img
          src="https://staticg.sportskeeda.com/editor/2021/02/49f6b-16145099144304-800.jpg"
          alt=""
        />
        <span>Live</span>
      </div>
      <div className="videoCard__footer">
        <Avatar src="https://avatars.githubusercontent.com/u/64089619?v=4" />
        <div className="videoCard__content">
          <h4>sinatraa - ranked until act ends !newvid</h4>
          <div className="subtitles">sinatraa</div>
          <div className="subtitles">Valorant</div>
          <span className="lang">English</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
