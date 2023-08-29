import React from "react";
import FooterStyle from "./Footer.module.css";
import icon24Img from "./icon-24hr.png";
import iconambasrImg from "./icon-ambassador.png";
import iconBookImg from "./icon-book.png";
import iconAndriodImg from "./android-en.png";
import InstaImg from "./Instagram.png";
import Safe1Img from "./safe1.png";
import Safe2Img from "./safe2.png";
import Safe3Img from "./safe3.png";
import TelegramImg from "./Telegram.png";
import TwitterImg from "./Twitter.png";
import YoutubeImg from "./Youtube.png";
import PinterestImg from "./Pinterest.png";
import PayImg from "./pay47.png";
import GamingImg from "./gaming_license.png";
import FacebookImg from "./FaceBook.png";
import BjbajiImg from "./bjbaji.png";

const Footer = () => {
  return (
    <footer className={FooterStyle.footerContainer}>
      <div className={FooterStyle.margin}>
        <div className={FooterStyle.firstContainer}>
          <div style={{ display: "flex" }}>
            <img src={icon24Img} alt="logo" className={FooterStyle.img} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                margin: "0px 22px",
              }}
            >
              <p style={{ marginBottom: "5px" }}>Customer Support</p>
              <p
                style={{
                  marginBottom: "5px",
                  color: "#999",
                  fontSize: "0.9rem",
                }}
              >
                Available 24/7 to assist you
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <img src={iconBookImg} alt="logo" className={FooterStyle.img} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                margin: "0px 22px",
              }}
            >
              <p style={{ marginBottom: "5px" }}>New Member Guide</p>
              <p
                style={{
                  marginBottom: "5px",
                  color: "#999",
                  fontSize: "0.9rem",
                }}
              >
                Check out FAQ and guides
              </p>
              <p style={{ marginBottom: "5px", fontSize: "0.9rem" }}>
                Explore Now
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <img src={iconambasrImg} alt="logo" className={FooterStyle.img} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                margin: "0px 22px",
              }}
            >
              <p style={{ marginBottom: "5px" }}>Brand Ambassador</p>
              <p
                style={{
                  marginBottom: "5px",
                  color: "#999",
                  fontSize: "0.9rem",
                }}
              >
                Play with celebrity
              </p>
              <p style={{ marginBottom: "5px", fontSize: "0.9rem" }}>
                Have Fun Now
              </p>
            </div>
          </div>
          <div>
            <img
              src={iconAndriodImg}
              alt="logo"
              className={FooterStyle.imgAndriod}
            />
          </div>
        </div>
        {/* line start */}
        <div className={FooterStyle.Line}></div>
        {/* line end */}
        <div className={FooterStyle.secondContainer}>
          <div className={FooterStyle.OneContainer}>
            <div className={FooterStyle.mainOneContainer1}>
              <div>
                <p>Responsible Gaming</p>
              </div>
              <div className={FooterStyle.SafeImg}>
                <a href="#" target="_blank">
                  <img
                    src={Safe1Img}
                    alt="safe1"
                    className={FooterStyle.imgsafe}
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={Safe2Img}
                    alt="safe2"
                    className={FooterStyle.imgsafe}
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={Safe3Img}
                    alt="safe3"
                    className={FooterStyle.imgsafe}
                  />
                </a>
              </div>
            </div>

            <div className={FooterStyle.mainOneContainer2}>
              <div>
                <p>Payment Methods</p>
              </div>
              <div className={FooterStyle.SafeImg}>
                <a href="#" target="_blank">
                  <img
                    src={PayImg}
                    alt="safe1"
                    className={FooterStyle.imgsafe}
                  />
                </a>
              </div>
            </div>

            <div className={FooterStyle.mainOneContainer3}>
              <div>
                <p>Community Websites</p>
              </div>
              <div className={FooterStyle.SafeImg}>
                <a href="#" target="_blank">
                  <img
                    src={FacebookImg}
                    alt="safe1"
                    className={FooterStyle.imgsafe}
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={InstaImg}
                    alt="safe1"
                    className={FooterStyle.imgsafe}
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={TwitterImg}
                    alt="safe1"
                    className={FooterStyle.imgsafe}
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={PinterestImg}
                    alt="safe1"
                    className={FooterStyle.imgsafe}
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={YoutubeImg}
                    alt="safe1"
                    className={FooterStyle.imgsafe}
                  />
                </a>

                <a href="#" target="_blank">
                  <img
                    src={TelegramImg}
                    alt="safe1"
                    className={FooterStyle.imgsafe}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={FooterStyle.TwoContainer}>
            <div>
              <p>Gaming License</p>
            </div>
            <div>
              <img
                src={GamingImg}
                alt="payImg"
                style={{ height: "1.5625rem" }}
              />
            </div>
          </div>
        </div>
        {/* line start */}
        <div className={FooterStyle.Line}></div>
        {/* line end */}
        <div className={FooterStyle.thirdContainer}>
          <h1 className={FooterStyle.toph1}>
            Top Betting Exchange Sites Bangladesh, India & South East Asia
          </h1>
          <p className={FooterStyle.topp}>
            A betting exchange is practically an online tool that is designed
            for gamblers to bet directly against each other and not involve any
            of the traditional bookmakers. Cricket Betting indicates two ways of
            betting in a cricket match. The first one is to bet on the overall
            outcome of a live cricket match. The other one is based on the live
            cricket score of a team in the first 6 overs.
            <br />
            Online betting has developed as a booming industry in South East
            Asia especially in Bangladesh and India, where the bettors get to
            choose from an exciting range of Top Betting Exchange Sites in
            Bangladesh, India and others South East Asia Region.
            <br />
            If you find this interesting and are in search of a reliable and
            safe Cricket Betting Sites Bangladesh and India, then you should
            enroll with us. Baji is a reputed online gambling site in entire
            Asia. We focus on not only cricket predictions but also other
            exciting online gaming products.
          </p>
        </div>

        {/* line start */}
        <div className={FooterStyle.Line}></div>
        {/* line end */}

        <div className={FooterStyle.fourContainer}>
          <div>
            <img src={BjbajiImg} alt="logo" />
          </div>
          <div>
            <ul>
              <li>Affilate</li>
              <li>Responsible Gaming</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
