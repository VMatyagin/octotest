import styled, { css } from "styled-components";
import { textBase, listBase, tableBase } from "../../utills/styles";
import { device } from "../../utills/variables"

const fontStyle = ({ bold, italic, color, theme, img_fill }) => {
  let styles = [];
  let colorIsExist = theme.colors[color];

  bold &&
    styles.push(css`
      font-weight: bold;
    `);
  italic &&
    styles.push(css`
      font-style: italic;
    `);
  italic &&
    !bold &&
    styles.push(css`
      font-family: Open Sans;
    `);

  colorIsExist &&
    styles.push(css`
      color: ${colorIsExist};
    `);

    img_fill &&
    styles.push(css`
      color: ${theme.colors.white};
    `);
  return styles;
};

const fontSize = (props) => {
  const fontTheme = props.theme.font[props.size ? props.size : "medium"];
  const lineHeightTheme = props.theme.line[props.size ? props.size : "medium"];
  let styles = [
    css`
      font-family: ${fontTheme.family};
      font-size: ${fontTheme.size};
      font-weight: ${fontTheme.weight};
      line-height: ${lineHeightTheme.height};
    `,
  ];
  props.uppercase &&
    styles.push(css`
      font-weight: bold;
      text-transform: uppercase;
      line-height: ${props.theme.line.uppercase.height};
      letter-spacing: ${props.theme.font[props.uppercase].letterSpacing};
    `);
    props.img_fill &&
    styles.push(css`
      font-weight: bold;
      font-size: ${props.theme.font.img_fill};
      line-height: ${props.theme.line.img_fill.height};
    `);
  return styles;
};

const handleSize = ({ width, maxWidth, height }) => {
  let styles = [];
  if (width && width !== "none") {
    styles.push(css`
      width: ${width};
    `);
  }
  if (maxWidth && maxWidth !== "none") {
    styles.push(css`
      max-width: ${maxWidth};
    `);
  }
  if (height && height !== "none") {
    styles.push(css`
      height: ${height};
    `);
  }
  return styles;
};
const Text = styled.span`
  ${textBase};
  ${listBase};
  ${tableBase};
  ${(props) => fontSize(props)};
  ${(props) => fontStyle(props)};
  ${(props) => handleSize(props)};
  @media ${device.laptop} {
    ${(props) => props.responsiveStyle}

  }
`;

export { Text }