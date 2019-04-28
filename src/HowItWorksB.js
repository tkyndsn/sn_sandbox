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
        <Pastille />
        <GridLeft>
          <SlashIcon />
          <Spacer size={variables.spacer8} />
          <div>
            <span className="label">How it Works</span>
            <Spacer size={variables.spacer1} />
            <h1>Snips Brings Voice to the Edge</h1>
            <Spacer size={variables.spacer3} />
            <p>
              Discover how the end-to-end Snips Voice Platform turns speech into
              action with cutting-edge machine learning.
            </p>
          </div>
        </GridLeft>
        <GridRight>
          <FeatureVisualCard />
        </GridRight>
      </EContainer>
    );
  }
}

const StyledSlashIcon = styled.svg`
  stroke: rgb(${variables.deepNight});
`;

const SlashIcon = () => (
  <svg
    width="150"
    height="48"
    viewBox="0 0 150 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="102"
      width="48"
      height="48"
      rx="8"
      fill="#38407B"
      fill-opacity="0.04"
    />
    <rect
      x="103"
      y="1"
      width="46"
      height="46"
      rx="7"
      stroke="#38407B"
      stroke-opacity="0.04"
      stroke-width="2"
    />
    <path d="M123 18L129 24L123 30" stroke="#38407B" stroke-width="2" />
    <rect
      width="48"
      height="48"
      rx="8"
      transform="matrix(-1 0 0 1 48 0)"
      fill="#38407B"
      fill-opacity="0.04"
    />
    <rect
      x="-1"
      y="1"
      width="46"
      height="46"
      rx="7"
      transform="matrix(-1 0 0 1 46 0)"
      stroke="#38407B"
      stroke-opacity="0.04"
      stroke-width="2"
    />
    <path d="M27 18L21 24L27 30" stroke="#38407B" stroke-width="2" />
    <path d="M79 18L71 30" stroke="#38407B" stroke-width="2" />
    <g clip-path="url(#clip0)">
      <path
        d="M56.4401 30H64.4501V27.912H60.0221L63.1001 23.898C63.8561 22.908 64.1801 21.918 64.1801 20.91C64.1801 18.786 62.8121 17.256 60.4181 17.256C58.3121 17.256 56.7641 18.696 56.6381 20.604L58.7261 21C58.8701 19.938 59.4641 19.344 60.3641 19.344C61.3901 19.344 61.9121 19.974 61.9121 21C61.9121 21.72 61.6961 22.332 60.9401 23.286L56.4401 29.1V30Z"
        fill="#38407B"
      />
    </g>
    <g clip-path="url(#clip1)">
      <path
        d="M88.9429 30H91.2109V27.66H92.6149V25.572H91.2109V17.4H88.8349L83.5249 26.508V27.66H88.9429V30ZM86.2789 25.572L88.9429 20.766V25.572H86.2789Z"
        fill="#38407B"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="10" height="48" fill="white" transform="translate(56)" />
      </clipPath>
      <clipPath id="clip1">
        <rect width="10" height="48" fill="white" transform="translate(84)" />
      </clipPath>
    </defs>
  </svg>
);

const GridLeft = styled.div`
  grid-area: gridLeft;
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const GridRight = styled.div`
  display: block;
  grid-area: gridRight;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeatureVisualCard = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  height: 0;
  padding: 25% 0;
  border-radius: 50%;
  background: rgb(${variables.deepNight});
`;

const EContainer = styled.div`
  position: relative;
  width: auto;
  height: 86vh;
  padding: ${variables.spacer7}rem;
  background: rgb(${variables.whiteSky});
  margin: ${variables.spacer7}rem;
  border-radius: ${variables.borderRadius}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: ${variables.spacer7}rem;
  grid-row-gap: 20px;
  grid-template-areas: "gridLeft gridRight";
`;

const Pastille = styled.div`
  width: 14px;
  height: 14px;
  display: block;
  border-radius: 4px;
  background: white;
  position: absolute;
  top: 16px;
  left: 16px;
`;
