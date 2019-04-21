import React from "react";
import posed from "react-pose";
import styled, { keyframes } from "styled-components";
import * as variables from "./variables";
import * as icons from "./icons";

export default class Button extends React.Component {
  render() {
    return (
      <CTAProps loading={this.props.loading} theme={this.props.theme}>
        {this.props.text}
        <br />
        {this.props.icon}
      </CTAProps>
    );
  }

  static defaultProps: Props = {
    text: "Hello World!",
    theme: variables.ctaThemeA,
    loading: "10",
    icon: icons.circle
  };
}

const LoadingAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100% }
`;

const CTAProps = styled(
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
  height: 80px;
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
    // animation: ${LoadingAnimation} 5s linear infinite;
  }
  &:hover {
    animation-play-state: paused;
    transform: translate(200px, 150px) rotate(20deg);
  }
`;
