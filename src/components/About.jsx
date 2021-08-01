import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
  align-self: center;
  text-align: center;
  padding: 0;
  margin: 2em 1em;
  border-radius: 15px;
  box-shadow: 0 0 .5em rgba(0,0,0,0.5);
  min-width: 450px;
  max-width: 500px;
  @media only screen and (max-width: 700px) {
    min-width: 350px;
  }
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 180px;
    height: 180px;
    box-shadow: 0 0 10px rgba(0,0,0,0.9);
    border: 6px solid #1e6197;
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    letter-spacing: -1.2px;
    margin: 0.5em 0 0 0;
    color: #1E6197;
`;

const AboutProfession = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin: 0 0 1em 0;
    letter-spacing: 1.6;
    font-weight: 700;
    color: #1E6197;
`;

const AboutBio = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: #1b1725;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  padding: 1em;
  max-width: fit-content;
`;

const AboutLocation = styled.p`
  font-family: 'Open Sans', sans-serif;
    color: #1b1725;
    font-weight: 600;
    font-size: 1em;
    text-align: center;
`;

const About = ({ avatar, name, profession, bio, address, social }) => {
  return (
    <AboutStyle>
      <div className="About-container">
        <AboutAvatar>
          <figure>
            <AboutImg src={avatar} alt={name} />
          </figure>
        </AboutAvatar>
        <AboutName>
          <AboutH2>{name}</AboutH2>
        </AboutName>
        <div className="About-profession">
          <AboutProfession>{profession}</AboutProfession>
        </div>
        <div className="About-desc">
          <AboutBio>{bio}</AboutBio>
        </div>
        <div className="About-location">
          <AboutLocation>{address}</AboutLocation>
        </div>
        <div className="About-social">
          <Social social={social} />
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;
