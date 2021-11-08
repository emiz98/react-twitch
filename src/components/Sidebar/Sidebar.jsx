import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import api from "../../api";
import { response_channels } from "../../response";
import SidebarItem from "../SidebarItem/SidebarItem";
import $ from "jquery";
import "./sidebar.scss";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle(!toggle);
    if (toggle == true) {
      $(".sidebar__right").css("display", "initial");
      $(".sidebar__content").css("display", "initial");
      $(".sidebar_header>h3").css("display", "initial");
      $(".sidebar").css("flex", "0.2");
    } else if (toggle == false) {
      $(".sidebar__right").css("display", "none");
      $(".sidebar__content").css("display", "none");
      $(".sidebar_header>h3").css("display", "none");
      $(".sidebar").css("flex", "none");
    }
  };
  useEffect(() => {
    // const result = api
    //   .get("https://api.twitch.tv/helix/search/channels?query=rocketleague")
    //   .then((res) => {
    //     setChannels(res.data.data);
    //   });
    setChannels(response_channels.data);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <h3>Recommended channels</h3>
        {!toggle ? (
          <ArrowBack onClick={toggleNav} />
        ) : (
          <ArrowForward onClick={toggleNav} />
        )}
      </div>
      <div className="sidebar_body">
        {channels.slice(0, 15).map((channel) => (
          <SidebarItem
            image={channel.thumbnail_url2}
            title={channel.display_name}
            subTitle={channel.game_name}
            views="3.2K"
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
