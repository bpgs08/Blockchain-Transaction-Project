import { css } from "styled-components";

export const sizes = {
  reallySmall: ["max", 380],
  phoneLandscape: ["max", 576],
  tablet: ["max", 768],
  desktop: ["max", 992],
  large: ["max", 1200],
  larger: ["max", 1440],
  fullscreen: ["max", 1600],
  fullHd: ["max", 1920],
  ultrawide: ["max", 2560],
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (${sizes[label][0]}-width: ${sizes[label][1]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const theme = {
  colors: {
    grey1: "#eff2f5",
    grey2: "#dfe3eb",
    black1: "#121d33",
    white1: "#FFF",
    white2: "#f8f8f8",
    white3: "#ccffff",
  },
};

export const colors = theme.colors;
export default theme;
