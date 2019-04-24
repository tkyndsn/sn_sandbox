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

// cta themes
export const ctaThemeA = {
  colorHexa: "#ff0000",
  color: deepNight,
  opacityDefault: 0.04,
  opacityHover: 0.08,
  opacityActive: 0.12,
  height: 80,
  heightMobile: 72,
  paddingSides: spacer3,
  icon: true
};

export const ctaThemeB = {
  colorHexa: "orange",
  color: "255,0,0",
  opacityDefault: 0.04,
  opacityHover: 0.08,
  opacityActive: 0.12,
  height: 48,
  heightMobile: 48,
  paddingSides: spacer2,
  icon: true
};

export const ctaThemeC = {
  colorHexa: "blue",
  color: "255,0,0",
  opacityDefault: 0.04,
  opacityHover: 0.08,
  opacityActive: 0.12,
  height: 48,
  heightMobile: 48,
  paddingSides: spacer2,
  icon: false
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
