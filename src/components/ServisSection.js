import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Descripten, Image } from "../styles";
import styled from "styled-components";
const ServisSection = () => {
  return (
    <Services>
      <Descripten>
        <h2>
          {" "}
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <Icone>
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </Icone>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icone>
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </Icone>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icone>
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Diaphragm</h3>
            </Icone>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icone>
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </Icone>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Descripten>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    border-radius: 8px;
    padding: 1rem;
  }
`;
const Icone = styled.div`
  display: flex;
`;

export default ServisSection;
