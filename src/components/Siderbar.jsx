import React from 'react'
import styled from 'styled-components'

const SidebarStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 500px;
`;

const Siderbar = ( {children} ) => {
    return (
        <SidebarStyled className="Siderbar">
            <div className="Siderbar-container">
                {children}
            </div>
        </SidebarStyled>
    )
}

export default Siderbar
