import React from "react";
import "./header.css";
import headerImage from "../../assets/images/Group.png";
import People from "../../assets/images/people.png";

const Header = () => {
  return (
    <div class="header">
      <div className="header-content">
        <h1 className="header-content_title text-gradient">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
          <p className="header-content_desc">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="header-content_form">
          <form action="#">
              <input className="header-content_form-input" type="email" placeholder="Your Email Address"/>
              <input type="submit" className="header-content_form-button button" value="Get Started"/>
          </form>
          </div>
          <div className="header-content_people">
            <img src={People} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
      </div>
      <div className="header-image">
        <img src={headerImage} />
      </div>
    </div>
  );
};

export default Header;
