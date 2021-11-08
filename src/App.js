import { ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainBody from "./pages/MainBody/MainBody";

function App() {
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    if (footer) {
    } else {
      setTimeout(() => {
        $(".footer_ad").css("transform", "translate(0, 0)");
        setTimeout(() => {
          $(".footer_ad").css("transform", "translate(0, 70px)");
        }, 6000);
      }, 2000);
    }
  }, []);
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <MainBody />
      </div>
      <div class="footer_ad">
        <div class="footer_ad__left">
          <img src="./footer_logo.png" />
          <span className="footer_ad_title">Join the Twitch community!</span>
          <span className="footer_ad_subtitle">
            Discover the best live streams anywhere
          </span>
        </div>

        <span className="footer_signup">Sign Up</span>
      </div>
    </div>
  );
}

export default App;
