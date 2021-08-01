import React from 'react';
import styled from 'styled-components';
import H2Styled from '../css/H2Styled';
import H3Styled from '../css/H3Styled';
import H4Styled from '../css/H4Styled';
import PStyled from '../css/PStyled';

const CertContainer = styled.div`
    padding: 1em 2em;
    display: inline-block;
    box-sizing: border-box;
    flex-flow: nowrap;
    flex-direction: column;
    text-align: justify;
`;

const Certificates = props => {
    return (
        <div className="Certificates">
            <CertContainer>
                <H2Styled name="Certificaciones / Reconocimientos"/>
                {   
                    props.data.map((cert,id)=>(
                        <div className="Certificates-item" key={`Cert-${id}`}>
                            <H3Styled>{cert.name}</H3Styled>
                            <H4Styled>{cert.institution}</H4Styled>
                            <H4Styled><a href={cert.link}> Ver Credencial </a></H4Styled>
                            <PStyled>{cert.description}</PStyled>
                            <PStyled>{cert.date}</PStyled>
                        </div>
                    ))
                }
            </CertContainer>
        </div>
    )
}

export default Certificates
