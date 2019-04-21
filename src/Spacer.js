import React from "react";
import styled from "styled-components";
import * as variables from "./variables.js";

export default class Spacer extends React.Component {
  render() {
    return <SpacerProps size={this.props.size} />;
  }

  static defaultProps: Props = {
    size: variables.spacer4
  };
}

const SpacerProps = styled.div`
  display: block;
  flex-shrink: 0;
  width: ${props => props.size};
  height: ${props => props.size};
`;
