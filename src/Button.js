import React from "react";
import posed from "react-pose";
import styled from "styled-components";
import * as variables from "./variables.js";

export default class Button extends React.Component {
  render() {
    return <Henri>{this.props.text}</Henri>;
  }

  static defaultProps: Props = {
    text: "Hello World!"
  };
}

const Henri = styled(
  posed.button({
    hoverable: true,
    pressable: true,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 100,
      duration: 700
    },
    init: {
      scale: 1,
      background: "rgba(" + variables.deepNight + ",.04)"
    },
    hover: {
      scale: 1.5,
      background: "rgba(" + variables.deepNight + ",.08)"
    },
    press: {
      scale: 1,
      background: "rgba(" + variables.deepNight + ",.16)"
    }
  })
)`
  color: ${variables.deepNight};
  background: rgba(${variables.deepNight}, 0.04);
  font-size: ${variables.bodyFont.size};
  line-height: ${variables.bodyFont.lineHeight};
  padding: 0 ${variables.spacer4} 0 ${variables.spacer4};
  border: 2px solid rgba(${variables.deepNight}, 0.04);
  border-radius: ${variables.borderRadius};
  height: 80px;
`;
