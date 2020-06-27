import styled, { css } from "styled-components";
import { textBase } from "../../utills/styles";

const fontSize = (props) => {
  const size = props.size ? props.size : "medium";
  const lineHeightTheme = props.theme.line[size];
  return css`
    font-family: ${props.theme.font[size].family};
    font-size: ${props.theme.font[size].size};
    font-weight: bold;
    line-height: ${lineHeightTheme.height};
    color: ${props.theme.colors.brand};
  `;
};

const buttonStyles = (props) => {
  const { button, colors } = props.theme;

  let styles = [];
  const themeSize = props.size ? props.size : "medium";

  styles.push(css`
    height: ${button.size[themeSize].height};
    width: ${button.size[themeSize].width};
    border-width: ${button.border.width};
    border-radius: ${button.border.radius};
    border-color: ${colors.brand};
    background-color: ${colors.white};

    &:focus {
      outline: 0;
    }
  `);

  props.primary &&
    styles.push(css`
      border: none;
      background-color: ${colors.brand};
      color: ${colors.white};

      &:hover {
        background-color: ${colors.hover};
      }
    `);

    props.disabled &&
    styles.push(css`
      opacity: 0.25;
    `);

    props.full &&
    styles.push(css`
      width: 100%;
    `);

  return styles;
};

export const StyledButton = styled.button`
  ${textBase};
  ${(props) => fontSize(props)}
  ${(props) => buttonStyles(props)}
`;
