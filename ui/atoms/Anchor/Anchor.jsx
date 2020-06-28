import styled, { css } from "styled-components";
import { textBase } from "../../utills/styles";

const fontStyle = (props) => {
  const fontTheme = props.theme.font.link;
  const lineHeightTheme = props.theme.line.link;
  let styles = [
    css`
      font-family: ${fontTheme.family};
      font-size: ${fontTheme.size};
      font-weight: ${fontTheme.weight};
      line-height: ${lineHeightTheme.height};
      font-weight: bold;
      color: ${props.theme.colors.basic_dark} !important;
      text-decoration: none;
    `,
  ];
  return styles;
};

const Anchor = styled.a`
  ${textBase};
  ${(props) => fontStyle(props)}
`;

export { Anchor };
