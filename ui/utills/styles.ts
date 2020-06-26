import { css, createGlobalStyle } from "styled-components";

const headingTheme = [
  {
    mobile: {
      font: {
        weight: "bold",
        size: "32px",
      },
      lineHeight: "120%",
    },
    laptop: {
      font: {
        weight: "800",
        size: "54px",
      },
      lineHeight: "120%",
    },
  },
  {
    mobile: {
      font: {
        weight: "bold",
        size: "30px",
      },
      lineHeight: "120%",
    },
    laptop: {
      font: {
        weight: "bold",
        size: "48px",
      },
      lineHeight: "120%",
    },
  },
  {
    mobile: {
      font: {
        weight: "bold",
        size: "26px",
      },
      lineHeight: "120%",
    },
    laptop: {
      font: {
        weight: "bold",
        size: "40px",
      },
      lineHeight: "120%",
    },
  },
  {
    mobile: {
      font: {
        weight: "bold",
        size: "20px",
      },
      lineHeight: "120%",
    },
    laptop: {
      font: {
        weight: "bold",
        size: "30px",
      },
      lineHeight: "140%",
    },
  },
];

const fontTheme = {
  small: {
    size: "16px",
    family: "Montserrat",
    weight: "normal",
    style: "normal",
  },
  medium: {
    size: "18px",
    family: "Montserrat",
    weight: "normal",
    style: "normal",
  },
  large: {
    size: "20px",
    family: "Montserrat",
    weight: "normal",
    style: "normal",
  },
};

const lineTheme = {
  small: {
    height: "150%",
  },
  medium: {
    height: "160%",
  },
  large: {
    height: "160%",
  },
};

export const BasicTheme = {
  font: fontTheme,
  line: lineTheme,
  colors: {
    default: "#333333",
  },
  heading: headingTheme,
};

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Montserrat', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
}
`;

// mixins

export const textBase = css`
  font-family: ${(props) => props.theme.font.medium.family};
  font-size: ${(props) => props.theme.font.medium.size};
  font-weight: ${(props) => props.theme.font.medium.weight};
  color: ${(props) => props.theme.colors.default};
  line-height: ${(props) => props.theme.line.medium.height};
`;
