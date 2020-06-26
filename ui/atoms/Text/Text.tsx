import styled, { StyledProps, css } from "styled-components";
import { textBase } from "../../utills/styles";

const fontStyle = ({ bold, italic}: StyledProps<TextProps>) => {
  let styles = []

  
  bold && styles.push(css`
    font-weight: bold;
  `)
  italic && styles.push(css`
    font-style: italic;
  `)

  italic && !bold && styles.push(css`
  font-family: Open Sans;
`)



  return styles
  ;
};

const fontSize = ({ size, theme }: StyledProps<TextProps>) => {
  const headingTheme = theme.font[size? size : 'medium'];
  return css`
  font-family: ${headingTheme.family};
  font-size: ${headingTheme.size};
  font-weight: ${headingTheme.weight};
  line-height: ${headingTheme.height};
  `
  ;
};

const Text = styled.span<TextProps>`
  ${textBase};
  ${(props) => fontSize(props)}
  ${(props) => fontStyle(props)}

`;

interface TextProps {
  bold?: boolean,
  italic?: boolean,
  size?: 'medium' | 'large' | 'small'
}

export { Text }