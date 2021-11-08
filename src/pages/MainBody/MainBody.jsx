import Category from "../../components/CategoryCard/Category";
import VideoRaw from "../../components/VideoRaw/VideoRaw";
import "./mainBody.scss";
import {
  response_liveChannels,
  response_valorant,
  response_categories,
} from "../../response";
import { useEffect, useState } from "react";
import api from "../../api";
import axios from "axios";
import MainSlider from "../../components/MainSlider/MainSlider";

const MainBody = () => {
  const [videos, setVideos] = useState([]);
  const [smallVideos, setSmallVideos] = useState([]);
  const [videos2, setVideos2] = useState([]);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    // const result1 = api
    //   .get("https://api.twitch.tv/helix/streams?game_id=33214")
    //   .then((res) => {
    //     setVideos(res.data.data);
    //   });

    // const result2 = api
    //   .get("https://api.twitch.tv/helix/games/top")
    //   .then((res) => {
    //     setSmallVideos(res.data.data);
    //   });

    // const result3 = api
    //   .get("https://api.twitch.tv/helix/streams?game_id=516575")
    //   .then((res) => {
    //     setVideos2(res.data.data);
    //   });

    setVideos(response_liveChannels.data);
    setSmallVideos(response_categories.data);
    setVideos2(response_valorant.data);

    // const result4 = api
    //   .get("https://api.twitch.tv/helix/search/channels?query=valorant")
    //   .then((res) => {
    //     setAvatars(res.data.data);
    //   });
  }, []);

  return (
    <div className="mainBody">
      <MainSlider />
      <VideoRaw
        title={["Live channels we think you’ll like"]}
        videos={videos}
      />
      <VideoRaw
        title={["Trending", "categories", "you’ll like"]}
        videos={smallVideos}
        smallCards
      />
      <Category />
      <VideoRaw
        title={["Recommended", "VALORANT", "channels"]}
        videos={videos2}
      />
    </div>
  );
};

export default MainBody;
