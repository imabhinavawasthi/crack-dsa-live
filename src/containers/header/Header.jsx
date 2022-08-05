import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router';
import { NavLink
 } from "react-router-dom";
import Icons from "../../components/icons/Icons";
const Header = (props) => {
  const navigate = useNavigate();
  const curruser=props.userdata;
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          <Typewriter
          
            onInit={(typewriter) => {
              typewriter
                .typeString("Learn Data Structures & Algorithms")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Master Competitive Programming Concepts")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Guidance Videos")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Learn Data Structures & Algorithms")
                .start();
            }}
          />
        </h1>
        <p>
          We have organised the best content for you with proper guidance and
          mentorship.
        </p>

        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          {curruser?(
            <NavLink className="gpt3__header-content__input" to="/courses"><button type="button">Hello, {curruser.name}</button></NavLink>

          ):(
          <NavLink className="gpt3__header-content__input" to="/courses"><button type="button">Start Learning</button></NavLink>

          )}
        </div>

        {/* <div className="gpt3__header-content__people">
          <Icons/>
          <p>Everything you need is here!</p>
        </div> */}
      </div>

      <div className="gpt3__header-image animated-header-image">
        <img src={ai} />
      </div>
    </div> 
  );
};

export default Header;
