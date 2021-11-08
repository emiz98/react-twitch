import { Avatar } from "@mui/material";
import "./videoCard.scss";

const VideoCard = ({
  avatar,
  thumbnail,
  title,
  account,
  subtitle,
  languages,
  live,
  smallCard,
}) => {
  return (
    <div className={`videoCard ${smallCard && "small_card"}`}>
      {smallCard ? (
        <>
          <div className="videoCard__thumbnail">
            <img src={thumbnail} alt="" />
          </div>
          <div className="videoCard__footer">
            <div className="videoCard__content">
              <h4>{title}</h4>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="videoCard__thumbnail">
            <img src={thumbnail} alt="" />
            {live && <span>Live</span>}
          </div>
          <div className="videoCard__footer">
            <Avatar src={avatar} />
            <div className="videoCard__content">
              <h4>{title}</h4>
              <div className="subtitles1">{account}</div>
              <div className="subtitles2">{subtitle}</div>
              <span className="lang">{languages}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoCard;
