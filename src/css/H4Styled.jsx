import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
    font-family: 'Montserrat', sans-serif;
    color: #D81159;
    font-weight: 400;
    margin: .2em 0;
`;

const H4Styled = ({ children }) => <StyledH4>{children}</StyledH4>

export default H4Styled;
