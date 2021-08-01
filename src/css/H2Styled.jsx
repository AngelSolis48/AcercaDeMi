import React from 'react';
import styled from "styled-components";

const StyledH2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: -.5px;
    margin: .5em 0 0 0;
    color: #1E6197;
`;

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>

export default H2Styled;