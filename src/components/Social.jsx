import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const StyledSocial = styled.div`
    margin: 0;
    box-sizing: content-box;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
`;

const SocialLI = styled.li`
    display: flex;
    margin: 0 .7em;
    padding: 0 0 1em 0;
`;

const SocialA = styled.a`

    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: #D81159;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color};
`;

const facebook = {
    color: "#3b5998"
}
const twitter = {
    color: "#38A1F3"
}
const linkedin = {
    color: "#0E76A8"
}
const github = {
    color: "#333"
}

const getColor = (name) => {
    if(name === 'facebook') return facebook;
    if(name === 'twitter') return twitter;
    if(name === 'linkedin') return linkedin;
    if(name === 'github') return github;
}

const Social = props => {
    return (
        <StyledSocial>
            <SocialUl>
                {props.social.map( (item,index) => (
                    <SocialLI key={`Social-${index}`}>
                        <SocialA href={item.url}>
                            <ThemeProvider theme={getColor(item.name)}>
                            <SocialIcon className={`fab fa-${item.name}`}></SocialIcon>
                            </ThemeProvider>
                        </SocialA>
                    </SocialLI>
                ))}
            </SocialUl>
        </StyledSocial>
    )
}

export default Social
