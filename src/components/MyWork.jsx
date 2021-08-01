import React from 'react'
import H3Styled from '../css/H3Styled'
import H4Styled from '../css/H4Styled'
import PStyled from '../css/PStyled'
import styled from 'styled-components'

const WorksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    border-top: 1px solid #6b2d5c7a;
    border-bottom: 1px solid #6b2d5c7a;
    margin-bottom: 1em;
    padding: 4px 0;
`;

const WorkStyled = styled.a`
    text-decoration: none;
    box-sizing: border-box;
    border-radius: 10px;
    margin: .5em 0;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
    text-align: justify;
    width: 100%;
    padding: 1em;
`;

const MyWork = props => {
    return (
        <WorksContainer>
            <H3Styled>Trabajos Realizados</H3Styled>
            {props.works.map( (work,id) =>(
                <WorkStyled key={`Work-${id}`} href={`${work.url}`}>
                    <H4Styled>{work.name}</H4Styled>
                    <PStyled>{work.roles}</PStyled>
                </WorkStyled>
                
            ))}
        </WorksContainer>
    )
}

export default MyWork
