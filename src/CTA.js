import React from "react";
import posed from "react-pose";
import styled, { keyframes } from "styled-components";
import * as variables from "./variables";

export default class Button extends React.Component {
  render() {
    return (
      <StyledButton loading={this.props.loading} theme={this.props.theme}>
        {this.props.text}
        <br />
        {this.props.icon ? arrowRight : ""}
      </StyledButton>
    );
  }

  static defaultProps: Props = {
    text: "Hello World!",
    theme: variables.ctaThemeA,
    loading: "10"
  };
}

const loadingAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100% }
`;

const translateArrow1 = keyframes`
  from {
    transform: translate(0px, 0px);
  }

  to {
    transform: translate(18px, 0px);
  }
`;

const translateArrow2 = keyframes`
  from {
    transform: translate(-18px, 0px);
  }

  to {
    transform: translate(0px, 0px);
  }
`;

const StyledButton = styled(
  posed.button({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      background: "rgb(233,183,34)",
      transition: variables.transition1
    },
    hover: {
      scale: 1.04,
      background: "rgb(233,183,144)",
      transition: variables.transition1
    },
    press: {
      scale: 1,
      transition: variables.transition1
    }
  })
)`
  color: rgb(${props => props.theme.color});
  font-size: ${variables.bodyFont.size};
  line-height: ${variables.bodyFont.lineHeight};
  padding: 0 ${variables.spacer4} 0 ${variables.spacer4};
  border: 2px solid
    rgba(${props => props.theme.color}, ${props => props.theme.opacityDefault});
  border-radius: 8px;
  height: ${props => (props.icon ? "80px" : "48px")};
  font-family: ApercuBold;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:after {
    background: rgba(${props => props.theme.color}, 0.2);
    display: ${props => (props.loading == "0" ? "none" : "block")};
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.loading}%;
    border-radius: ${variables.borderRadius};
    // animation: ${loadingAnimation} 5s linear infinite;
  }
  &:hover ${StyledArrowRight} {
    .arrow1 {
      animation: ${translateArrow1} 1 ${
  variables.animDuration
}ms cubic-bezier(${variables.ease});
      transform-origin: center;
    }
    .arrow2 {
      animation: ${translateArrow2} 1 ${
  variables.animDuration
}ms cubic-bezier(${variables.ease});
      transform-origin: center;
    }
  }
`;

StyledButton.defaultProps = {
  icon: true
};

const StyledArrowRight = styled.svg`
  stroke: rgb(${variables.deepNight});
`;

const arrowRight = (
  <StyledArrowRight
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="2px"
  >
    <circle cx="9" cy="9" r="8" />
    <g className="arrow1">
      <path d="M9 5L12 9L9 13" />
      <path d="M5 9H12" />
    </g>
    <g className="arrow2">
      <path d="M9 5L12 9L9 13" />
      <path d="M5 9H12" />
    </g>
  </StyledArrowRight>
);
