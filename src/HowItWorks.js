import React from "react";
import posed from "react-pose";
import styled, { keyframes, css } from "styled-components";
import * as variables from "./variables";
import CTA from "./CTA";
import Spacer from "./Spacer";

type Props = { text: string };

export default class HowItWorks extends React.Component {
  render() {
    return (
      <EContainer>
        <FeaturesNav>
          <FeaturesNavSub>
            <CTA text="Wake Word" theme={variables.ctaThemeC} loading="0" />
            <Spacer size={variables.spacer2} />
            <CTA text="SLU" theme={variables.ctaThemeC} loading="0" />
            <Spacer size={variables.spacer2} />
            <CTA text="Dialogue" theme={variables.ctaThemeC} loading="0" />
          </FeaturesNavSub>
          <Spacer size={variables.spacer2} />
        </FeaturesNav>
        <Pastille />
        <FeaturesList>
          <FeaturesCopy>
            <CopyCard>
              <div>
                <span className="label">How it Works</span>
                <Spacer size={variables.spacer1} />
                <h1>Snips Brings Voice to the Edge</h1>
                <Spacer size={variables.spacer3} />
                <p>
                  Discover how the end-to-end Snips Voice Platform turns speech
                  into action with cutting-edge machine learning.
                </p>
              </div>
            </CopyCard>
            <CopyCard>
              <div>
                <span className="label">How it Works</span>
                <Spacer size={variables.spacer1} />
                <h1>Snips Brings Voice to the Edge</h1>
                <Spacer size={variables.spacer3} />
                <p>
                  Discover how the end-to-end Snips Voice Platform turns speech
                  into action with cutting-edge machine learning.
                </p>
              </div>
            </CopyCard>
            <CopyCard>
              <div>
                <span className="label">How it Works</span>
                <Spacer size={variables.spacer1} />
                <h1>Snips Brings Voice to the Edge</h1>
                <Spacer size={variables.spacer3} />
                <p>
                  Discover how the end-to-end Snips Voice Platform turns speech
                  into action with cutting-edge machine learning.
                </p>
              </div>
            </CopyCard>
            <CopyCard>
              <div>
                <span className="label">How it Works</span>
                <Spacer size={variables.spacer1} />
                <h1>Snips Brings Voice to the Edge</h1>
                <Spacer size={variables.spacer3} />
                <p>
                  Discover how the end-to-end Snips Voice Platform turns speech
                  into action with cutting-edge machine learning.
                </p>
              </div>
            </CopyCard>
          </FeaturesCopy>
          <VisualTrack>
            <VisualTrackWrap>
              <FeaturesVisuals>
                <FeatureVisualCard />
              </FeaturesVisuals>
            </VisualTrackWrap>
          </VisualTrack>
        </FeaturesList>
      </EContainer>
    );
  }
}

const EContainer = styled.div`
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: block;
  width: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: rgb(${variables.whiteSky});
  margin: 0 ${variables.spacer7}rem 0 ${variables.spacer7}rem;
  border-radius: ${variables.borderRadius}px;
`;

const EContainerSpacer = styled.div`
  width: 100%;
  min-height: 7vh;
  max-height: 7vh;
  display: block;
  border: 1px dotted purple;
`;

const FeaturesList = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 86vw;
  padding-left: ${variables.spacer7}rem;
`;

const VisualTrack = styled.div`
  position: relative;
  width: 50%;
`;

const VisualTrackWrap = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const FeaturesVisuals = styled.div`
  position: relative;
  height: 86vh;
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

const FeaturesCopy = styled.div`
  position: relative;
  width: 50%;
`;

const CopyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 86vh;
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

const FeaturesNav = styled.div`
  position: sticky;
  bottom: ${variables.spacer7}rem;
  left: 16px;
  top: calc(90vh - 64px);
  height: auto;
  width: 500px;
  background: transparent;
  border-radius: 8px;
  z-index: 2;
  opacity: 0;
`;

const FeaturesNavSub = styled.div`
  display: flex;
`;
