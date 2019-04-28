import React from "react";

// colors
export const deepNight = "56,64,123";
export const whiteSky = "245,247,255";
export const warmlight = "233,204,186";

// border radius
export const borderRadius = 8;

// spacers
export const spacer0 = 0;
export const spacer1 = 8 / 18;
export const spacer2 = 16 / 18;
export const spacer3 = 24 / 18;
export const spacer4 = 32 / 18;
export const spacer5 = 48 / 18;
export const spacer7 = 72 / 18;

//animation related
export const transition1 = {
  duration: 300,
  ease: [0.645, 0.045, 0.355, 1]
};

export const ease = "0.645, 0.045, 0.355, 1";
export const animDuration = 300;

//svg
const ArrowRightPath = () => (
  <>
    <circle cx="9" cy="9" r="8" />
    <g className="arrow1">
      <path d="M9 5L12 9L9 13" />
      <path d="M5 9H12" />
    </g>
    <g className="arrow2">
      <path d="M9 5L12 9L9 13" />
      <path d="M5 9H12" />
    </g>
  </>
);

const SlashIconPath = () => <path d="M9 3L1 15" />;

const ChevronRightPath = () => <path d="M2 3L8 9L2 15" />;

// cta themes
export const ctaThemeA = {
  color: deepNight,
  opacityDefault: 0.04,
  opacityHover: 0.08,
  opacityActive: 0.12,
  height: 80 / 18,
  heightMobile: spacer7,
  paddingSides: spacer3,
  icon: true,
  iconPath: ArrowRightPath(),
  iconWidth: 18
};

export const ctaThemeB = {
  color: "255,0,0",
  opacityDefault: 0.04,
  opacityHover: 0.08,
  opacityActive: 0.12,
  height: spacer5,
  heightMobile: spacer5,
  paddingSides: spacer2,
  icon: true,
  iconPath: ArrowRightPath(),
  iconWidth: 18
};

export const ctaThemeC = {
  color: "255,0,0",
  opacityDefault: 0.04,
  opacityHover: 0.08,
  opacityActive: 0.12,
  height: spacer5,
  heightMobile: spacer5,
  paddingSides: spacer2,
  icon: false,
  iconPath: ArrowRightPath(),
  iconWidth: 18
};

export const ctaThemeD = {
  color: "255,0,0",
  opacityDefault: 0.04,
  opacityHover: 0.08,
  opacityActive: 0.12,
  height: spacer5,
  heightMobile: spacer5,
  paddingSides: spacer2,
  icon: true,
  iconPath: ChevronRightPath(),
  iconWidth: 10
};
//responsive

// responsive function
export const fluidInterpolation = (
  baseFontSize,
  scaleRatio,
  rangeStart,
  rangeEnd
) => {
  let toRem = value => value / 18;
  let maxFontSize = baseFontSize * scaleRatio;
  let baseRemFontSize = 1;
  let maxRemFontSize = toRem(maxFontSize);
  let emRangeStart = toRem(rangeStart);
  let emRangeEnd = toRem(rangeEnd);
  let multiplier =
    (baseRemFontSize - maxRemFontSize) / (emRangeStart - emRangeEnd);
  let fixed = maxRemFontSize - multiplier * emRangeEnd;
  return `
  html, button { font-size: ${baseRemFontSize}rem }

  @media (max-width: ${emRangeStart}em) {
    html, button { 
      font-size: ${baseRemFontSize}rem; 
      line-height: calc(${baseRemFontSize}rem*1.555);
      // background: pink;
    }
  }

  @media (min-width: ${emRangeStart}em) {
    html, button { 
      font-size: calc(${fixed}rem + ${100 * multiplier}vw); 
      line-height: calc((${fixed}rem + ${100 * multiplier}vw)*1.555);
      // background: grey;
    }
  }

  @media (min-width: ${emRangeEnd}em) {
    html, button { 
      font-size: ${maxRemFontSize}rem;
      line-height: calc(${maxRemFontSize}rem*1.555);
      // background: yellowgreen;
    }
  }`;
};
