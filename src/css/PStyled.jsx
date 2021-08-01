import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-family: 'Open Sans', sans-serif;
    color: #1B1725;
    font-weight: 300;
    font-size: .9em;
    margin: 1em 0 .2em 0;
    max-width: 550px;
`;

const PStyled = ({ children }) => <StyledP>{children}</StyledP>

export default PStyled;
