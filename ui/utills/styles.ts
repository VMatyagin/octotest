import { css } from "styled-components";

export const BasicTheme = {
  font: {
    size: "18px",
    family: "Montserrat",
    weight: "normal",
    style: "normal",
  },
  line: {
    height: "160%"
  },
  colors: {
    default: "#333333",
  },
};

// mixins

export const textBase = css`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
  font-weight: ${props => props.theme.font.weight};
  colors: ${props => props.theme.colors.default};
  line-height: ${props => props.theme.line.height};
`
