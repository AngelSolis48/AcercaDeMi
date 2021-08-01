import React from "react";
import styled, {keyframes} from "styled-components";
import H2Styled from "../css/H2Styled";
import PStyled from "../css/PStyled";
import H3Styled from "../css/H3Styled";


const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1em 2em;
  min-width: fit-content;
`;

const SkillTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const SkillsContainer2 = styled.div`
  display: grid;
  word-wrap: break-word;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 0.5em;
  margin: 0 0 1.5em 0;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1em;
    margin: 0 0 1.5em 0;
  }
`;

const StyledSkill = styled.div`
  text-align: center;
`;

const SkillLine = styled.div`
  height: 15px;
  position: relative;
  border-radius: 50px;
  background-color: #3a3a3a4c;
`;

const move = keyframes`
  0% {background-position: 0 0;}
  100% { background-position: 50px 50px;}
`;

const SkillSpan = styled.span`
  border-radius: 50px;
  display: block;
  height: 100%;
  width: ${(props) => props.width};
  background-color: #1E6197;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(-45deg, #ffffff33 
      25%, transparent 25%, transparent 50%, #ffffff33 50%, #ffffff33 75%
      ,transparent 75%, transparent);
      z-index: 1;
      background-size: 50px 50px;
      animation: ${move} 8s linear infinite;
      overflow: hidden;
  }
`;

const Skills = (props) => {
  return (
    <div className="Skills">
      <SkillsContainer>
        <H2Styled name="Skills" />
        {props.data.map((sk, id) => (
          <SkillTypeContainer key={`Type-${id}`}>
            <H3Styled>{sk.type}</H3Styled>
            <SkillsContainer2>
              {sk.skil.map((skil, index) => (
                <StyledSkill key={`Skill-${index}`}>
                  <PStyled>{skil.name}</PStyled>
                  <SkillLine className="Skills-line">
                    <SkillSpan width={`${skil.percentage}`}></SkillSpan>
                  </SkillLine>
                </StyledSkill>
              ))}
            </SkillsContainer2>
          </SkillTypeContainer>
        ))}
      </SkillsContainer>
    </div>
  );
};

export default Skills;
