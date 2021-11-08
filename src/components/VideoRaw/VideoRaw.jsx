import {
  ArrowDownward,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import VideoCard from "../VideoCard/VideoCard";
import "./videoRaw.scss";
import { arr1 } from "../../response";
import { useState } from "react";

const VideoRaw = ({ title, videos, smallCards }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageNo, setPageNo] = useState(8);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (collapsed) {
      setPageNo(8);
    } else {
      setPageNo(16);
    }
  };
  return (
    <div className="videoRaw">
      <div className="videoRaw_title">
        {title.length > 1 ? (
          <h3>
            {title[0]} <span>{title[1]}</span> {title[2]}
          </h3>
        ) : (
          <h3>{title}</h3>
        )}
      </div>
      <div className="videoRaw_content">
        {smallCards
          ? videos?.slice(0, pageNo).map((video) => (
              <VideoCard
                thumbnail={
                  // video.box_art_url.split("-{width}x{height}")[0] + ".jpg"
                  video.box_art_url2
                }
                title={video.name}
                smallCard
              />
            ))
          : videos?.slice(0, pageNo).map((video) => (
              <VideoCard
                avatar={video.avatar_url}
                thumbnail={
                  // video.thumbnail_url.split("-{width}x{height}")[0] + ".jpg"
                  video.thumbnail_url2
                }
                title={video.title}
                account={video.user_name}
                subtitle={video.game_name}
                languages="English"
                live={video.is_mature}
              />
            ))}
      </div>

      {!smallCards ? (
        <>
          {!collapsed ? (
            <div className="margin_line">
              <hr />
              <div onClick={toggleCollapsed}>
                <span>Show more</span>
                <KeyboardArrowDown />
              </div>
              <hr />
            </div>
          ) : (
            <div className="margin_line">
              <hr />
              <div onClick={toggleCollapsed}>
                <span>Show less</span>
                <KeyboardArrowUp />
              </div>
              <hr />
            </div>
          )}
        </>
      ) : (
        <div style={{ marginBottom: "40px" }}></div>
      )}
    </div>
  );
};

export default VideoRaw;
