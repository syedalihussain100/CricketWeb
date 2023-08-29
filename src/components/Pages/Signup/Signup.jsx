import React from "react";
import SignupStyle from "./Signup.module.css";
import SignupImg from "./image_56488.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const Signup = () => {
  return (
    <div className={SignupStyle.signUpContainer}>
      <div className={SignupStyle.register_wrap}>
        <div className={SignupStyle.left_wrap}>
          <p>Sign up</p>
          <div className={SignupStyle.left_line}></div>
          {/* next input here */}
          <div className={SignupStyle.formContainer}>
            <form>
              <label htmlFor="userName">Username</label>
              <input type="text" placeholder="4-15 char, allow number" />
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="6-20 char, allow number" />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="text" placeholder="Confirm Password" />
              <label htmlFor="choose">Choose Currency</label>
              <select name="choosecurrency" id="choosecurrency">
                <option value="BDT">BDT</option>
                <option value="INR">INR</option>
                <option value="PKR">PKR</option>
              </select>
              <label htmlFor="refercode">Refer Code</label>
              <input type="text" placeholder="Enter if you have one" />

              <div className={SignupStyle.btn_container}>
                <BsArrowRightShort className={SignupStyle.icon}/>
              </div>
            </form>
          </div>
        </div>
        <div className={SignupStyle.right_wrap}>
          <img
            src={SignupImg}
            alt="logo"
            className={SignupStyle.right_wrap_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
