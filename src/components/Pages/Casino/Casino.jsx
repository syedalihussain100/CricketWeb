import React from "react";
import CasinoStyle from "./Casino.module.css";
import LibeImg from "./image_46283.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Casino = () => {
  return (
    <>
      <div className={CasinoStyle.carousel_container}>
        <Carousel
          autoPlay={false}
          // interval={3000} // Adjust the interval as needed (in milliseconds)
          infiniteLoop={false}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          className={CasinoStyle.carousel_height}
        >
          <div>
            <img src={LibeImg} alt="Slide 1" />
          </div>
        </Carousel>
      </div>
      {/* second  tab filter here */}
      <div className={CasinoStyle.top_nav_wrap}>
        <div className={CasinoStyle.right_input}>
          <AiOutlineSearch className={CasinoStyle.icon} />
          <input type="text" placeholder="Search Games" />
        </div>
        <div className={CasinoStyle.left_ul}>
          <ul>
            <li>Sort:</li>
            <li>Recommend</li>
            <li>Latest</li>
            <li>A-Z</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Casino;
