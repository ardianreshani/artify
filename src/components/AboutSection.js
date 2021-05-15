import React from "react";
import home1 from "../img/home1.png";
import { About, Descripten, Hide, Image } from "../styles";
import styled from "styled-components";
const AboutSection = () => {
  return (
    <About>
      <Descripten>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>

        <p>
          Contact us for any photography or videography ideas that you have.
        </p>
        <button>Contact Us</button>
      </Descripten>
      <Image>
        <img src={home1} alt="guy" />
      </Image>
    </About>
  );
};

export default AboutSection;
