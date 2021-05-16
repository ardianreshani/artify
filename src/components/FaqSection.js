import React from "react";
import styled from "styled-components";
import { About } from "../styles";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        {" "}
        Any Questions <span>Faq</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            magnam.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            magnam.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Diferent Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            magnam.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products do you offer.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            magnam.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    cursor: pointer;
    padding: 3rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export default FaqSection;
