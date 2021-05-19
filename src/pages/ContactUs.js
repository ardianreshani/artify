import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social>
            <motion.h2 variants={titleAnim}>Send us a Massage</motion.h2>
          </Social>
        </Hide>
        <Hide>
          <Social>
            <motion.h2 variants={titleAnim}>Email</motion.h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
`;
export default ContactUs;
