import { Avatar } from "@mui/material";
import "./sidebarItem.scss";

const SidebarItem = ({ image, title, subTitle, views, collapsed }) => {
  return (
    <div className="sidebarItem">
      <div className="sidebar_left">
        <Avatar src={image} />
        {!collapsed && (
          <div className="sidebar__content">
            <h4>{title}</h4>
            <span>{subTitle}</span>
          </div>
        )}
      </div>
      {!collapsed && (
        <div className="sidebar__right">
          <span class="dot"></span>
          <span className="sidebar__right_views">{views}</span>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
