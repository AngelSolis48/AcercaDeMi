import React from 'react';
import styled from 'styled-components';
import H2Styled from '../css/H2Styled';
import H3Styled from '../css/H3Styled';
import H4Styled from '../css/H4Styled';
import PStyled from '../css/PStyled';

const EduContainer = styled.div`
    padding: 1em 2em;
    display: inline-block;
    box-sizing: border-box;
    flex-flow: nowrap;
    flex-direction: column;
    text-align: justify;
`;

const Education = props => {
    return (
        <div className="Education">
            <EduContainer> 
            <H2Styled name="Education"/>
            
                {props.data.map((edu, index)=>(
                    <div className="Education-item" key={`Edu-${index}`}>
                        <H3Styled>{edu.institution}</H3Styled>
                        <H4Styled>{edu.school}</H4Styled>
                        <H4Styled>{edu.title}</H4Styled>
                        <PStyled>{edu.description}</PStyled>
                        <PStyled>{edu.dates}</PStyled>
                    </div>
                ))}
            </EduContainer>
        </div>
    )
}

export default Education
