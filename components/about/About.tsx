import { Fade } from "react-awesome-reveal";
import {
  AboutContainer,
  Title,
  TextContainer,
  Text,
  Blue,
  ItemsContainer,
  Items,
  Item,
} from "./About.styles";

const About = () => {
  return (
    <AboutContainer id="about">
      <Fade triggerOnce direction="up" delay={100}>
        <Title>/ about me</Title>
      </Fade>
      <TextContainer>
        <Fade triggerOnce direction="up" cascade damping={0.2}>
          <Text>
            Hello! I&#39;m <Blue>Rahul Kumar</Blue>, a Software Development
            Engineer.
          </Text>
          <Text>
            I enjoy creating things that live on the internet, whether that
            be&nbsp;
            <Blue>websites, applications, or anything in between</Blue>. My goal
            is to always build products that provide{" "}
            <Blue>pixel-perfect, performant experiences</Blue>.
          </Text>
          <Text>
            Here are a few technologies I&#39;ve been working with recently:
          </Text>
        </Fade>
        <ItemsContainer>
          <Fade triggerOnce direction="up" cascade damping={0.2}>
            <Items>
              <Item>
                <Blue>JAVA</Blue>
              </Item>
              <Item>
                <Blue>SpringBoot</Blue>
              </Item>
              <Item>Spring</Item>

              <Item>Hibernate</Item>
            </Items>
            <Items>
              <Item>
                <Blue>TypeScript</Blue>
              </Item>
              <Item>JavaScript</Item>
              <Item>React</Item>
              <Item>Node.js</Item>
            </Items>
            <Items>
              <Item>PostgreSQL</Item>
              <Item>MySQL</Item>
              <Item>MongoDB</Item>
              <Item>Firebase</Item>
            </Items>
          </Fade>
        </ItemsContainer>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
