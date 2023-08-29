import React from "react";
import BannerStyle from "./Banner.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import OneImg from "./one.jpg";
import TwoImg from "./two.jpg";
import ThreeImg from "./three.jpg";
import FourImg from "./four.jpg";
import FiveImg from "./five.jpg";
import { BsFillVolumeUpFill } from "react-icons/bs";

const Banner = () => {
  return (
    <>
      {/* part 1 */}
      <div className={BannerStyle.carousel_container}>
        <Carousel
          autoPlay={true}
          interval={3000} // Adjust the interval as needed (in milliseconds)
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          className={BannerStyle.carousel_height}
        >
          <div>
            <img src={OneImg} alt="Slide 1" />
          </div>
          <div>
            <img src={TwoImg} alt="Slide 2" />
          </div>
          <div>
            <img src={ThreeImg} alt="Slide 3" />
          </div>
          <div>
            <img src={FourImg} alt="Slide 5" />
          </div>
          <div>
            <img src={FiveImg} alt="Slide 6" />
          </div>
        </Carousel>
      </div>

      {/* part 2 */}

      <div className={BannerStyle.news}>
        <BsFillVolumeUpFill className={BannerStyle.newsIcon} />
        <marquee  behavior="scroll" direction="left" scrollamount="1">
          Dear customer, if you have trouble visiting bajilive.net, please visit
          bajilive.online, which is our backup URL
        </marquee>
      </div>

    </>
  );
};

export default Banner;
