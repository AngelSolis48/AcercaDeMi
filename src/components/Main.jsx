import React from 'react'
import styled from 'styled-components'

const MainStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    justify-content: center;
`;

const Main = ({children}) => {
    return (
        <div className="Main">
            <MainStyled>
                {children}
            </MainStyled>
        </div>
    )
}

export default Main
