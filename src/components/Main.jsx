import React from 'react'
import styled from 'styled-components'

const MainStyled = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 1440px);
    justify-content: center;
    padding: 1em;
`;

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
    @media only screen and (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        justify-items: center;
        justify-content: center;
        min-width: 350px;
    }
`;

const Main = ({children}) => {
    return (
        <MainStyled className="Main">
            <MainContainer>
                {children}
            </MainContainer>
        </MainStyled>
    )
}

export default Main
