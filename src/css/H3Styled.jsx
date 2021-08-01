import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: #6B2D5C;
    font-weight: 600;
    margin: .5em 0;
`;

const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>

export default H3Styled;
