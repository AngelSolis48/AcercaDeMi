import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "../components/Main";
import Siderbar from "../components/Siderbar";
import Info from "../components/Info";
import About from "../components/About";
import Certificates from "../components/Certificates";
import Education from "../components/Education";
import Skills from "../components/Skills";
import MyWork from "../components/MyWork";
import Data from "../json/data.json";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
  }
`;

function App() {


  console.log(Data);
  console.log(Data.name);
  return Data.length === 0 ? <h1>Cargando...</h1> : (
    <Main>
      <GlobalStyle></GlobalStyle>
      <Siderbar>
        <About 
          avatar={Data.avatar}
          name={Data.name}
          profession={Data.profession}
          bio={Data.bio}
          address={Data.address}
          social={Data.social}
        />
        <MyWork
          works={Data.works}
        />
      </Siderbar>
      <Info>
        <Education 
          data={Data.education}
        />
        <Certificates 
          data={Data.certificates}
        />
        <Skills 
          data={Data.skills}
        />
      </Info>
    </Main>
  );
}

export default App;
