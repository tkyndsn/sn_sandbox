import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import CTA from "./CTA";
import * as variables from "./variables";
import Spacer from "./Spacer";

function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <div className="row">
        <CTA text={cards[0].title} loading="0" />
        <Spacer size={variables.spacer4} />
        <CTA text={cards[1].title} theme={variables.ctaThemeB} loading="20" />
      </div>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ApercuBold;
    src: url("https://uploads-ssl.webflow.com/5ca5e23bdaf05a687b1fc814/5ca5e60341698ef195fc40ca_apercu_bold.otf");
  }

  @font-face {
    font-family: AkkuratRegular;
    src: url("https://uploads-ssl.webflow.com/5ca5e23bdaf05a687b1fc814/5ca5e61aade0bc4b15f8ea11_AkkuratPro-Regular.otf");
  }

  body {
    font-family: AkkuratRegular, Times, serif;
  }

  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
  }

  .row {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
  height: 90vh;
  border-radius: ${variables.borderRadius};
  border: 1px solid #f5f5f5;
  margin: 20px auto;
`;

const cards = [
  {
    title: "Converse with the cosmos",
    description:
      "Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.",
    image: "https://divjoy.com/static/images/undraw_collection.svg",
    imageRatio: 784 / 1016
  },
  {
    title: "Tweak anything 👩‍🎨",
    description:
      "Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.",
    image: "https://divjoy.com/static/images/undraw_upload.svg",
    imageRatio: 839 / 1133
  },
  {
    title: "Export your code 🚀",
    description:
      "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
    image: "https://divjoy.com/static/images/undraw_static_assets.svg",
    imageRatio: 730 / 1030
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
