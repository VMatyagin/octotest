import styled, { css } from "styled-components";

const buttonStyles = (props) => {
  const { img, colors } = props.theme;

  let styles = [];

  styles.push(css`
    border-radius: ${img.border.radius};
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

const Image = styled.img.attrs((props) => ({
  src:
    props.src +
    `?geometry=${props.width.slice(0, -2)}x${props.height.slice(
      0,
      -2
    )}&crop=center`,
}))`
  ${(props) => handleSize(props)}
  ${(props) => buttonStyles(props)}

  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
`;

export { Image };
