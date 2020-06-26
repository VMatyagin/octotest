import styled, { css, StyledProps } from "styled-components";
import { textBase } from "../../utills/styles";
import { device } from "../../utills/variables";

const sizeStyle = (props) => {
  const headingTheme = props.theme.heading[props.level - 1];

  return css`
    font-size: ${headingTheme.mobile.font.size};
    font-weight: ${headingTheme.mobile.font.weight};
    line-height: ${headingTheme.mobile.lineHeight};

    @media ${device.laptop} {
    font-size: ${headingTheme.laptop.font.size};
    font-weight: ${headingTheme.laptop.font.weight};
    line-height: ${headingTheme.laptop.lineHeight};
    }
  `;
};

export const Heading = styled.h1.attrs((props) => ({
  as: `h${props.level}`,
}))`
  ${textBase}
  ${(props) => sizeStyle(props)}
`;

