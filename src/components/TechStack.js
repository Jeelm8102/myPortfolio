import "./TechStackStyles.css"
import html_logo from "../assets/html_logo.png";
import js_logo from "../assets/js_logo.png";
import react_logo from "../assets/react_logo.png";
import angular_logo from "../assets/angular_logo.png";
import node_logo from "../assets/node_logo.png";
import mongodb_logo from "../assets/mongoDB_logo.png";

import React from 'react'

const TechStack = () => {
  return (
    <section className="secondSection">
      <span className="text-gray">What I have learned so far</span>
      <h1>Tech Stack</h1>

      <div className="box">
        <div className="vertical">
          <img className="image-top" src={html_logo} alt="htmlimg" />
          <div className="vertical-title">HTML Developer</div>
          <div className="vertical-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ex, error deserunt obcaecati quidem, tenetur illum delectus
            quam ipsum mollitia, perferendis quis accusantium aliquid hic
            voluptate? Quidem quod necessitatibus perspiciatis ex
          </div>
        </div>
        <div className="vertical">
          <img className="image-top" src={js_logo} alt="jsimg" />
          <div className="vertical-title">Javascript Developer</div>
          <div className="vertical-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ex, error deserunt obcaecati quidem, tenetur illum delectus
            quam ipsum mollitia, perferendis quis accusantium aliquid hic
            voluptate? Quidem quod necessitatibus perspiciatis ex
          </div>
        </div>
        <div className="vertical">
          <img className="image-top" src={react_logo} alt="reactimg" />
          <div className="vertical-title">ReactJS Developer</div>
          <div className="vertical-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ex, error deserunt obcaecati quidem, tenetur illum delectus
            quam ipsum mollitia, perferendis quis accusantium aliquid hic
            voluptate? Quidem quod necessitatibus perspiciatis ex
          </div>
        </div>
        <div className="vertical">
          <img className="image-top" src={angular_logo} alt="angimg" />
          <div className="vertical-title">AngularJS Developer</div>
          <div className="vertical-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ex, error deserunt obcaecati quidem, tenetur illum delectus
            quam ipsum mollitia, perferendis quis accusantium aliquid hic
            voluptate? Quidem quod necessitatibus perspiciatis ex
          </div>
        </div>
        <div className="vertical">
          <img className="image-top" src={node_logo} alt="nodeimg" />
          <div className="vertical-title">NodeJS Developer</div>
          <div className="vertical-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ex, error deserunt obcaecati quidem, tenetur illum delectus
            quam ipsum mollitia, perferendis quis accusantium aliquid hic
            voluptate? Quidem quod necessitatibus perspiciatis ex
          </div>
        </div>
        <div className="vertical">
          <img className="image-top" src={mongodb_logo} alt="mongoimg" />
          <div className="vertical-title">MongoDB Developer</div>
          <div className="vertical-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ex, error deserunt obcaecati quidem, tenetur illum delectus
            quam ipsum mollitia, perferendis quis accusantium aliquid hic
            voluptate? Quidem quod necessitatibus perspiciatis ex
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack