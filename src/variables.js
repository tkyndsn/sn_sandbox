export const deepNight = "56,64,123";
export const whiteSky = "245,257,255";
export const warmlight = "233,204,186";

export const borderRadius = "8px";

export const spacer1 = 8 / 18;
export const spacer2 = 16 / 18;
export const spacer3 = 24 / 18;
export const spacer4 = 32 / 18;
export const spacer5 = 48 / 18;

export const transition1 = {
  ease: [0.645, 0.045, 0.355, 1]
};

export const ease = "0.645, 0.045, 0.355, 1";
export const animDuration = 300;

export const ctaThemeA = {
  colorHexa: "#ff0000",
  color: deepNight,
  opacityDefault: 0.05,
  opacityHover: 0.9,
  height: 80,
  heightMobile: 72,
  paddingSides: spacer4,
  icon: true
};

export const ctaThemeB = {
  colorHexa: "orange",
  color: "255,0,0",
  opacityDefault: 0.05,
  opacityHover: 0.9,
  height: 48,
  heightMobile: 48,
  paddingSides: spacer2,
  icon: true
};

export const fluidInterpolation = (
  baseFontSize,
  scaleRatio,
  rangeStart,
  rangeEnd
) => {
  const maxFontSize = baseFontSize * scaleRatio;
  const multiplier = (baseFontSize - maxFontSize) / (rangeStart - rangeEnd);
  const fixed = maxFontSize - multiplier * rangeEnd;
  return `calc(${fixed}px + ${100 * multiplier}vw)`;
};

export const fluidInterpolationLineHeight = (
  baseFontSize,
  scaleRatio,
  rangeStart,
  rangeEnd
) => {
  const maxFontSize = baseFontSize * scaleRatio;
  const multiplier = (baseFontSize - maxFontSize) / (rangeStart - rangeEnd);
  const fixed = maxFontSize - multiplier * rangeEnd;
  return `calc((${fixed}px + ${100 * multiplier}vw)*1.555)`;
};
