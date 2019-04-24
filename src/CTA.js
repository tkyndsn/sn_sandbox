import React from "react";
import posed from "react-pose";
import styled, { keyframes } from "styled-components";
import * as variables from "./variables";
import Spacer from "./Spacer";

type Props = { text: string };

export default class CTA extends React.Component {
  render() {
    {
      console.log(this.props);
    }
    return (
      <StyledButton loading={this.props.loading} theme={this.props.theme}>
        {this.props.text}

        {this.props.theme.icon === true &&
        (this.props.theme.height === 80 ||
          this.props.theme.heightMobile === 72) ? (
          <ArrowRight theme={this.props.theme} />
        ) : (
          ""
        )}
        {/*If height values inside button theme are not 80 or 72, button will be one line. So addition fo a spacer betwern text and icon */}
        {this.props.theme.icon === true &&
        (this.props.theme.height !== 80 ||
          this.props.theme.heightMobile !== 72) ? (
          <>
            <Spacer size={variables.spacer1} />
            <ArrowRight theme={this.props.theme} />
          </>
        ) : (
          ""
        )}
      </StyledButton>
    );
  }

  static defaultProps: Props = {
    text: "Hello World!",
    theme: variables.ctaThemeA,
    loading: "10"
  };
}

// animations
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

// svg arrow right icon
const StyledArrowRight = styled.svg`
  stroke: rgb(${props => props.theme.color});
`;

const ArrowRight = ({ theme }) => (
  <StyledArrowRight
    width="18"
    height="18"
    viewBox="0,0,18,18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="2px"
    theme={theme}
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

// button configuration
const StyledButton = styled.button`
  will-change: transform;
  color: rgb(${props => props.theme.color});
  padding: 0 ${props => props.theme.paddingSides}rem 0
    ${props => props.theme.paddingSides}rem;
  border: 2px solid
    rgba(${props => props.theme.color}, ${props => props.theme.opacityDefault});
  border-radius: ${variables.borderRadius}px;
  height: ${props => props.theme.height}px;
  @media (max-width: 375px) {
    height: ${props => props.theme.heightMobile}px;
  }
  font-family: ApercuBold;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => (props.theme.height === 80 ? "column" : "row")};
  transition: all ${variables.animDuration}ms cubic-bezier(${variables.ease});
  background: rgba(
    ${props => props.theme.color},
    ${props => props.theme.opacityDefault}
  );
  &:after {
    background: rgba(${props => props.theme.color}, 0.08);
    display: ${props => (props.loading === "0" ? "none" : "block")};
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.loading}%;
    border-radius: ${variables.borderRadius - 2}px;
    animation: ${loadingAnimation} 5s linear infinite;
  }
  &:hover {
    transform: scale(1.02);
    background: rgba(
      ${props => props.theme.color},
      ${props => props.theme.opacityHover}
    );
  }
  &:active {
    transform: scale(1);
    background: rgba(
      ${props => props.theme.color},
      ${props => props.theme.opacityActive}
    );
  }
  &:hover ${StyledArrowRight} {
    .arrow1 {
      animation: ${translateArrow1} 1 ${variables.animDuration}ms
        cubic-bezier(${variables.ease});
      transform-origin: center;
    }
    .arrow2 {
      animation: ${translateArrow2} 1 ${variables.animDuration}ms
        cubic-bezier(${variables.ease});
      transform-origin: center;
    }
  }
`;
