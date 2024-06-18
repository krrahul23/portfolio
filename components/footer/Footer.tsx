import { Fade } from "react-awesome-reveal";
import { FooterContainer, Text } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Fade triggerOnce direction="up" cascade damping={0.2}>
        <Text>Built and designed by Rahul Kumar.</Text>
        <Text>&copy; {new Date().getFullYear()}. All rights reserved.</Text>
      </Fade>
    </FooterContainer>
  );
};

export default Footer;
