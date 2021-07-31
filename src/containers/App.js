import React from "react";
import Main from "../components/Main";
import Siderbar from "../components/Siderbar";
import Info from "../components/Info";
import About from "../components/About";
import Certificates from "../components/Certificates";
import Education from "../components/Education";
import Skills from "../components/Skills";
import useGetData from "../hooks/useGetData";

function App() {

  const data = useGetData();

  console.log(data);
  return (
    <Main>
      <Siderbar>
        <About />
      </Siderbar>
      <Info>
        <Education />
        <Certificates />
        <Skills />
      </Info>
    </Main>
  );
}

export default App;
