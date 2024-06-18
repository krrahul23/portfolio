import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  NavContainer,
  NavItems,
  NavItem,
  Icons,
  Anchor,
} from "./Navigation.styles";
import { SmallIcon } from "../../styles/Icon.styles";
import { Link as SmoothScroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { socials } from "../../data/socials";

const Navigation = () => {
  return (
    <NavContainer>
      <NavItems>
        <Fade triggerOnce direction="up" cascade damping={0.2}>
          <SmoothScroll href="/" to="home" smooth={true}>
            <NavItem>/home</NavItem>
          </SmoothScroll>
          <SmoothScroll href="/about" to="about" smooth={true}>
            <NavItem>/about</NavItem>
          </SmoothScroll>
          <SmoothScroll href="/projects" to="projects" smooth={true}>
            <NavItem>/projects</NavItem>
          </SmoothScroll>
          <SmoothScroll href="/contact" to="contact" smooth={true}>
            <NavItem>/contact</NavItem>
          </SmoothScroll>
        </Fade>
      </NavItems>
      <Fade triggerOnce direction="up" delay={1000}>
        <Icons>
          <Anchor href={socials.mail} aria-label="Rahul Kumar Mail">
            <SmallIcon as={FaEnvelope} />
          </Anchor>
          <Anchor href={socials.github} aria-label="Rahul Kumar GitHub">
            <SmallIcon as={FaGithub} />
          </Anchor>
          <Anchor href={socials.linkedin} aria-label="Rahul Kumar LinkedIn">
            <SmallIcon as={FaLinkedin} />
          </Anchor>
        </Icons>
      </Fade>
    </NavContainer>
  );
};

export default Navigation;
