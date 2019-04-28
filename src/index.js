import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import CTA from "./CTA";
import Spacer from "./Spacer";
import DialogAnimation from "./DialogAnimation";
import * as variables from "./variables";
import HowItWorks from "./HowItWorks";
import HowItWorksB from "./HowItWorksB";

function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <Spacer size={variables.spacer7} />
      <div className="row">
        <div>
          <CTA text={cards[0].title} />
          <Spacer size={variables.spacer4} />
          <CTA text={cards[1].title} theme={variables.ctaThemeB} />
          <Spacer size={variables.spacer4} />
          <CTA text={cards[1].title} theme={variables.ctaThemeC} loading="20" />
          <Spacer size={variables.spacer4} />
          <CTA text="" theme={variables.ctaThemeD} />
          {/* <DialogAnimation /> */}
        </div>
      </div>
      <Spacer size={variables.spacer7} />
      <HowItWorks />
      <Spacer size={variables.spacer7} />
      <HowItWorksB />
      <Spacer size={variables.spacer7} />
      <div className="row" />
      <Spacer size={variables.spacer7} />
    </Container>
  );
}

// global CSS
const GlobalStyle = createGlobalStyle`
  @-moz-document url-prefix() {
    body {
      font-weight: lighter !important;
    }
  }
  @font-face {
    font-family: ApercuBold;
    src: url("https://uploads-ssl.webflow.com/5ca5e23bdaf05a687b1fc814/5ca5e60341698ef195fc40ca_apercu_bold.otf");
  }

  @font-face {
    font-family: AkkuratRegular;
    src: url("https://uploads-ssl.webflow.com/5ca5e23bdaf05a687b1fc814/5ca5e61aade0bc4b15f8ea11_AkkuratPro-Regular.otf");
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

  html {
    font-family: AkkuratRegular, Helvetica, serif;
    font-size: 18px;
    line-height: calc(18px * 1.555);
    width: 100%;
    color: rgb(${variables.clearNight});
  }
  
  ${variables.fluidInterpolation(16, 1.25, 375, 1920)}

  h1 {
    font-family: ApercuBold;
    font-size: 3.055rem;
    line-height: 3.333rem;
    color: rgb(${variables.deepNight});
  }

  .label {
    text-transform: uppercase;
    font-size: 0.777rem;
    line-height: 0.888rem;
    font-family: ApercuBold;
    color: rgb(${variables.deepNight});
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: auto;
    height: auto;
    border-radius: ${variables.borderRadius}px;
    border: 1px solid #f5f5f5;
    margin: 0 auto;
    padding: 5vw;
    margin: 0 ${variables.spacer7}rem 0 ${variables.spacer7}rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

const Container = styled.div`
  display: block;
  position: relative;
`;

// content
const cards = [
  {
    title: "Converse with the cosmos",
    description:
      "Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.",
    image: "https://divjoy.com/static/images/undraw_collection.svg",
    imageRatio: 784 / 1016
  },
  {
    title: "Tweak anything \xa0",
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
