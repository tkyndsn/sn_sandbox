import React from "react";
import posed from "react-pose";
import styled, { keyframes, css } from "styled-components";
import * as variables from "./variables";
import CTA from "./CTA";
import Spacer from "./Spacer";

type Props = { text: string };

export default class HowItWorksB extends React.Component {
  render() {
    return (
      <EContainer>
        <FeaturesNav>
          <FeaturesNavSub>
            <CTA text="<" theme={variables.ctaThemeC} loading="0" />
            <Spacer size={variables.spacer2} />
            <CTA text=">" theme={variables.ctaThemeC} loading="0" />
          </FeaturesNavSub>
        </FeaturesNav>
      </EContainer>
    );
  }
}

const EContainer = styled.div`
  position: relative;
  position: sticky;
  top: 70px;
  width: auto;
  height: 86vh;
  top: ${variables.spacer7}rem;
  padding: ${variables.spacer7}rem;
  display: sticky;
  background: rgb(${variables.whiteSky});
  margin: ${variables.spacer7}rem;
  border-radius: ${variables.borderRadius}px;
  white-space: nowrap;
`;

const FeaturesNav = styled.div`
  position: absolute;
  bottom: ${variables.spacer7}rem;
  left: 16px;
  bottom: 16px;
  height: auto;
  width: 500px;
  background: transparent;
  border-radius: 8px;
  z-index: 2;
`;

const FeaturesNavSub = styled.div`
  display: flex;
`;
