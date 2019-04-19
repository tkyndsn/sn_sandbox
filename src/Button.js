import React from "react";
import posed from "react-pose";
import styled from "styled-components";
import * as variables from "./variables.js";

export default class Button extends React.Component {
  render() {
    return <ButtonProps theme={theme1}>{this.props.text}</ButtonProps>;
  }

  static defaultProps: Props = {
    text: "Hello World!"
  };
}

const ButtonProps = styled(
  posed.button({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      background: `rgb(${props => props.theme.color})`,
      transition: variables.transition1
    },
    hover: {
      scale: 1.04,
      background: "rgb(233,183,234)",
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
  border-radius: ${variables.borderRadius};
  height: 80px;
  font-family: ApercuBold;
`;

const theme1 = {
  colorHexa: "#ff0000",
  color: variables.deepNight,
  opacityDefault: 0.05,
  opacityHover: 0.9
};
