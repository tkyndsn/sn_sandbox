import React from "react";
import styled from "styled-components";
import * as variables from "./variables";

const StyledProps = styled.svg`
  stroke: red;
  stroke-width: "2";
`;

export const circle = (
  <StyledProps
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 5L12 9L9 13" stroke-width="2" />
    <path d="M5 9H12" stroke-width="2" />
    <circle cx="9" cy="9" r="8" stroke-width="2" />
  </StyledProps>
);
