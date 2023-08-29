import React, { useState, useEffect } from "react";
import HeaderStyles from "./Header.module.css";
import PKImg from "./PK.png";
import BjBajiImg from "./bjbaji.png";
import { AiOutlineMail, AiFillFacebook, AiFillHome } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMobileAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
// header modal here
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();
  // model state here
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <header>
      {/* one */}
      <div className={HeaderStyles.container}>
        <div className={HeaderStyles.right}>
          <p>(GMT-7)</p>
          <p
            style={{
              marginRight: "13px",
              marginLeft: "5px",
              overflow: "hidden",
            }}
          >
            {formattedTime}
          </p>
          <div className={HeaderStyles.languagewrap}>
            <img src={PKImg} alt="pakistanimagelogo" />
            <span>Rs PKR English</span>
          </div>
        </div>

        <div className={HeaderStyles.left}></div>

        <ul className={HeaderStyles.left_ul}>
          <li>
            <a target="_blank" href="">
              <IoLogoWhatsapp className={HeaderStyles.icon} />
              WhatsApp
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              <AiOutlineMail className={HeaderStyles.icon} />
              Email
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              <AiFillFacebook className={HeaderStyles.icon} />
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              <MdForum className={HeaderStyles.icon} />
              Forum
            </a>
          </li>
        </ul>
      </div>
      {/* second */}

      <div className={HeaderStyles.bajiContainer}>
        <div className={HeaderStyles.bjbajiwidth}>
          <div className={HeaderStyles.bjbajileft}>
            <Link to="/">
              <img
                className={HeaderStyles.bjbajiImg}
                src={BjBajiImg}
                alt="BjBajiImg"
              />
            </Link>
          </div>
          <div className={HeaderStyles.bjbajiright}>
            <p onClick={onOpen}>Login</p>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
        </div>
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <div className={HeaderStyles.modalContainer}>
            <ModalHeader className={HeaderStyles.paraHeader}>
              Welcome to King Baji
            </ModalHeader>
            <ModalCloseButton className={HeaderStyles.closeBtn} />
          </div>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel className={HeaderStyles.labelcolor}>Username</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Username"
                type="text"
                className={HeaderStyles.inputModal}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel className={HeaderStyles.labelcolor}>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                className={HeaderStyles.inputModal}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} className={HeaderStyles.modalBtn}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* third */}

      <div className={HeaderStyles.mainsubnav}>
        <ul className={HeaderStyles.navinner}>
          <li className={HeaderStyles.nav_item}>
            <AiFillHome className={HeaderStyles.navinnerIcon} />
          </li>
          <li className={HeaderStyles.nav_item}>
            <BiMobileAlt className={HeaderStyles.navinnerIcon} />
          </li>
          <li
            className={HeaderStyles.nav_item}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            Sports
            <RiArrowDropDownLine className={HeaderStyles.navinnerIcon} />
          </li>
          <Link to="/casino" style={{ color: "#fff" }}>
            <li className={HeaderStyles.nav_item}>Casino</li>
          </Link>
          <li className={HeaderStyles.nav_item}>Slot</li>
          <li className={HeaderStyles.nav_item}>Table</li>
          <li className={HeaderStyles.nav_item}>Fishing</li>
          <li className={HeaderStyles.nav_item}>Arcade</li>
          <li className={HeaderStyles.nav_item}>Lottery</li>
          <li className={HeaderStyles.nav_item}>Promotion</li>
          <li className={HeaderStyles.nav_item}>VIP</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
