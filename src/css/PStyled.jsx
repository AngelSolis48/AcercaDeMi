import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    color: #1B1725;
    font-weight: 300;
    font-size: .9em;
    margin: 1em 0 .2em 0;
    max-width: 700px;
`;

const PStyled = ({ children }) => <StyledP>{children}</StyledP>

export default PStyled;
