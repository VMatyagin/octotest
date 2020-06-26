import styled, { css, StyledProps } from "styled-components";
import { textBase } from "../../utills/styles";
import { device } from "../../utills/variables";

const sizeStyle = (props: StyledProps<HeadingProps>) => {
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

export const Heading = styled.h1.attrs((props: HeadingProps) => ({
  as: `h${props.level}`,
}))<HeadingProps>`
  ${textBase}
  ${(props) => sizeStyle(props)}
`;

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
}
