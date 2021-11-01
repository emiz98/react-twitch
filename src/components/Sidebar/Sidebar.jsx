import { ArrowBack } from "@mui/icons-material";
import SidebarItem from "../SidebarItem/SidebarItem";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <h3>Recommended channels</h3>
        <ArrowBack />
      </div>
      <div className="sidebar_bof">
        <SidebarItem
          image="https://avatars.githubusercontent.com/u/64089619?v=4"
          title="iiTz trim"
          subTitle="Crab game"
          views="3.2K"
        />
        <SidebarItem
          image="https://avatars.githubusercontent.com/u/64089619?v=4"
          title="iiTz trim"
          subTitle="Crab game"
          views="3.2K"
        />
      </div>
    </div>
  );
};

export default Sidebar;
