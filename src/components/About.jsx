import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
    text-align: center;
    float: left;
    margin: 0 1em 0 0;
    border-radius: 15px;
    box-shadow: 0 0 .5em rgba(0,0,0,0.5);
    min-width: 450px;
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
    margin: 5em 0 0 0;
    color: #1b1725;
`;

const AboutProfession = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin: 0 0 1em 0;
    letter-spacing: 1.6;
    font-weight: 700;
    color: #1b1725;
`;

const AboutBio = styled.p`
    color: #1b1725;
    font-weight: 400;
    font-size: 1em;
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
          <p>{address}</p>
        </div>
        <div className="About-social">
          <Social social={social} />
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;
