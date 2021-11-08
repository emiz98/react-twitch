import { useEffect, useState } from "react";
import api from "../../api";
import { response_slider } from "../../response";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

const MainSlider = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // const result1 = api
    //   .get("https://api.twitch.tv/helix/streams")
    //   .then((res) => {
    //     setVideos(res.data.data);
    //   });
    setVideos(response_slider.data);
  }, []);

  const settings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="slider_buttons right" onClick={onClick}>
        <ArrowForwardIosOutlined />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="slider_buttons left" onClick={onClick}>
        <ArrowBackIosOutlined />
      </div>
    );
  }

  return (
    <div className="mainSlider">
      <Slider {...settings}>
        {videos.slice(0, 20).map((video) => (
          <div className="sliderCard" key={video.id}>
            <>
              <img
                src={video.thumbnail_url2}
                // src={video.thumbnail_url.split("-{width}x{height}")[0] + ".jpg"}
                alt=""
              />
              <span className="slick-center live">live</span>
            </>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
