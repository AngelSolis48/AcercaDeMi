import React from 'react'
import styled from 'styled-components';

const InfoStyled = styled.div`
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
    @media only screen and (max-width: 700px) {
        padding: 1em .1em;
    }
`;

const Info = ({ children }) => {
    return (
        <InfoStyled>
            <div className="Info-container">
                {children}
            </div>
        </InfoStyled>
    )
}

export default Info
