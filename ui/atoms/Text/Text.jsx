import styled, { css } from "styled-components";
import { textBase } from "../../utills/styles";

const fontStyle = ({ bold, italic }) => {
  let styles = [];

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
  props.uppercase && styles.push(css`
    font-weight: bold;
    text-transform: uppercase;
    line-height: ${props.theme.line.uppercase.height};
    letter-spacing: ${props.theme.font[props.uppercase].letterSpacing}
  `)
  return styles;
};

const Text = styled.span`
  ${textBase};
  ${(props) => fontSize(props)}
  ${(props) => fontStyle(props)}
`;

export { Text };
