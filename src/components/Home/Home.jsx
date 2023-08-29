import React, { useState } from "react";
import HomeStyle from "./Home.module.css";
import clockImg from "./clock.png";
import Banner from "../Banner/Banner";

const Home = ({ images, images1 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const nextImage1 = () => {
    setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const prevImage1 = () => {
    setCurrentImageIndex1(
      (prevIndex) => (prevIndex - 1 + images.length) % images1.length
    );
  };

  return (
    <>
      <Banner />
      <div className={HomeStyle.main_banner_wrapper}>
        <div className={HomeStyle.widthContainer}>
          <div className={HomeStyle.box1}>
            <div className={HomeStyle.boxheader}>
              <h3>Favourites</h3>
            </div>
            <div className={HomeStyle.carousel}>
              <button className={HomeStyle.prev_button} onClick={prevImage}>
                Prev
              </button>
              <img
                className={HomeStyle.carousel_image}
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
              />
              <button className={HomeStyle.next_button} onClick={nextImage}>
                Next
              </button>
            </div>
          </div>
          <div className={HomeStyle.box2}>
            <div className={HomeStyle.boxheader}>
              <h3>Favourites</h3>
            </div>
            <div className={HomeStyle.carousel}>
              <button className={HomeStyle.prev_button} onClick={prevImage1}>
                Prev
              </button>
              <img
                className={HomeStyle.carousel_image}
                src={images1[currentImageIndex1]}
                alt={`Image ${currentImageIndex1}`}
              />
              <button className={HomeStyle.next_button} onClick={nextImage1}>
                Next
              </button>
            </div>
          </div>
        </div>
        <div className={HomeStyle.iintercom_lightweight_app_launcher}>
          <div
            className={HomeStyle.intercom_lightweight_app_launcher_icon_open}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: 0,
              top: 0,
              width: "48px",
              height: "48px",
              transition: "transform 100ms linear, opacity 80ms linear",
            }}
          >
            <img
              src={clockImg}
              alt="clock"
              className={
                HomeStyle.intercom_lightweight_app_launcher_custom_icon_open
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
